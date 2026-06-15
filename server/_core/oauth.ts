/**
 * Self-hosted authentication routes.
 * Replaces Manus OAuth with a simple local admin login using a fixed password.
 * The admin password is set via ADMIN_PASSWORD env var (default: aviatoriq2026).
 */
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";

const ADMIN_OPEN_ID = process.env.OWNER_OPEN_ID ?? "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "aviatoriq2026";
const ADMIN_NAME = process.env.ADMIN_NAME ?? "AviatorIQ Admin";

export function registerOAuthRoutes(app: Express) {
  // ─── Local login page ────────────────────────────────────────────────────
  app.get("/api/auth/login", (_req: Request, res: Response) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AviatorIQ — Admin Login</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
           background: #0A1628; display: flex; align-items: center;
           justify-content: center; min-height: 100vh; }
    .card { background: #fff; border-radius: 12px; padding: 40px; width: 380px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
    .logo { font-size: 28px; font-weight: 800; color: #F97316; margin-bottom: 4px; }
    .subtitle { color: #64748b; font-size: 14px; margin-bottom: 32px; }
    label { display: block; font-size: 13px; font-weight: 600; color: #334155;
            margin-bottom: 6px; }
    input { width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0;
            border-radius: 8px; font-size: 15px; outline: none; transition: border 0.2s; }
    input:focus { border-color: #F97316; }
    .btn { width: 100%; padding: 12px; background: #F97316; color: #fff;
           border: none; border-radius: 8px; font-size: 15px; font-weight: 700;
           cursor: pointer; margin-top: 24px; transition: background 0.2s; }
    .btn:hover { background: #ea6c0a; }
    .error { background: #fef2f2; border: 1px solid #fca5a5; color: #dc2626;
             padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }
    .field { margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">AviatorIQ</div>
    <div class="subtitle">Admin Dashboard Login</div>
    <form method="POST" action="/api/auth/login">
      <div class="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="admin" required autocomplete="username" />
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="••••••••" required autocomplete="current-password" />
      </div>
      <button type="submit" class="btn">Sign In</button>
    </form>
  </div>
</body>
</html>`);
  });

  // ─── Local login POST handler ────────────────────────────────────────────
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { username, password } = req.body as { username?: string; password?: string };

    const validUsername = (username ?? "").trim().toLowerCase();
    const validPassword = (password ?? "").trim();

    if (
      (validUsername === "admin" || validUsername === ADMIN_OPEN_ID) &&
      validPassword === ADMIN_PASSWORD
    ) {
      try {
        // Ensure admin user exists in DB
        await db.upsertUser({
          openId: ADMIN_OPEN_ID,
          name: ADMIN_NAME,
          email: null,
          loginMethod: "local",
          role: "admin",
          lastSignedIn: new Date(),
        });

        const sessionToken = await sdk.createSessionToken(ADMIN_OPEN_ID, {
          name: ADMIN_NAME,
          expiresInMs: ONE_YEAR_MS,
        });

        const cookieOptions = getSessionCookieOptions(req);
        res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
        res.redirect(302, "/");
      } catch (err) {
        console.error("[Auth] Login failed:", err);
        res.status(500).send("Login error — check server logs.");
      }
    } else {
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AviatorIQ — Admin Login</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
           background: #0A1628; display: flex; align-items: center;
           justify-content: center; min-height: 100vh; }
    .card { background: #fff; border-radius: 12px; padding: 40px; width: 380px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
    .logo { font-size: 28px; font-weight: 800; color: #F97316; margin-bottom: 4px; }
    .subtitle { color: #64748b; font-size: 14px; margin-bottom: 32px; }
    label { display: block; font-size: 13px; font-weight: 600; color: #334155;
            margin-bottom: 6px; }
    input { width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0;
            border-radius: 8px; font-size: 15px; outline: none; transition: border 0.2s; }
    input:focus { border-color: #F97316; }
    .btn { width: 100%; padding: 12px; background: #F97316; color: #fff;
           border: none; border-radius: 8px; font-size: 15px; font-weight: 700;
           cursor: pointer; margin-top: 24px; transition: background 0.2s; }
    .btn:hover { background: #ea6c0a; }
    .error { background: #fef2f2; border: 1px solid #fca5a5; color: #dc2626;
             padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }
    .field { margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">AviatorIQ</div>
    <div class="subtitle">Admin Dashboard Login</div>
    <div class="error">Invalid username or password. Please try again.</div>
    <form method="POST" action="/api/auth/login">
      <div class="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="admin" required autocomplete="username" />
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="••••••••" required autocomplete="current-password" />
      </div>
      <button type="submit" class="btn">Sign In</button>
    </form>
  </div>
</body>
</html>`);
    }
  });

  // ─── Legacy Manus OAuth callback — redirect to local login ──────────────
  app.get("/api/oauth/callback", (_req: Request, res: Response) => {
    res.redirect(302, "/api/auth/login");
  });

  // ─── Manus OAuth portal stub — serves our own login page ────────────────
  app.get("/app-auth", (_req: Request, res: Response) => {
    res.redirect(302, "/api/auth/login");
  });
}
