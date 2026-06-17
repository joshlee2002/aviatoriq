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

  // ─── Body parser — reduced from 50mb to 1mb (no file upload endpoint needs 50mb) ──
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ limit: "1mb", extended: true }));

  // ─── Global rate limiter — broad abuse prevention ─────────────────────────
  const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.NODE_ENV === "development" ? 100000 : 1000, // generous for page loads; mutations have their own stricter limiter
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again later." },
  });
  app.use(globalLimiter);

  // ─── Strict rate limiter for public mutations ──────────────────────────────
  const mutationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
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
  const uploadsPath = process.env.LOCAL_STORAGE_PATH ?? path.join(process.cwd(), "uploads");
  app.use("/uploads", express.static(uploadsPath));

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
