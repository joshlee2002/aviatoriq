import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { buildSeoTags } from "../seoInjector";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      let page = await vite.transformIndexHtml(url, template);

      // ── Server-side SEO injection ──────────────────────────────────────────
      // Inject <title>, <meta>, <canonical>, OG, Twitter Card, and JSON-LD
      // schema into the HTML shell here, after Vite has processed it but before
      // it is sent to the client. This is the correct interception point because
      // Vite uses res.end() not res.send(), so middleware-level res.send overrides
      // would not fire.
      // Use the pathname portion of originalUrl (strip query string)
      const urlPathname = url.split("?")[0].split("#")[0] || "/";
      const seoTags = buildSeoTags(urlPathname);
      if (seoTags) {
        // Replace the generic fallback <title> with the route-specific one so
        // there is only ever a single <title> tag in the document.
        page = page.replace(/<title>[^<]*<\/title>/, "");
        page = page.replace("</head>", `${seoTags}\n  </head>`);
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  // Inject server-side SEO tags before sending the static shell
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    fs.readFile(indexPath, "utf-8", (err, html) => {
      if (err) {
        res.status(500).send("Internal server error");
        return;
      }
      const urlPathname = req.originalUrl.split("?")[0].split("#")[0] || "/";
      const seoTags = buildSeoTags(urlPathname);
      if (seoTags) {
        // Remove the generic fallback <title> so only the injected one remains.
        html = html.replace(/<title>[^<]*<\/title>/, "");
        html = html.replace("</head>", `${seoTags}\n  </head>`);
      }
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    });
  });
}
