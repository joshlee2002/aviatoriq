/**
 * Startup Environment Validation
 *
 * Checks that all required environment variables are present and valid
 * before the server starts accepting requests. Logs warnings for optional
 * but recommended variables. Throws on critical missing config.
 */

interface EnvCheck {
  key: string;
  required: boolean;
  description: string;
  validate?: (val: string) => boolean;
  hint?: string;
}

const checks: EnvCheck[] = [
  // ─── Critical ───────────────────────────────────────────────────────────────
  {
    key: "DATABASE_URL",
    required: true,
    description: "MySQL database connection string",
    validate: v => v.startsWith("mysql://") || v.startsWith("mysql2://"),
    hint: "Must start with mysql:// e.g. mysql://user:pass@localhost:3306/dbname",
  },
  {
    key: "OPENAI_API_KEY",
    required: false, // Optional: AI roadmap and PDF prose will be degraded if missing
    description: "OpenAI API key for AI roadmap generation and lead scoring",
    validate: v => v.length > 10,
    hint: "Set OPENAI_API_KEY or BUILT_IN_FORGE_API_KEY. Without this, AI roadmap generation will be disabled and PDF blueprints will use structured data only.",
  },

  // ─── Important ──────────────────────────────────────────────────────────────
  {
    key: "JWT_SECRET",
    required: false,
    description: "JWT / session cookie signing secret",
    validate: v => v.length >= 16 && v !== "change-me-in-production",
    hint: "Should be a random string of at least 32 characters. Current value is the insecure default.",
  },
  {
    key: "ADMIN_PASSWORD",
    required: false,
    description: "Admin dashboard password",
    validate: v => v.length >= 8,
    hint: "Should be at least 8 characters",
  },

  // ─── Optional ───────────────────────────────────────────────────────────────
  {
    key: "LOCAL_STORAGE_PATH",
    required: false,
    description: "Path for local file storage (PDFs, uploads)",
  },
  {
    key: "PEXELS_API_KEY",
    required: false,
    description: "Pexels API key for stock photos (optional feature)",
  },
  {
    key: "STORAGE_BUCKET_URL",
    required: false,
    description:
      "R2/S3 bucket endpoint URL for persistent file storage across deploys",
    hint: "Without this, uploaded files will not persist across Railway deploys. See DEPLOYMENT.md.",
  },
];

export function validateEnv(): void {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Support both OPENAI_API_KEY and BUILT_IN_FORGE_API_KEY
  const hasLLMKey =
    process.env.OPENAI_API_KEY || process.env.BUILT_IN_FORGE_API_KEY;

  for (const check of checks) {
    // Special case: LLM key can come from either env var
    if (check.key === "OPENAI_API_KEY") {
      if (!hasLLMKey) {
        warnings.push(
          `[ENV] MISSING (optional): OPENAI_API_KEY (or BUILT_IN_FORGE_API_KEY) — ${check.description}`
        );
        warnings.push(`       Hint: ${check.hint}`);
      }
      continue;
    }

    const value = process.env[check.key];

    if (!value) {
      if (check.required) {
        errors.push(
          `[ENV] MISSING (required): ${check.key} — ${check.description}`
        );
        if (check.hint) errors.push(`       Hint: ${check.hint}`);
      } else {
        warnings.push(
          `[ENV] MISSING (optional): ${check.key} — ${check.description}`
        );
      }
      continue;
    }

    if (check.validate && !check.validate(value)) {
      const msg = `[ENV] INVALID: ${check.key} — ${check.description}`;
      if (check.required) {
        errors.push(msg);
        if (check.hint) errors.push(`       Hint: ${check.hint}`);
      } else {
        warnings.push(msg);
        if (check.hint) warnings.push(`       Hint: ${check.hint}`);
      }
    }
  }

  // Print warnings
  if (warnings.length > 0) {
    console.warn("\n⚠️  AviatorIQ ENV Warnings:");
    warnings.forEach(w => console.warn(w));
    console.warn("");
  }

  // Throw on errors
  if (errors.length > 0) {
    console.error("\n❌ AviatorIQ ENV Errors — server cannot start:");
    errors.forEach(e => console.error(e));
    console.error(
      "\nFix the above environment variables in your .env file and restart.\n"
    );
    process.exit(1);
  }

  console.log("✅ Environment validation passed.");
}
