---
title: "Shipping the favicon"
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [brand, design-system, favicon]
---

## What's on the bench

Turning Mark A from `docs/05-favicon-marks.md`'s proposal into the actual favicon — the site's been wearing Astro's default logo since the day `npm create astro` ran.

## The decision

Shipped Mark A only: the four-square "knolling grid" mark, ink squares plus one workshop-gold accent, as `favicon.svg` (light/dark aware), `favicon.ico`, and `apple-touch-icon.png`. Mark B, the wordmark lockups, and the rest of the brand pass stay in the proposal doc, untouched.

## How I took it apart

The spec's deliverables checklist (docs/05 §5) had five items; I did three. Mark B is explicitly "deferred until the [Buttondown] account exists" in the doc itself — nothing to attach it to yet, so building it now would be art with no home. The wordmark lockups are explicitly brand-pass work, still ahead — doing them before the color/type decisions that pass covers would mean redoing them once those land.

The one real technical snag: `favicon.ico` and `apple-touch-icon.png` are static raster formats — they can't carry the `prefers-color-scheme` media query the SVG favicon uses. Only the SVG favicon gets the light/dark swap; the `.ico` fallback and the Apple touch icon are locked to light-mode colors permanently. That's an accepted asymmetry, not an oversight — most browsers that matter use the SVG path, and iOS home-screen icons don't really "do" dark mode the way a webpage does anyway.

Rasterizing needed a tool this machine didn't have: ImageMagick delegates SVG rendering to `rsvg-convert`, which wasn't installed. `brew install librsvg` fixed it — small, standard, easily reversible. The Apple touch icon needed its own SVG variant, not just a resize of the favicon — the spec calls for wider margins (3/32 instead of 1/32) since iOS's corner-rounding mask crops tighter than a browser tab does, so the four cells shrink slightly (11×11 instead of 13×13) to make room without touching the gutter, which the spec calls "sacred."

## What I got wrong (or don't know yet)

Checked the doc's own open question about Mark A reading clearly at 16px — it does; the gutter cross survives even at true favicon-tab size, so the "asymmetric gold part" answer holds up in practice, not just in the SVG. Everything else in the spec's open-questions list — Mark B's circle, the accent-placement reading-order theory, the hover-drift motion idea — is still genuinely open. Didn't resolve any of it; didn't need to for a static favicon.

## Next up

Whatever gets tackled first from what's left of the brand pass: color palette, type pairing, wordmark lockups, and the section-naming gut-check.

**Costs so far:** $12/yr / __ hours
