---
title: "The last dead links: /now and /about"
date: 2026-07-27
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, content]
---

## What's on the bench

The two pages every nav bar and footer on the site has linked to since entry 007, and every one of those links has 404'd the whole time: `/now` and `/about`.

## The decision

Both built from their design-system mockups, with one real change: `/about`'s photo hero and gallery are gone. There are no real photos in this repo, and the mockup's `<image-slot>` placeholders don't exist outside the prototyping tool — building fake image slots for images that don't exist would be exactly the kind of thing this build log keeps calling out when other pages did it.

## How I took it apart

These two pages had a different kind of blocker than anything built so far. Every other page on the site has been buildable from decisions already on record — pillar descriptions, format taxonomy, brand tokens. `/now` and `/about` needed facts about a real person that don't live in any doc: what he's actually training for right now, what year he finished a JD, whether there's a photo to use. I asked rather than guess, because the alternative was inventing biographical claims about someone with an actual name attached to this site — a different category of mistake than picking the wrong shade of gold for an accent color.

Once the real content existed, both pages were mechanical ports of their mockups. `/now`'s four-row layout (label, value, detail, one per pillar with its accent as a small dot) needed no restructuring — the real answers just dropped into the same shape the mockup already specified. `/about`'s "the arc" timeline was the one place I had to actually think: the mockup's version used a 2011/2015/2021 placeholder cadence that reads evenly-spaced on purpose, prototype-style. The real years — 2004, 2011, 2017 — aren't evenly spaced, and I left them alone rather than smoothing them into something tidier than they are.

Dropping the photo hero meant the About page's layout simplified from the mockup's two-column grid (photo | text) to a single text column — less a redesign than just not building the half that had nothing real to show yet. Easy to add back later without restructuring anything else on the page.

## What I got wrong (or don't know yet)

Both pages are exactly as current as the day they were written, and `/now` says so explicitly in its own copy — but nothing on the site enforces that. If this page still says "training for local 5Ks" eight months from now, that's a content debt, not a bug, and nothing will flag it. The convention only works if it's actually kept up.

## Next up

The speaking page — the one page on the roadmap that still has an open strategy question in front of it (brief §9).

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
