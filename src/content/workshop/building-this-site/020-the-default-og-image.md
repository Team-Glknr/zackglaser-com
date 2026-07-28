---
title: "The default OG image"
date: 2026-07-27
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, og-image]
---

## What's on the bench

The gap entry 019 left standing: every post got a real social share card, and every other page — the Hub, the four pillar pages, `/about`, `/now` — got nothing. Someone sharing the homepage would've gotten a bare text link.

## The decision

One more card, `/og/default.png`: no pillar tag, no format eyebrow, just the wordmark and the brief's own tagline — "Taking things apart to see how they work." `Layout.astro` now defaults every page's `image` prop to it, so nothing renders without a real `og:image` again.

## How I took it apart

The design system never designed this state — `Social Share Image.dc.html` is explicitly "one layout for every post," pillar tag and format pill included by construction. There was no mockup to port for "a page that isn't about anything in particular." Rather than invent new marketing copy to fill that gap, I reused what the brief already committed to: the tagline it demoted from working-title-to-tagline back in the Knolling naming entry, and the same "zack glaser · legal tech advisor, runner, tinkerer" line already sitting in the footer copyright. Nothing on this card is new writing.

Building it also meant fixing something I should have caught building entry 019 in the first place: the per-post generator's ~150 lines of layout tree were about to get copy-pasted a second time with two fields removed. Pulled the whole thing into `src/lib/ogImage.ts` as one shared function taking the parts that actually vary — title, meta line, accent, and two optional fields (`tagLabel`, `eyebrow`) that just don't appear in the tree when omitted, rather than rendering as empty placeholders. The per-post route lost about 140 lines and gained nothing but a function call; the new default route is twelve lines of actual content.

## What I got wrong (or don't know yet)

Same gap as last entry, now inherited by the default card too: no page-specific `og:description` anywhere, post or otherwise. Still out of scope for what either entry was asked to close, but it's the same shape of gap twice now, which is usually the point where it stops being "not yet" and starts being "actually decide."

## Next up

Whatever's next now that every page on the site has a real social preview — `/speaking` (tabled) and rung 2 of the GitHub on-ramp are what's left open.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
