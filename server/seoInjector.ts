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

const SITE_NAME = "AviatorIQ";
const DEFAULT_OG_IMAGE = "https://aviatoriq.com/og-default.jpg";

/** Global Organization + WebSite schema injected on every page */
const globalSchema = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AviatorIQ",
    url: "https://aviatoriq.com",
    logo: "https://aviatoriq.com/favicon.svg",
    sameAs: [
      "https://twitter.com/aviatoriq",
      "https://www.linkedin.com/company/aviatoriq",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@aviatoriq.co.uk",
      contactType: "customer support",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AviatorIQ",
    url: "https://aviatoriq.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aviatoriq.com/schools?q={search_term_string}",
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
 * Express middleware that intercepts HTML responses and injects SEO tags.
 * Must be applied AFTER Vite middleware so it can intercept the rendered HTML.
 */
export function seoInjectorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Only process HTML responses for non-API, non-asset routes
  const path = req.path;
  if (
    path.startsWith("/api/") ||
    path.startsWith("/uploads/") ||
    path.startsWith("/assets/") ||
    path.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|map)$/)
  ) {
    return next();
  }

  const meta = getMetaForPath(path);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical);
  const ogImage = escapeHtml(meta.ogImage || DEFAULT_OG_IMAGE);
  const robotsContent = meta.noindex ? "noindex, nofollow" : "index, follow";

  const seoTags = `
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
    <meta name="twitter:site" content="@aviatoriq" />
    <!-- Global Schema -->
    <script type="application/ld+json">${globalSchema}</script>`;

  // Intercept the response write to inject tags into <head>
  const originalSend = res.send.bind(res);
  res.send = function (body: any) {
    if (
      typeof body === "string" &&
      body.includes("</head>") &&
      res.getHeader("content-type")?.toString().includes("text/html")
    ) {
      body = body.replace("</head>", `${seoTags}\n  </head>`);
    }
    return originalSend(body);
  };

  next();
}
