/**
 * Storage proxy — serves files from local filesystem with R2/S3 fallback.
 * When a file is not found locally and remote storage is configured,
 * redirects to the remote CDN URL instead of returning 404.
 */
import type { Express } from "express";
import path from "path";
import fs from "fs";

const STORAGE_PATH =
  process.env.LOCAL_STORAGE_PATH ?? path.join(process.cwd(), "uploads");

const BUCKET_URL = process.env.STORAGE_BUCKET_URL;
const BUCKET_NAME = process.env.STORAGE_BUCKET_NAME ?? "aviatoriq";
const PUBLIC_CDN = process.env.STORAGE_PUBLIC_CDN_URL;

function buildRemoteUrl(key: string): string | null {
  if (!BUCKET_URL) return null;
  if (PUBLIC_CDN) return `${PUBLIC_CDN.replace(/\/$/, "")}/${key}`;
  return `${BUCKET_URL.replace(/\/$/, "")}/${BUCKET_NAME}/${key}`;
}

export function registerStorageProxy(app: Express) {
  // Serve /uploads/* — local first, then remote redirect
  app.get("/uploads/*", (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }
    const filePath = path.join(STORAGE_PATH, key);
    if (fs.existsSync(filePath)) {
      res.set("Cache-Control", "public, max-age=31536000, immutable");
      res.sendFile(filePath);
      return;
    }
    // File not found locally — try remote
    const remoteUrl = buildRemoteUrl(key);
    if (remoteUrl) {
      res.redirect(302, remoteUrl);
      return;
    }
    res.status(404).send("File not found");
  });

  // Legacy /manus-storage/* route — redirect to /uploads/*
  app.get("/manus-storage/*", (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }
    res.redirect(307, `/uploads/${key}`);
  });
}
