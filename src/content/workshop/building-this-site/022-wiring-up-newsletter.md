---
title: "Wiring up /newsletter: hero, subscribe, archive"
date: 2026-07-27
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, newsletter]
---

## What's on the bench

The dead link nav and footer had been pointing at since the newsletter's chrome first shipped: `/newsletter`. Everything around it existed — the name, the Buttondown account, the subscribe forms elsewhere on the site — except the route itself.

## The decision

`/newsletter` is live: a hero with an inline Buttondown subscribe form, then an archive section reading from the (currently empty) `newsletter` content collection.

## How I took it apart

Ported `docs/design-system/Newsletter Page.dc.html` directly, but the mockup's own h1 — "Taking Things Apart" — had to change. That's the demoted working tagline now, not the newsletter's name; entry 011 settled that months ago as **Knolling**. Swapped the h1, folded the tagline into the closing clause of the dek instead of dropping it.

The mockup's filter chips and "load more" pagination stayed inert by design — same call already made on the pillar pages: no point building working filters or real pagination for an archive that doesn't have a page's worth of content in it yet.

The real surprise was mechanical, not editorial. `getCollection("newsletter")` threw outright — "The collection does not exist or is empty" — instead of returning `[]`. Astro's glob loader registers zero entries for a directory holding only a `.gitkeep`, and `getCollection()` doesn't tolerate that state gracefully. A `try`/`catch` defaulting to `[]` was the smallest fix, and it stops firing itself the moment a real issue file lands — no future cleanup required.

## What I got wrong (or don't know yet)

Skipped the mockup's subscriber-count line entirely ("joined by 1,240+ readers") rather than inventing a placeholder number — same honesty rule that's governed every other gap on this site so far. Whether that line comes back once there's a real count to show is open.

## Next up

The speaking page, which had its own strategy question to resolve first (brief §9).

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
