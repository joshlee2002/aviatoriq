/**
 * Storage helpers — supports both local filesystem and S3-compatible object storage
 * (Cloudflare R2, AWS S3, or any S3-compatible provider).
 *
 * When STORAGE_BUCKET_URL, STORAGE_ACCESS_KEY_ID, and STORAGE_SECRET_ACCESS_KEY
 * are set, all writes go to the remote bucket and return a public CDN URL.
 * Reads fall back to local filesystem so the 109 Git-committed seed images
 * continue to work without migration.
 *
 * When storage credentials are absent, behaviour is identical to the original
 * local-only implementation.
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const STORAGE_PATH =
  process.env.LOCAL_STORAGE_PATH ?? path.join(process.cwd(), "uploads");

// ─── R2/S3 configuration ──────────────────────────────────────────────────────
const BUCKET_URL = process.env.STORAGE_BUCKET_URL; // e.g. https://<account>.r2.cloudflarestorage.com
const BUCKET_NAME = process.env.STORAGE_BUCKET_NAME ?? "aviatoriq";
const ACCESS_KEY = process.env.STORAGE_ACCESS_KEY_ID;
const SECRET_KEY = process.env.STORAGE_SECRET_ACCESS_KEY;
const PUBLIC_CDN = process.env.STORAGE_PUBLIC_CDN_URL; // optional: public bucket URL for direct reads

const isRemoteConfigured = !!(BUCKET_URL && ACCESS_KEY && SECRET_KEY);

let s3Client: S3Client | null = null;
if (isRemoteConfigured) {
  s3Client = new S3Client({
    region: process.env.STORAGE_REGION ?? "auto",
    endpoint: BUCKET_URL,
    credentials: {
      accessKeyId: ACCESS_KEY!,
      secretAccessKey: SECRET_KEY!,
    },
    // Required for Cloudflare R2 path-style access
    forcePathStyle: true,
  });
}

// ─── Startup warning ──────────────────────────────────────────────────────────
if (!isRemoteConfigured) {
  console.warn(
    "[storage] STORAGE_BUCKET_URL not set — uploaded files will not persist across deploys. " +
      "Set STORAGE_BUCKET_URL, STORAGE_ACCESS_KEY_ID, and STORAGE_SECRET_ACCESS_KEY to enable R2/S3 persistence."
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function appendHashSuffix(relKey: string): string {
  const hash = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  const lastDot = relKey.lastIndexOf(".");
  if (lastDot === -1) return `${relKey}_${hash}`;
  return `${relKey.slice(0, lastDot)}_${hash}${relKey.slice(lastDot)}`;
}

function normalizeKey(relKey: string): string {
  return relKey.replace(/^\/+/, "");
}

function buildPublicUrl(key: string): string {
  if (PUBLIC_CDN) {
    return `${PUBLIC_CDN.replace(/\/$/, "")}/${key}`;
  }
  // Fallback: construct URL from bucket endpoint + bucket name
  if (BUCKET_URL) {
    return `${BUCKET_URL.replace(/\/$/, "")}/${BUCKET_NAME}/${key}`;
  }
  return `/uploads/${key}`;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Write a file to storage.
 * - If R2/S3 is configured: writes to remote bucket AND local filesystem (for redundancy).
 * - If not configured: writes to local filesystem only.
 * Returns the key and a public URL.
 */
export async function storagePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream"
): Promise<{ key: string; url: string }> {
  const key = appendHashSuffix(normalizeKey(relKey));
  const buffer =
    typeof data === "string" ? Buffer.from(data) : Buffer.from(data);

  // Always write locally (serves as a local cache and fallback)
  const fullPath = path.join(STORAGE_PATH, key);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, buffer);

  if (isRemoteConfigured && s3Client) {
    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
          Body: buffer,
          ContentType: contentType,
          // Make object publicly readable (for Cloudflare R2 public buckets)
          // Remove this line if using private buckets with signed URLs
          ACL: "public-read",
        })
      );
      const url = buildPublicUrl(key);
      return { key, url };
    } catch (err) {
      console.error(
        "[storage] R2/S3 upload failed, falling back to local URL:",
        (err as Error).message
      );
      // Fall through to local URL
    }
  }

  return { key, url: `/uploads/${key}` };
}

/**
 * Get the URL for a stored file.
 * - If the file exists locally: returns local URL.
 * - If R2/S3 is configured and file is not local: returns remote URL.
 */
export async function storageGet(
  relKey: string
): Promise<{ key: string; url: string }> {
  const key = normalizeKey(relKey);
  const localPath = path.join(STORAGE_PATH, key);

  // Local file takes priority (covers all 109 Git-committed seed images)
  if (fs.existsSync(localPath)) {
    return { key, url: `/uploads/${key}` };
  }

  // Fall back to remote URL if configured
  if (isRemoteConfigured) {
    return { key, url: buildPublicUrl(key) };
  }

  return { key, url: `/uploads/${key}` };
}

/**
 * Get a (possibly signed) URL for a stored file.
 * - If R2/S3 is configured and file is not local: returns a 1-hour signed URL.
 * - Otherwise: returns the local /uploads/ path.
 */
export async function storageGetSignedUrl(relKey: string): Promise<string> {
  const key = normalizeKey(relKey);
  const localPath = path.join(STORAGE_PATH, key);

  // Local file takes priority
  if (fs.existsSync(localPath)) {
    return `/uploads/${key}`;
  }

  if (isRemoteConfigured && s3Client) {
    try {
      const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: key });
      return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    } catch (err) {
      console.error(
        "[storage] Failed to generate signed URL:",
        (err as Error).message
      );
    }
  }

  return `/uploads/${key}`;
}
