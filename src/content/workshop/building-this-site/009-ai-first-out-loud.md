---
title: "AI-first, out loud"
date: 2026-07-26
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [ai, authorship, transparency]
---

## What's on the bench

How this site discloses that most of its content is AI-drafted — not whether to disclose it, but how to make the disclosure mean something.

## The decision

A third front-matter field, `authorship: human | duet | bot`, on every post — provenance, not a fourth taxonomy axis. Plus a public repo with co-authored commits and a standing colophon page (`/how-this-site-is-made`) that says exactly what the bots are allowed to do.

## How I took it apart

The easy version of this decision is a footer line: "this content may be AI-generated." I didn't want the easy version, because it's also the useless version — anyone can paste that sentence onto anything, and it tells a reader nothing about how much editing happened or who's accountable for what got published.

What actually matters is auditability. This repo is already public (build log entry 006) and every commit already carries a `Co-Authored-By` trailer when a bot did the typing — that infrastructure was sitting there unused. Pointing it at disclosure was nearly free: the commit history already is the receipt, I just had to say so out loud and add the piece individual posts were missing — a stamp naming which of three modes produced them (`human`, `duet`, `bot`), tied to a page that explains what each one means and what I actually check before anything ships.

The line that makes this safe to do at all: the voice doc governs the bots, not the other way around. Judgment, positions, and the byline stay human regardless of who typed the first draft. Without that rule this is a content farm with better branding; with it, it's closer to how the legal-tech audience already thinks about delegation — I supervise my bots roughly the way a lawyer supervises a paralegal under Model Rule 5.3. That framing did double duty: it's not just a disclosure mechanic, it's a teardown topic in its own right for the legal-tech pillar.

`authorship` almost became a fourth item in the pillar/format schema (entry 005) before I caught it. Pillar is what a post is about, format is what it does — authorship is neither; it's who typed it, and it should never filter a page or drive navigation. Keeping it out of the taxonomy and rendering it as just a stamp on the post kept the two real axes clean.

## What I got wrong (or don't know yet)

This entry is the spec, not the implementation — the schema field, the stamp component, and the colophon page are still ahead, landing with the post-page build. There's also a real open question I haven't resolved: whether the bots get names or stay generic ("the bots"). Named agents are more fun and more honest about there being several of them; they're also a step closer to twee. Deferred to the brand pass.

## Next up

Individual post pages — which is also where the provenance stamp actually ships.

**Costs so far:** $12/yr / __ hours
