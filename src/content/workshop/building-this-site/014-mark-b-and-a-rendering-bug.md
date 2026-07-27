---
title: "Mark B, for real — and a rendering bug hiding in plain sight"
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [brand, design-system, favicon, bugfix]
---

## What's on the bench

Mark B — the "knolled bench" mark for Knolling — now that both blockers from entry 012 are gone: it's approved, and the Buttondown account exists (`buttondown.com/knolling`).

## The decision

Shipped Mark B (`public/brand/mark-knolling.svg`), its wordmark lockup (`wordmark-knolling.svg`), and two rasters for the actual account: a square social avatar and a header graphic. Also: found and fixed a real rendering bug in the favicon assets shipped back in entry 012 — `favicon.ico` and `apple-touch-icon.png` were both off-center.

## How I took it apart

Mark B itself was mechanical — the spec in docs/05 already had the exact SVG, I just needed to verify it read clearly at the sizes it'll actually appear (social avatar, email header), which it did even smaller than required.

The bug was the real story. Building the social avatar meant adding margin around Mark B that the bare favicon never needed — and the moment I measured the result instead of just eyeballing it, the numbers didn't add up: a mark I'd centered with symmetric math came out with 40px of margin on two sides and 25px on the other two. Not a rounding error, a real asymmetry, and it didn't come from my math — I traced it to `rsvg-convert`, which is what `magick` delegates SVG rendering to on this machine. It rendered an off-center result from a correctly-centered source, silently, no warning, no error.

That was worth checking against the assets already live from entry 012. Same bug, both files: `apple-touch-icon.png`'s margins were 9px/9px/4px/4px instead of the ~17px-on-every-side the spec called for, and `favicon.ico` had a 1px margin on two sides and 0px on the other two — the mark was touching the edge of the canvas on part of its border. Small enough that nobody would have noticed by looking, which is exactly the kind of bug that matters, since "looks fine at a glance" is the whole failure mode here. Rebuilt all three (`favicon.ico`, `apple-touch-icon.png`, and the new Knolling avatar) using Chrome headless via Puppeteer instead of the ImageMagick/`rsvg-convert` path, and verified every one against a pixel-measured bounding box this time, not a preview.

## What I got wrong (or don't know yet)

I shipped entry 012's assets on the strength of a visual preview, and the preview looked right — that's the uncomfortable part. The lesson isn't "check your work," it's "checking your work by looking at it isn't the same as checking it." I don't know whether `rsvg-convert`'s bug has a specific known cause (padding/margin handling inside nested transforms, maybe) or something else; I didn't dig further once the workaround held up under measurement.

## Next up

Wiring Knolling into the site for real — the subscribe forms across the site are still non-functional placeholders now that there's an actual account behind them.

**Costs so far:** $12/yr + Buttondown (free tier at this list size) / __ hours
