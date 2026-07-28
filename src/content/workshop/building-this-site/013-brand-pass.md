---
title: "The brand pass: two gut-checks and a wordmark"
date: 2026-07-26
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [brand, design-system, naming]
---

## What's on the bench

The last reserved "decisions" slot on the roadmap: section naming, the colophon slug, and a wordmark lockup to go with the favicon.

## The decision

"Workshop" and "field notes" keep their display names — no rename. The colophon lives at `/how-this-site-is-made`, not "colophon." And there's now a real wordmark lockup: `public/brand/wordmark-zackglaser.svg`, mark plus "zackglaser.com," light/dark aware.

## How I took it apart

Half the entry this slot was reserved for turned out to already be done. The brief's design-direction section still listed "color palette, type pairing" as outstanding deliverables — they weren't. Both were decided and shipped in `theme.css` back in entry 007, the day the design system got ported into real code. Nobody had gone back to cross it off. Worth remembering: a roadmap line doesn't update itself just because the work happened somewhere else.

The two real gut-checks were smaller than they looked on paper. Section naming: "workshop" and "field notes" already sit in every nav dropdown and footer list right next to "legal tech" and "running," doing the same job — a visitor scanning that list reads four parallel subjects, not three subjects and two odd ones out. If they didn't read as subjects, the nav itself would already be the evidence; it isn't. Colophon slug: `/how-this-site-is-made` had a real advantage "colophon" never got a chance at — it was already live. `AuthorshipStamp.astro` has pointed there since entry 010. Renaming it now would mean a redirect and a broken mental model for zero gain, chasing a word that's precise but asks more of a first-time reader than the plain one does — and "allergic to making people feel they should have already known" (brief §2) is supposed to be a real constraint, not just a sentence in a doc.

The wordmark lockup was the one genuine build. `docs/05-favicon-marks.md` specified the content — Mark A plus "zackglaser.com" — but not the geometry, so that part was trial and error: render, measure the text's actual bounding box against the real fonts, adjust the viewBox, repeat. Literata italic and Space Mono bold don't share a baseline rhythm the way two cuts of one typeface would, so getting the icon, the serif half, and the mono half to look like one lockup instead of three adjacent things took a couple of passes I wouldn't have gotten right by eyeballing the numbers alone.

Deliberately not built: the Knolling lockup (mark + "Knolling") and Mark B itself. Both are still waiting on the Buttondown account existing, per docs/05's own reasoning from entry 012 — that hasn't changed just because this entry shipped its sibling.

## What I got wrong (or don't know yet)

I didn't actually validate the wordmark lockup against a real external use case — no social profile has it as an avatar yet, no printed anything exists to check it against. It's correct by construction (same tokens, same fonts, same grid math as everything else), but "correct by construction" and "looks right in the wild" aren't guaranteed to be the same thing until something actually uses it.

## Next up

Whatever's next after the roadmap's entire "Decisions" phase — everything in it is now checked off. Likely candidates: wiring up Knolling for real (the Buttondown account doesn't exist yet), or the pages that are still dead links (`/now`, `/about`).

**Costs so far:** $12/yr / __ hours
