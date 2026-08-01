---
title: A game, not a script
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [product-design, ux]
---

## What's on the bench

Whether Morning Report is a terminal tool or a browser app, and how many files it shows me per session.

## The decision

A local web app in the browser, capped at ten files a session, both adjustable in settings but not by editing code.

## How I took it apart

The whole point of this tool is turning a chore into a habit, and the game metaphor only works with a UI. A terminal prompt — `y/n/skip` in a loop — reads as work no matter how I dress it up. Buttons labeled `[ trash ]` `[ keep ]` `[ later ]`, a visible score, and Claude's one-line reasoning next to each file reads as a decision-support tool instead. The browser framing paid for itself twice over: it also made a settings panel the natural place to put adjustable knobs (files per session, minimum age) instead of asking future-me to go edit Python.

The ten-files-a-session cap is the same instinct applied to scope instead of interface. I picked it deliberately, not as a technical limit — enough to feel productive, not enough to feel like a project. If the session was unlimited, cleaning the folder would turn back into the kind of open-ended task that never has a natural stopping point, which is exactly the failure mode this whole app exists to route around. The constraint is the feature.

## What I got wrong (or don't know yet)

I don't know yet whether ten is actually the right default versus just a reasonable first guess — see the open question in the first entry. I also haven't tested what happens once the backlog is large enough that ten files a day barely dents it; the session cap might need a "catch-up mode" I haven't designed.

## Next up

Matching the visual design to the rest of zackglaser.com.

**Costs so far:** ~5 min (of a 30 min build) / Anthropic API usage, pay-as-you-go
