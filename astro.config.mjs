// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://graysonbellamy.dev",
  integrations: [sitemap()],
  // Static output (default). Cloudflare Pages serves the ./dist directory.
  build: {
    // Emit /page/index.html so clean URLs work on Cloudflare Pages.
    format: "directory",
    // Single-page site: always inline the (small) stylesheet rather than
    // paying an extra render-blocking request once it crosses the 4 kB
    // auto-inline threshold.
    inlineStylesheets: "always",
  },
});
