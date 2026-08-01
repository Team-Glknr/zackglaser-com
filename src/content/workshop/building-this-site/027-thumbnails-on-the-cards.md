---
title: "Thumbnails on the cards, not just the meta tags"
date: 2026-08-01
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, og-image]
---

## What's on the bench

Every project, chapter, and post now has a real OG image, but nothing on the site itself actually showed one — they only existed inside `<meta property="og:image">`, invisible unless a link got shared.

## The decision

Add the thumbnail to every boxed/grid card — the Hub's latest grid, the `/workshop` project list, and both prev/next nav card pairs — at the image's real 1200:630 aspect ratio, uncropped. Leave the compact list-row components (a project's chapter list, a chapter's entry list, a pillar's post list) text-only for now.

## How I took it apart

The site turned out to have exactly two card idioms already, and only one of them had room for an image without a real redesign. Boxed cards — individually bordered, radiused, padded — could take a thumbnail cleanly: move the existing padding into a body wrapper, drop an `<img>` in above it, set `overflow: hidden` on the card so its own border-radius clips the image's square corners for free. No negative-margin bleed trick needed. The other idiom — several rows sharing one bordered container, divided by `border-bottom` — is the shape of the chapter list, entry list, and pillar post feed, and fitting a landscape thumbnail into a single compact row would have meant redesigning three components, not adding an `<img>` tag. Scoped it out rather than let one request become a full card-system rewrite.

`/workshop`'s project row was its own small case: a full-width row, not a grid tile, so a full-bleed top image would have been enormous. It got a fixed 240×126 thumbnail beside the text instead, stacking to full-width only at the mobile breakpoint.

## What I got wrong (or don't know yet)

Verifying this took longer than building it, and not for a good reason. The browser-automation tool used to check the result had a flaky scroll/screenshot pipeline this session, and every image below the fold also had `loading="lazy"` on it — so the harness's own checks kept reporting `naturalWidth: 0` and an empty `src`, which read exactly like a broken image. It wasn't: the network tab showed clean 200s the whole time, and loading the same URL through a fresh, non-lazy `Image()` object and sampling its actual pixel data proved the thumbnails were rendering correctly. "The tool shows nothing" turned out to mean "the tool hasn't asked yet," not "there's nothing there" — worth remembering before trusting a red X from any automated check without reading what it actually tested.

Also unresolved: neither `/workshop` nor a project page shows any "last updated" signal, so a thumbnail makes a card look more finished without making it any more obvious *when* that project last moved. Noted, not fixed here.

## Next up

Nothing queued as its own entry yet.

**Costs so far:** $12/yr + Buttondown (free tier) / ~5 min
