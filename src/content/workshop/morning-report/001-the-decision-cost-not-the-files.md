---
title: The decision cost, not the files
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [meta, goals, automation]
---

## What's on the bench

A Downloads folder that only grows. This series covers Morning Report, a local app that turns cleaning it out into a daily habit instead of a task I keep deferring.

## The decision

Don't automate deletion. Automate the *presentation* of the decision — surface ten candidate files a morning, one at a time, with a recommendation attached, and let me click.

## How I took it apart

Downloads folders are entropy. Files accumulate faster than anyone cleans them, and the actual bottleneck was never disk space — it's the friction of opening Finder and deciding, file by file, what's safe to lose. That decision cost is high enough that most people, myself included, just never pay it.

The tempting shortcut was full automation: delete duplicates on a schedule, done. I rejected that almost immediately. Files sitting in Downloads are frequently there on purpose, even when they look like junk from the outside — an old invoice, a screenshot I meant to reference. An algorithm can flag `report (1).pdf` as a probable duplicate; only I know whether I still need it. Replacing that judgment with a script trades a messy folder for occasional real loss, which is a worse trade.

So the shape of the tool became: score files structurally, let Claude add the semantic read a score can't ("this filename pattern means it's a working copy nobody reopens"), and put a human in the loop for every single deletion. There's a broader pattern I keep running into with agent work — most of the real effort isn't the automation step itself, it's building the apparatus around it that makes a good decision cheap to make. The script that runs every morning is trivial. Designing the loop so that clicking through it feels like a game instead of admin work was the actual work.

## What I got wrong (or don't know yet)

I don't yet know if ten files a morning is the right number long-term, or whether it'll feel too slow once the backlog is real. It's adjustable in settings for exactly that reason, but I haven't lived with it long enough to know which direction I'll want to tune it.

## Next up

The stack: splitting the labor between a scoring algorithm and Claude.

**Costs so far:** ~5 min (of a 30 min build) / Anthropic API usage, pay-as-you-go
