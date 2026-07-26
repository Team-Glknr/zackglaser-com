---
title: "Pillars vs. formats: untangling the taxonomy"
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
tags: [taxonomy, content-model, architecture]
---

# Pillars vs. formats: untangling the taxonomy

## What's on the bench

The content model. Specifically, a quiet bug in it: my categories were two different kinds of thing pretending to be one list.

## The decision

Every post gets exactly two labels from two separate axes. A **pillar** — what the post is *about*: legal tech, running, the workshop, field notes. And a **format** — what the post *does*: a teardown (disassemble one thing, show the pieces), a log (ongoing journal entries in a series), or a take (short, timely opinion). Tags stay underneath as loose keywords, and nothing gets promoted to structure until it earns it.

## How I took it apart

The tell was that "workshop" and "teardown" kept fighting. I'd say the site has four pillars, then describe the newsletter as "teardowns of software, training plans, workbenches" — and suddenly the teardowns sounded like a fifth section that overlapped all the others. It did overlap all the others, because it wasn't a section. "Running" answers *what is this about?* A teardown answers *what kind of piece is this?* Different questions; different axes. Cramming both into one list is how you get a junk-drawer taxonomy — and I had one.

Splitting them cleaned up three things at once. The newsletter stopped being a confusing fifth pillar: it's the teardown format, full stop, and each issue just files under whichever pillar it belongs to. Navigation stayed simple: the menu is pillars, because subjects are how people browse, while formats get cross-cutting views — /teardowns is the newsletter archive wearing a different hat. And this build log stopped being ambiguous: it's pillar workshop, format log, series building-this-site. One post, two labels, no hand-waving.

The mechanical change was small: one required `format` field in the front matter schema, enforced in the Astro content config. The conceptual change was the whole point.

## What I got wrong (or don't know yet)

The original sin was mine: I named the pillars evocatively ("the workshop," "field notes") and those names *sound* like formats or places, which greased the conflation. The slugs are staying put — URLs and folders shouldn't churn over vibes — but whether the display names read as subjects to an actual visitor is still an open question for the brand pass. Also unproven: three formats may be one too many or one too few. I'll know after twenty posts, not before.

## Next up

Making the repo public — this site is about to start teaching GitHub by being on GitHub.

**Costs so far:** $12/yr / 30 minutes (the cheapest entry yet — it was all thinking)
