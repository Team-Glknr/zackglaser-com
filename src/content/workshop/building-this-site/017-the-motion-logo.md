---
title: "The motion logo: Mark A knolls into place"
date: 2026-07-27
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [brand, design-system, motion]
---

## What's on the bench

An open question from the favicon spec (docs/05 §7): should the mark move? Answered with an actual prototype instead of a hypothetical.

## The decision

Mark A now plays a scattered-to-knolled reveal once, on page load, in the nav — 700ms, each of the four parts settling in on a 90ms cascade — then holds still. The favicon itself stays static, as the spec always intended; this is the nav/header context only.

## How I took it apart

Two preview files showed up, not one: an infinite loop (scattered → knolled → hold → scattered, repeating every 2.6s) and a play-once version that settles and stays. Different files, different intents — the loop reads as a loading spinner, the play-once reads as a reveal. The one actually named for this task was the play-once version, and its own caption said as much: "as it would as the nav/header logo." Nav chrome that never stops moving would earn its own annoyance; a reveal that plays once and lets the mark sit still afterward doesn't.

The implementation detail worth remembering: the preview's keyframes use pixel-value translates (`translate(-18px, -22px)`, etc.) inside an SVG with a specific viewBox, at a 240px preview size. I didn't need to rescale any of that math for the nav's 22px size — CSS transforms on SVG children operate in the SVG's own coordinate space, which is fixed by the viewBox, not by however large the browser ends up rendering the SVG. Same viewBox, same numbers, any final size, identical proportional motion. Copied the keyframes over unchanged.

One real change from the source file: it hardcoded ink and gold as fixed hex colors, because it was only ever a static-color mockup, never wired to a theme. Swapped both for the site's live CSS variables (`--color-ink`, `--pillar-workshop`) so the animation is dark-mode aware the same way every other mark on the site already is — the reference file couldn't have shown that either way, since it never had a dark mode to be aware of.

Reduced motion needed no special-casing. The global rule in `theme.css` already disables all animation for `prefers-reduced-motion: reduce`; with the animation off, the parts just render at their un-transformed position, which is the assembled, knolled state — the correct fallback fell out of a rule written months of build-log-time ago for a completely different reason.

## What I got wrong (or don't know yet)

Haven't lived with this across real, repeated navigation yet. Every full page load replays the reveal, since this is a static multi-page site, not an app — that's correct for a first visit and might read as a nice touch or as noise on someone clicking through four pages in ten seconds. Only real usage will answer that. The looping variant is still sitting in Downloads, unused — not needed here, but worth remembering it exists if a genuine loading-state context comes up later.

## Next up

The speaking page — the one item left on the roadmap with an open strategy question in front of it, not just an open design question.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
