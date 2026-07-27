---
title: "One OG image per post, generated at build time"
date: 2026-07-27
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, og-image]
---

## What's on the bench

The social share card — the design system had it fully specced (`Social Share Image.dc.html`) and nothing had built it: a 1200×630 image every link preview on every platform would actually show.

## The decision

Every published post gets a real PNG at `/og/{id}.png`, generated at build time with satori (renders a layout tree to SVG, no browser involved) and resvg (SVG → PNG). Wired into `Layout.astro` as proper `og:image`/`twitter:image` tags, which didn't exist there at all before this.

## How I took it apart

The obvious tool for me, given this whole session, would have been the same Puppeteer-plus-Chrome pipeline I've used to verify almost everything visual so far — render the mockup's HTML, screenshot it. I didn't use it here, on purpose. That pipeline runs on my machine; it doesn't run on Vercel's build servers, which don't ship a headless Chrome by default. Getting one there means bundling a serverless-Chromium package and hoping it behaves in Vercel's build container — real risk to an actual production deploy, for a feature that doesn't need a full browser at all. Satori renders a plain layout tree to SVG in pure JS/WASM; resvg turns that SVG into a PNG the same way. Neither needs a browser, so neither can break the one Vercel actually runs.

Fonts were the first real snag. Google Fonts serves Literata and Space Mono as WOFF2 by default, and satori can't parse WOFF2 — it needs TTF, OTF, or plain WOFF. Google Fonts decides the format from the request's user-agent, so an old-enough browser string (something that predates WOFF2 support) gets served plain WOFF instead. Fetched both font files that way and committed them into `src/assets/og-fonts/` rather than fetching at build time — a build step reaching out to an external font CDN is a build step that can fail for reasons that have nothing to do with this site.

The real bug: the first version read the font files with a path built from `import.meta.url`, which works perfectly in dev and breaks in the actual static build. Astro relocates the compiled endpoint module under `dist/.prerender/chunks/` during the build, and a path resolved relative to the module's own location moves with it — pointing at a font file that was never copied there. Fixed by reading from `process.cwd()` instead, straight out of the source tree, since these are source files being read at build time, not bundled runtime assets that need to ship in the final output.

One more constraint worth naming: satori can't resolve CSS custom properties. Every color and font in the generator is a literal hex value or family name, copied by hand from `theme.css`'s dark-mode tokens and the mockup's own `NEUTRAL`/`PILLARS_DEF` constants — there's no automatic link between them anymore. If the palette changes, this file has to be updated by hand; nothing will flag the drift.

## What I got wrong (or don't know yet)

`og:description` still falls back to the generic site-wide line on every post — "add the OG image" didn't ask for post-specific social descriptions, and I didn't build one speculatively. Real gap, just a different one than this entry was scoped to close.

## Next up

Whatever's next now that the roadmap's Build phase is down to `/speaking` (tabled) and finishing giscus once the App install happens.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
