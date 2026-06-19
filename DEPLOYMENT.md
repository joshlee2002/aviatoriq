# AviatorPath Deployment Guide

This guide covers deploying AviatorPath to Railway and configuring optional services like OpenAI and Cloudflare R2 for persistent storage.

## 1. Deploying to Railway

AviatorPath is designed to be deployed easily on [Railway](https://railway.app/).

1. Connect your GitHub repository to Railway.
2. Add a **MySQL** database plugin to your Railway project.
3. Link the MySQL plugin to your web service. Railway will automatically inject the `DATABASE_URL` environment variable.
4. Add the remaining required environment variables (see below).
5. The application will automatically run `npm run build` and `npm run start` based on the `package.json` scripts.

## 2. Environment Variables

### Required

- `DATABASE_URL` — Provided automatically by Railway's MySQL plugin.
- `JWT_SECRET` — A long, random string used for session signing.

### Optional (Graceful Degradation)

- `OPENAI_API_KEY` — Required for AI-generated pilot roadmaps and dynamic PDF prose. If omitted, the server will still start, but the PDF blueprints will fall back to a structured, deterministic format using the lead's data.

### Optional (Persistent Storage)

By default, uploaded files (like school images added via the admin dashboard) are written to the local filesystem (`/uploads`). On Railway, local files are ephemeral and will be wiped on every redeploy.

To ensure images persist across deploys, you should configure Cloudflare R2 (or any S3-compatible storage). The 109 default seeded images will continue to be served locally even when R2 is configured.

- `STORAGE_BUCKET_URL` — e.g. `https://<account-id>.r2.cloudflarestorage.com`
- `STORAGE_BUCKET_NAME` — e.g. `aviatorpath`
- `STORAGE_ACCESS_KEY_ID` — Your R2/S3 access key
- `STORAGE_SECRET_ACCESS_KEY` — Your R2/S3 secret key
- `STORAGE_PUBLIC_CDN_URL` — (Optional) A public bucket URL for direct reads, e.g. `https://pub-<hash>.r2.dev`
- `STORAGE_REGION` — Use `auto` for R2, or the specific region for AWS S3.

## 3. Configuring Cloudflare R2 for Storage

1. Create a Cloudflare account and navigate to **R2**.
2. Create a new bucket named `aviatorpath`.
3. In the bucket settings, under **Public Access**, enable "Public URL" or "Custom Domain" so images can be served directly to users.
4. Go back to the main R2 page and click **Manage R2 API Tokens**.
5. Create a new token with **Object Read & Write** permissions.
6. Copy the Access Key ID, Secret Access Key, and the endpoint URL into your Railway environment variables.

## 4. Seeding the Database

Once deployed, you can seed the database with the default flight schools (including 22+ US schools and international options).

You can run the seed scripts using the Railway CLI or by executing them in the Railway web console:

```bash
# Seed international schools
node seed-schools.mjs

# Seed US schools
node seed-us-schools.mjs
```

## 5. Health Checks

Railway uses the `/api/health` endpoint to monitor deployment status. This endpoint returns the status of optional services:

```json
{
  "status": "ok",
  "timestamp": "2026-06-17T12:00:00.000Z",
  "openai": "configured",
  "storage": "r2",
  "pdfGeneration": "enabled"
}
```
