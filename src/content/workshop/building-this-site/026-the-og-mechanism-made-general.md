---
title: "The OG mechanism, made general"
date: 2026-08-01
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, og-image, workshop-projects]
---

## What's on the bench

Social share images — but this time for project and chapter pages, not posts.

## The decision

Extend the existing per-post OG renderer to cover project rollups and chapters too, as two new endpoints, rather than hand-building one image for whatever page happened to need it.

## How I took it apart

This came up sideways, not from a plan: looking at Morning Report's own project page, the question was "are we not creating an OG for the project itself?" Checking `src/layouts/Layout.astro` confirmed it — the project page never passed an `image` prop, so it silently fell back to `/og/default.png`, the generic site tagline. Same gap existed on `building-this-site`'s own project page this whole time; nobody had noticed because nobody had shared that specific link.

The fix reused `renderOgImage()` from entry 019 completely unchanged — same Satori renderer, same dark-theme tokens, same fonts. Two new endpoints, `/og/workshop-projects/[series].png` and `/og/workshop-chapters/[series]/[chapter].png`, just feed it different values: a project gets its title, a `workshop` tag, and a `zack glaser · N chapters, M entries` meta line pulled from `getProjectStats()`; a chapter gets its title and `chapter · entries 001–002` via the existing `chapterRange()` helper. Route params match the real page routes (`series`/`chapter`) so the mapping from page to image endpoint is obvious to read later. Because it's keyed off real collection data instead of hardcoded to one project, this series' own project page and all seven of its chapters got real OG images the moment it shipped — no separate work required for that half.

## What I got wrong (or don't know yet)

This project doesn't have a TypeScript checker installed (`astro check` wanted to install `@astrojs/check` and `typescript` as new dependencies, which felt like scope creep for a two-endpoint change), so there's no static safety net on these new files — verification was runtime only: curl each endpoint, confirm 200 and a sane byte size, then check the rendered page's `og:image` meta tag resolves correctly. That's decent evidence, but it's not the same guarantee the rest of the codebase gets from a type checker.

## Next up

Turning those generated images into visible thumbnails on the site's own cards, not just into link-preview meta tags nobody on the site itself ever sees.

**Costs so far:** $12/yr + Buttondown (free tier) / ~5 min
