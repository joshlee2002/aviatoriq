/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml from the routeMetaMap, excluding noindex pages.
 * Also includes dynamic school pages if the DB is available.
 */

import type { Express } from "express";
import { routeMetaMap } from "./seoMeta";

const BASE_URL = "https://aviatorpath.com";
const TODAY = new Date().toISOString().split("T")[0];

// Priority map by route type
function getPriority(path: string): string {
  if (path === "/") return "1.0";
  if (["/quiz", "/roadmap", "/guides"].includes(path)) return "0.9";
  // Regional hub pages
  if (
    [
      "/us",
      "/australia",
      "/canada",
      "/europe",
      "/uae",
      "/south-africa",
      "/new-zealand",
    ].includes(path)
  )
    return "0.9";
  // All regional guide paths (UK, US, AU, CA, EU, UAE, SA, NZ)
  if (path.includes("/guides/")) return "0.8";
  if (
    ["/schools", "/calculator", "/us/schools", "/us/calculator"].includes(path)
  )
    return "0.8";
  if (["/partner", "/for-schools"].includes(path)) return "0.7";
  if (path.startsWith("/tools/")) return "0.7";
  if (["/about", "/contact"].includes(path)) return "0.5";
  return "0.6";
}

function getChangeFreq(path: string): string {
  if (path === "/") return "weekly";
  // All guide paths across all regions
  if (path.includes("/guides/")) return "monthly";
  if (["/schools", "/us/schools"].includes(path)) return "weekly";
  if (["/jobs", "/stories"].includes(path)) return "weekly";
  return "monthly";
}

export function registerSitemapRoute(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    const indexableRoutes = Object.entries(routeMetaMap)
      .filter(([, meta]) => !meta.noindex)
      .map(([path]) => path);

    const urlEntries = indexableRoutes
      .map(path => {
        const loc = `${BASE_URL}${path}`;
        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangeFreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`;
      })
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  // Also serve robots.txt dynamically (overrides static file if present)
  app.get("/robots.txt", (_req, res) => {
    const robots = `# AviatorPath robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /uploads/

# Noindex pages (also set via meta robots tag)
Disallow: /stories
Disallow: /jobs

# AI crawlers — allow for LLM training and AI-powered search
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(robots);
  });
}
