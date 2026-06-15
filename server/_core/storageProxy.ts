/**
 * Self-hosted storage proxy — serves files from local filesystem.
 * Replaces the Manus Forge/S3 proxy with a simple static file server.
 */
import type { Express } from "express";
import path from "path";
import fs from "fs";

const STORAGE_PATH = process.env.LOCAL_STORAGE_PATH ?? path.join(process.cwd(), "uploads");

export function registerStorageProxy(app: Express) {
  // Serve /uploads/* from local filesystem
  app.get("/uploads/*", (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }
    const filePath = path.join(STORAGE_PATH, key);
    if (!fs.existsSync(filePath)) {
      res.status(404).send("File not found");
      return;
    }
    res.set("Cache-Control", "no-store");
    res.sendFile(filePath);
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
