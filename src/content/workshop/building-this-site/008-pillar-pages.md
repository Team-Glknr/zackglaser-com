---
title: "The pillar pages, as one template"
date: 2026-07-26
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, frontend]
---

## What's on the bench

The four pillar landing pages — `/legal-tech`, `/running`, `/workshop`, `/field-notes` — the routes every nav bar on the site links to and that have 404'd since the Hub shipped.

## The decision

Built as one dynamic route (`src/pages/[pillar]/index.astro` with `getStaticPaths`) instead of four copy-pasted files, and factored the newsletter card and empty state into real shared components along the way.

## How I took it apart

The design system's own mockup gave this away: there's one `Pillar Page.dc.html`, not four, with a "which pillar" picker bolted onto the prototype's demo bar. The four pages are identical in structure and differ only in label, accent color, dek, and which posts they filter to — exactly the shape `getStaticPaths` exists for. One template, four generated pages, and adding a fifth pillar later (if that ever happens) means adding one entry to `pillars.ts`, not a new file.

The mockup's format filter chips (teardown/log/take) turned out to be inert even in the prototype — no `onClick` wired up anywhere in its source. That settled a question I might otherwise have overthought: build them as working filters now, or leave them as-is? Leave them. There's no published content in any pillar yet, so a real filter would be filtering an empty list — pure decoration wearing a functional costume. They're rendered as plain, unclickable chips, matching what the design system actually shipped rather than what it visually implied.

This was the second real page to need a newsletter signup card and an empty-state block — the Hub already had both, written inline. Two independent copies of the same markup is exactly the point where factoring stops being premature, so both became real components (`NewsletterCard.astro`, `EmptyState.astro`) with props for the copy that actually varies (the eyebrow text, the empty-state message). The Hub got refactored to use them too, so there's now exactly one definition of each, not three.

Meta strings needed a second helper. The Hub's "latest" section needs to name the pillar (posts from different pillars sit side by side there); a pillar page already says the pillar in its own header, so repeating it in every row would be noise. `postMetaWithinPillar` shows the issue number or series instead, falling back to just the date — simpler than the mockup's hand-tuned per-post labels, but honest, since there's nothing real to tune it against yet.

## What I got wrong (or don't know yet)

The mockup's "[ load more ]" pagination button didn't make it into the real page at all — I just left it out. A static site can't back a working pagination control without either client JS or a second set of routes, and with zero published posts per pillar right now, there's nothing to paginate. I'm deferring the actual decision (JS-driven load-more vs. `/legal-tech/2` style routes) until a pillar has enough posts for it to matter, rather than guess now.

## Next up

Individual post pages — every link this entry generates (and the Hub's "latest" links) points at a route that doesn't exist yet.

**Costs so far:** $12/yr / __ hours
