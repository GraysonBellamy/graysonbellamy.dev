# graysonbellamy.dev

Personal homepage — a landing page linking out to my projects and their docs
sites. Built with [Astro](https://astro.build) and hosted on Cloudflare Pages.

## Editing content

Everything on the page is data-driven — you should rarely need to touch markup:

- **Projects grid** → [`src/data/projects.ts`](src/data/projects.ts).
  Add/edit/reorder entries; `category` controls the section, `categoryOrder`
  controls section order.
- **Hero text and links** → [`src/data/profile.ts`](src/data/profile.ts).
  Uncomment link entries (CV, blog, email, Scholar, ORCID) as you add them.
- **Styling / theme tokens** → [`src/styles/global.css`](src/styles/global.css).

## Local development

Requires **Node ≥ 22.12** (Astro 7's minimum; pinned in
[`.node-version`](.node-version)).

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run check      # typecheck (.astro + .ts)
npm run preview    # serve the built ./dist locally
```

## Deploying (Cloudflare Pages — native Git integration)

This site deploys via Cloudflare Pages' Git integration (no GitHub Actions /
wrangler needed):

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**,
   select the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: picked up from [`.node-version`](.node-version) (Astro 7
     needs ≥ 22.12 — if the build fails on an old Node, set the
     `NODE_VERSION` environment variable in the Pages project instead).
4. After the first deploy, add the custom domains under the Pages project's
   **Custom domains** tab: `graysonbellamy.dev` and `www.graysonbellamy.dev`.
   (DNS is already on Cloudflare, so the apex works via CNAME flattening — no
   registrar changes.) To avoid serving duplicate content on both hosts,
   add a Cloudflare **Redirect Rule** sending `www.graysonbellamy.dev/*` →
   `https://graysonbellamy.dev/$1` (301).

## Analytics

Cloudflare Web Analytics is stubbed in
[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) — add the site in
the Cloudflare dashboard, paste the beacon token, and uncomment the block.
