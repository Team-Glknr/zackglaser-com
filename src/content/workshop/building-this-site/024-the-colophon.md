---
title: "The colophon: /how-this-site-is-made ships"
date: 2026-07-28
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, ai-first, colophon]
---

## What's on the bench

Docs/04-ai-first.md §8's implementation checklist had one item left unchecked: the actual `/how-this-site-is-made` page. Everything else on that list — the schema field, the provenance stamp, agent commits carrying `Co-Authored-By` trailers, the footer link — shipped months ago. The footer and every post's stamp have pointed at that URL the whole time; it's just been a 404.

## The decision

The page is built, ported from a new mockup (`Colophon Page.dc.html`), with one rule: every placeholder link in the mockup got replaced with something real. The repo link, `AGENTS.md`, and the worked example in "the supervision loop" section all point at things that actually exist.

## How I took it apart

The mockup's own worked example was "the essay 'Stop hiding the seams'" — written as a hypothetical when the mockup was drafted, since no such essay existed yet. It does now: a field-notes post with that exact title published to `main` earlier this same session, arriving from a different branch while other work was in flight. The mockup predicted its own supporting evidence before the evidence existed, and reality caught up within one working session. Looked up the post's real id via `getCollection` rather than hardcoding the path, matching how the Hub and pillar pages already resolve post links — the href stays correct if the post ever moves.

The receipts section claims "the actual instructions the bots work under are public too" and links to `AGENTS.md`. Worth being honest about what that file actually contains: dev-server startup commands and links to Astro's own docs, not a philosophical statement about supervision or voice. The claim holds regardless — it genuinely is the live, real instruction file this repo's agents operate under — but it's sparser than the surrounding copy might imply, and I didn't pad it out to match the copy's tone.

Stamp descriptions in the mockup used slightly different wording than what's already shipped in `AuthorshipStamp.astro` and docs/04 §3. Used the real, shipped copy instead of the mockup's version, so the colophon and the stamps it explains never drift from each other.

## What I got wrong (or don't know yet)

First pass at the supervision-loop link tried to derive its display text from the real post's title (`title.split(':')[0]`) instead of just writing the short label directly. Cut it — being clever about string-splitting a title for a label that could just be a plain string wasn't buying anything, and it's one more thing that breaks quietly if the title's punctuation ever changes.

## Next up

The footer's other placeholder links — logged separately, next entry.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
