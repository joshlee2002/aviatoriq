/**
 * GuideScopeBanner
 * Shown at the top of guides to inform readers of the content scope
 * (country/regulator) and link them to relevant alternatives.
 *
 * Usage — explicit scope string:
 *   <GuideScopeBanner scope="This guide covers UK CAA regulations." />
 *
 * Usage — shorthand country/regulator (auto-generates scope text):
 *   <GuideScopeBanner country="Australia" regulator="CASA" />
 *   → "This guide covers aviation regulations and training in Australia (CASA)."
 */
import { Globe } from "lucide-react";
import { Link } from "wouter";

interface GuideScopeBannerProps {
  /** Explicit scope description. If omitted, generated from country + regulator. */
  scope?: string;
  /** Country name — used to auto-generate scope text when scope is not provided */
  country?: string;
  /** Regulator acronym (e.g. "CASA", "Transport Canada") — used alongside country */
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
  // Derive scope text: explicit prop takes priority, then auto-generate from country/regulator
  const resolvedScope =
    scope ??
    (country && regulator
      ? `This guide covers aviation regulations and training in ${country} (${regulator}).`
      : country
      ? `This guide covers aviation regulations and training in ${country}.`
      : regulator
      ? `This guide covers ${regulator} regulations.`
      : "");

  if (!resolvedScope && !usHref && !globalHref) return null;

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
        {resolvedScope && (
          <span style={{ color: "oklch(0.85 0.06 240)", fontWeight: 600 }}>
            {resolvedScope}
          </span>
        )}
        {(usHref || globalHref) && (
          <span>
            {resolvedScope ? " — " : ""}
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
