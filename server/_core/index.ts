import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import path from "path";
import rateLimit from "express-rate-limit";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { seoInjectorMiddleware } from "../seoInjector";
import { registerSitemapRoute } from "../sitemapGenerator";
import { validateEnv } from "./envValidation";
import Stripe from "stripe";
import { completeRoadmapPurchase, getLeadById } from "../db";
import { sendEmail } from "./email";
import PremiumRoadmapUnlocked from "../emails/PremiumRoadmapUnlocked";
import * as React from "react";
import { getAppUrl } from "./appUrl";

// ─── Startup env validation ────────────────────────────────────────────────────
validateEnv();

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Trust the Manus reverse proxy so req.protocol is 'https' and secure cookies work correctly
  app.set("trust proxy", 1);

  // ─── Stripe webhook — MUST use raw body, registered BEFORE json middleware ──
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req, res) => {
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
      const stripeKey = process.env.STRIPE_SECRET_KEY;
      if (!webhookSecret || !stripeKey) {
        res.status(400).send("Stripe not configured");
        return;
      }
      const stripe = new Stripe(stripeKey, { apiVersion: "2026-05-27.dahlia" });
      const sig = req.headers["stripe-signature"] as string;
      let event: Stripe.Event;
      try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
      } catch (err) {
        console.error("[Stripe] Webhook signature verification failed:", err);
        res.status(400).send("Webhook signature invalid");
        return;
      }
      if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        if (
          session.payment_status === "paid" &&
          session.metadata?.product === "premium_roadmap"
        ) {
          try {
            await completeRoadmapPurchase(
              session.id,
              typeof session.payment_intent === "string"
                ? session.payment_intent
                : session.payment_intent?.id
            );
            console.log(
              `[Stripe] Premium roadmap unlocked for session ${session.id}`
            );
            // ── Send post-payment confirmation email (non-fatal) ──────────
            try {
              const leadId = session.metadata?.leadId
                ? Number(session.metadata.leadId)
                : null;
              if (leadId) {
                const lead = await getLeadById(leadId);
                if (lead?.email) {
                  const firstName = lead.fullName?.split(" ")[0] ?? "there";
                  const appUrl = getAppUrl();
                  const resultsUrl = `${appUrl}/results/${lead.id}`;
                  await sendEmail({
                    to: lead.email,
                    subject: "Your Premium AviatorIQ Roadmap is unlocked \uD83C\uDF89",
                    react: React.createElement(PremiumRoadmapUnlocked, {
                      firstName,
                      resultsUrl,
                      pdfUrl: lead.pdfKey ?? null,
                      leadId: lead.id,
                    }),
                  });
                }
              }
            } catch (emailErr) {
              console.warn("[Email] Post-payment email failed (non-fatal):", emailErr);
            }
          } catch (e) {
            console.error("[Stripe] Failed to complete purchase:", e);
          }
        }
      }
      res.json({ received: true });
    }
  );

  // ─── Body parser — reduced from 50mb to 1mb (no file upload endpoint needs 50mb) ──
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ limit: "1mb", extended: true }));

  // ─── Global rate limiter — broad abuse prevention ─────────────────────────
  const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5000, // generous for page loads; mutations have their own stricter limiter
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again later." },
  });
  app.use(globalLimiter);

  // ─── Strict rate limiter for public mutations ──────────────────────────────
  const mutationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many submissions, please try again in 15 minutes." },
  });
  // Apply to all tRPC mutation paths that are public-facing
  app.use("/api/trpc/leads.submit", mutationLimiter);
  app.use("/api/trpc/leads.captureSchoolUnlock", mutationLimiter);
  app.use("/api/trpc/leads.generateRoadmap", mutationLimiter);
  app.use("/api/trpc/partner.joinWaitlist", mutationLimiter);
  app.use("/api/trpc/finance.submitInterest", mutationLimiter);
  app.use("/api/trpc/flightDeck.saveShare", mutationLimiter);
  app.use("/api/trpc/flightDeck.captureEmail", mutationLimiter);
  app.use("/api/trpc/guides.subscribe", mutationLimiter);
  app.use("/api/trpc/introductions.requestIntroductions", mutationLimiter);

  // ─── Serve local uploaded files (PDFs, etc.) ──────────────────────────────
  const uploadsPath =
    process.env.LOCAL_STORAGE_PATH ?? path.join(process.cwd(), "uploads");
  app.use("/uploads", express.static(uploadsPath));

  // ─── Health check (used by Railway and other hosting platforms) ──────────────────
  app.get("/api/health", (_req, res) => {
    const hasOpenAI = !!(
      process.env.OPENAI_API_KEY || process.env.BUILT_IN_FORGE_API_KEY
    );
    const hasStorage = !!(
      process.env.STORAGE_BUCKET_URL && process.env.STORAGE_ACCESS_KEY_ID
    );
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      openai: hasOpenAI ? "configured" : "missing",
      storage: hasStorage ? "r2" : "local",
      pdfGeneration: hasOpenAI ? "enabled" : "degraded",
    });
  });

  registerStorageProxy(app);
  registerOAuthRoutes(app);

  // ─── Dynamic sitemap + robots.txt ─────────────────────────────────────────
  registerSitemapRoute(app);

  // ─── tRPC API ──────────────────────────────────────────────────────────────
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // ─── SEO injector (must come before Vite / static serving) ────────────────
  app.use(seoInjectorMiddleware);

  // ─── Development mode uses Vite, production mode uses static files ─────────
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
