---
title: "One mark, not two — Mark B retires"
date: 2026-08-02
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [brand, design-system, favicon]
---

## What's on the bench

The favicon system — again. Zack came back with a new mark: four circles, each punched with a different icon (plus, minus, star, square), like a socket set laid out on a bench. It replaces the "four rooms" square-grid mark from entries 012–014.

## The decision

The new mark is now the *only* mark. It's `favicon.svg`/`favicon.ico`, `apple-touch-icon.png`, and the animated logo in `Nav.astro` — same SVG, same four shapes, everywhere. Mark B, the Knolling-only "knolled bench" mark from entry 014, is retired: `public/brand/mark-knolling.svg`, `wordmark-knolling.svg`, `knolling-avatar.png`, and `knolling-header.png` are deleted from the repo. There's no longer a site mark and a separate newsletter mark — just one, same as the accent color, which moves from workshop-gold to the running pillar's red-orange, because that's what's baked into the new design.

## How I took it apart

Zack supplied a finished SVG plus an already-rasterized `favicon.ico`. Given entry 014's rsvg-convert bug — a mark that measures centered in source can render off-center — the ico got extracted frame-by-frame and checked at 8x before trusting it; it was clean. `apple-touch-icon.png` needed rebuilding from scratch (nothing sized for that slot was supplied), so it went through headless Chrome again rather than ImageMagick, same lesson as last time.

`favicon.svg` reused the token-swap pattern already in place for dark mode — `.ink`/`.paper`/`.accent` classes flipped by a `prefers-color-scheme` media query — just with new shapes and `--pillar-running` standing in for `--pillar-workshop`.

The one open design question was the animated nav logo, which wasn't part of the original ask — it's a separate component (`Nav.astro`) with its own scatter-to-knolled load animation, not something "fix the favicon" obviously includes. Checked rather than assumed, and the answer was to update it too, so the header and the browser tab agree. The four `<g class="mark-part pN">` wrappers and their keyframes didn't need to change — each group's `transform-box: fill-box` centers on the union bounding box of its contents, and since every cutout shape sits fully inside its own circle, swapping rect-with-no-cutout for circle-plus-cutout didn't move any group's center. Only the shapes inside each group changed.

## What I got wrong (or don't know yet)

Entries 012–014 built out a whole spec (`docs/05-favicon-marks.md`) around a two-mark system — Mark A for the site, Mark B for Knolling, "same grid, fills only" as the extensible rule. It read as a real system at the time. It lasted about a week before getting replaced wholesale, and the thing that replaced it doesn't distinguish site from newsletter at all. Worth remembering next time a spec doc feels like it's locking in a permanent decision — this one wasn't.

Also unresolved: Mark B is still live outside the repo. Knolling's Buttondown account has Mark B's avatar and header image uploaded from entry 014, and those don't update themselves — until someone re-uploads new rasters there, the newsletter and the site will visibly disagree.

## Next up

Re-upload new-mark rasters to Buttondown (avatar + header) so Knolling matches the site. Not done here — Buttondown assets live outside this repo and outside this session.

**Costs so far:** $0 additional / __ hours
