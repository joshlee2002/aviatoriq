/**
 * GuideScopeBanner
 * Shown at the top of UK/EASA-written guides to inform non-UK readers
 * of the content scope and link them to relevant alternatives.
 */
import { Globe } from "lucide-react";
import { Link } from "wouter";

interface GuideScopeBannerProps {
  /** Short description of what country/authority this guide covers */
  scope?: string;
  /** Country name — used to auto-build scope when scope is not provided */
  country?: string;
  /** Regulator name — used to auto-build scope when scope is not provided */
  regulator?: string;
  /** Optional link to a US-equivalent guide */
  usHref?: string;
  /** Optional label for the US link */
  usLabel?: string;
  /** Optional link to a generic/global alternative */
  globalHref?: string;
  /** Optional label for the global link */
  globalLabel?: string;
}

export default function GuideScopeBanner({
  scope,
  country,
  regulator,
  usHref,
  usLabel,
  globalHref,
  globalLabel,
}: GuideScopeBannerProps) {
  // Build scope from country/regulator if scope is not explicitly provided
  const resolvedScope =
    scope ??
    (country && regulator
      ? `This guide covers ${country} pilot training under ${regulator} regulations.`
      : country
        ? `This guide covers ${country} pilot training.`
        : "This guide covers pilot training in a specific region.");
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl mb-6 text-sm"
      style={{
        background: "oklch(0.45 0.18 240 / 0.08)",
        border: "1px solid oklch(0.45 0.18 240 / 0.22)",
      }}
    >
      <Globe
        className="w-4 h-4 flex-shrink-0 mt-0.5"
        style={{ color: "oklch(0.72 0.14 240)" }}
      />
      <div style={{ color: "oklch(0.68 0.04 240)" }}>
        <span style={{ color: "oklch(0.85 0.06 240)", fontWeight: 600 }}>
          {resolvedScope}
        </span>
        {(usHref || globalHref) && (
          <span>
            {" "}
            —{" "}
            {usHref && (
              <Link
                href={usHref}
                className="no-underline hover:underline"
                style={{ color: "oklch(0.72 0.18 65)" }}
              >
                {usLabel ?? "View US version →"}
              </Link>
            )}
            {usHref && globalHref && <span> · </span>}
            {globalHref && (
              <Link
                href={globalHref}
                className="no-underline hover:underline"
                style={{ color: "oklch(0.72 0.18 65)" }}
              >
                {globalLabel ?? "Global school directory →"}
              </Link>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
