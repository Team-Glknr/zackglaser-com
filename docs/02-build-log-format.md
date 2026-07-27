# Building zackglaser.com — build log operating manual

This doc is private; the entries are public. Entries live in `src/content/workshop/building-this-site/`.

## Premise

The site's workshop pillar is about taking things apart to see how they work. The first thing on the bench is the site itself. Every meaningful step of the build becomes an entry — decisions, dead ends, and all. Launch day, the workshop section already has a full series in it.

## Where it publishes

- Series URL: `/workshop/building-this-site/`
- Entries numbered: `001-`, `002-`, etc. Numbers, not dates, drive order — but each entry carries its date.
- Entries accumulate in the repo pre-launch (`status: draft`) and publish retroactively at launch — which is itself an entry.

## Entry structure

Every entry uses the same five parts. Short is fine; skipping parts is not — the consistency is the format.

1. **What's on the bench** — the piece of the build this entry covers, in one or two sentences.
2. **The decision** — what got decided, stated plainly up front. No burying the lede.
3. **How I took it apart** — the reasoning: options considered, what mattered, what didn't. This is the teardown and the heart of the entry.
4. **What I got wrong (or don't know yet)** — at least one open question or reversed assumption per entry. This is what makes it a log and not a press release.
5. **Next up** — one line pointing at the next entry.

## Front matter

Uses the site-wide schema (see `docs/01-site-brief.md` §6):

```yaml
---
title:
date: 2026-XX-XX
status: draft        # draft | published
pillar: workshop
format: log          # the series is log-format; see brief §6 for the pillar/format axes
series: building-this-site
authorship: duet     # human | duet | bot — who typed it; see docs/04-ai-first.md
tags: []
---
```

## Rules of the log

- Write the entry when the decision happens, not after. Fresh reasoning beats reconstructed reasoning.
- One decision per entry. Two decisions = two entries.
- 300–800 words. If it's longer, the entry is doing two jobs.
- Screenshots and sketches encouraged, polish discouraged. Workbench photos, not product shots.
- Every entry names its costs: money spent, hours spent, or both. Readers building their own sites want real numbers.
- Cross-post the interesting ones to LinkedIn as excerpts linking back. The log is the source of truth.

## Entry backlog (working list)

- 001 — Why I'm building this ✓
- 002 — The architecture: one house, four rooms ✓
- 003 — Where the code lives (git/GitHub, the thirdth account) ✓
- 004 — Choosing the stack (Astro vs. Next; members-area question — see brief §8) ✓
- 005 — Pillars vs. formats: untangling the taxonomy ✓
- 006 — The GitHub on-ramp: the repo goes public, and the site starts teaching GitHub (docs/03-github-onramp.md) ✓
- 007 — Porting the design system: theme, chrome, and the Hub ✓
- 008 — The pillar pages, as one template ✓
- 009 — AI-first, out loud: the bots build the site, and the site says so (docs/04-ai-first.md) ✓
- 010 — Individual post pages (ships the authorship field + provenance stamp from entry 009) ✓
- 011 — Naming the newsletter: **Knolling** (platform: Buttondown — see brief §6/§8) ✓
- 012 — Shipping the favicon: Mark A live, Mark B + wordmark lockups still pending (docs/05-favicon-marks.md) ✓
- 013 — Brand: colors, type, and the logo question (incl. section display-name and colophon-slug gut-checks; Mark B + wordmark lockups from docs/05-favicon-marks.md)
- 014 — The speaking page (and the Lawyerist/Affinity line — brief §9)
- 015 — A game as a front door (tabled; three prototypes in docs/mockups/)
- 016 — Launch
