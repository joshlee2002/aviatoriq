/**
 * Server-Side SEO Injector
 *
 * Injects <title>, <meta name="description">, <link rel="canonical">,
 * Open Graph, Twitter Card, robots noindex, and global JSON-LD schema
 * into the HTML shell before it is sent to the client.
 *
 * This ensures search engine crawlers and social media scrapers receive
 * full metadata without needing to execute JavaScript.
 */

import type { Request, Response, NextFunction } from "express";
import { getMetaForPath } from "./seoMeta";

const SITE_NAME = "AviatorPath";
const DEFAULT_OG_IMAGE = "https://aviatorpath.com/og-default.jpg";

/** Global Organization + WebSite schema injected on every page */
const globalSchema = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AviatorPath",
    url: "https://aviatorpath.com",
    logo: "https://aviatorpath.com/favicon.svg",
    sameAs: [
      "https://twitter.com/aviatorpath",
      "https://www.linkedin.com/company/aviatorpath",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@aviatorpath.co.uk",
      contactType: "customer support",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AviatorPath",
    url: "https://aviatorpath.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aviatorpath.com/schools?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
]);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Build the SEO HTML tag block for a given URL path.
 * Called directly inside the Vite HTML catch-all after transformIndexHtml,
 * which is the correct interception point (Vite uses res.end, not res.send).
 *
 * Returns null for API/asset paths that should not be processed.
 */
export function buildSeoTags(urlPath: string): string | null {
  if (
    urlPath.startsWith("/api/") ||
    urlPath.startsWith("/uploads/") ||
    urlPath.startsWith("/assets/") ||
    /\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|map)$/.test(urlPath)
  ) {
    return null;
  }

  const meta = getMetaForPath(urlPath);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical);
  const ogImage = escapeHtml(meta.ogImage || DEFAULT_OG_IMAGE);
  const robotsContent = meta.noindex ? "noindex, nofollow" : "index, follow";

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="${robotsContent}" />
    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:site" content="@aviatorpath" />
    <!-- Global Schema -->
    <script type="application/ld+json">${globalSchema}</script>`;
}

/**
 * Legacy no-op middleware kept for import compatibility.
 * SEO injection now happens inside setupVite / serveStatic directly.
 */
export function seoInjectorMiddleware(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  next();
}
