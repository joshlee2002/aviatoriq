/**
 * appUrl.ts
 *
 * Single source of truth for the application's public URL.
 *
 * Priority order:
 *   1. APP_URL env var (set explicitly in Railway / production)
 *   2. RAILWAY_PUBLIC_DOMAIN env var (auto-set by Railway)
 *   3. Development fallback: http://localhost:5173
 *
 * Never hardcode a Railway domain anywhere else in the codebase.
 * Import getAppUrl() wherever the public URL is needed.
 */

export function getAppUrl(): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/$/, "");
  }
  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
  }
  return "http://localhost:5173";
}
