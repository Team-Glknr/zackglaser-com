---
title: "The speaking page: real proof, and pulling the placeholders"
date: 2026-07-27
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, speaking, positioning]
---

## What's on the bench

Brief §9's open strategy question — how a speaking page sits next to the Lawyerist/Affinity day job without competing with it — finally got resolved, and `/speaking` got built against the answer in the same session. It shipped twice: once with placeholders standing in for missing assets, then again without them, same session.

## The decision

The badge is worn openly: the Lawyerist/Affinity title and podcast hosting are hero-level credentials, not bio-buried. The page books speaking and podcast appearances only; consulting inquiries get referred to Affinity by name, every time. That referral is the actual complement-not-compete mechanism — it's what makes coexisting with the day job's business honest instead of just claimed. The page shipped with real ticket-wall and topic data, plus two sections the old mockup never had — three podcast clips and a written sample teardown — proving "effective speaker," not asserting it.

Headshot, clip videos, and testimonials don't exist yet. First pass shipped all three as visible placeholder boxes. Second pass, same day, pulled the headshot and testimonials entirely — nothing to render honestly, the same call the About page already made for its own photo hero — while keeping the clip quotes as plain text: they're real, sourced from actual episodes, and lose none of their proof value without a video wrapped around them.

## How I took it apart

The positioning line resolved on a simple test: what does the page need to prove, and what's the cheapest real thing that proves it? "Effective speaker" split into four provable pieces — clips (show the delivery), the teardown (perform the skill instead of describing it), testimonials (reaction-specific, not generic), and the ticket wall's room-size metadata (large-room and intimate-room claims made by the data, never the copy). Once the proof mechanism was that concrete, the "keynote" tier from the old mockup's topic groups just fell out — nothing's actually been booked as a formal keynote, so keeping the tier would have asserted something the ticket wall didn't back up.

Two numbers got deliberately left unfilled rather than guessed. The Lawyerist Podcast's real episode count isn't in any doc available to me, so its ticket shows `HOST` / `ONGOING` in place of a number. The Affinity referral line needed a real URL that doesn't exist anywhere in the repo either — it follows the exact placeholder pattern `Footer.astro` already uses for its own unresolved links (`href="#"`, a comment flagging it), rather than inventing one.

## What I got wrong (or don't know yet)

Missed an entire section on the first pass: the one-sheet download row, even after explicitly agreeing to ship it as a disabled placeholder instead of dropping it outright. Caught during a later "what's left to build" pass, not by any review step along the way.

The bigger reversal: the placeholder-box treatment for headshot, clips, and testimonials seemed right going in, but three empty "pending" boxes stacked across one page read as more unfinished than three things simply not being there — especially next to a page that otherwise leans hard on "real proof, never asserted." The site already had the better precedent sitting in `about.astro`, which dropped its own photo hero outright rather than placeholder it; this page just hadn't followed it yet. Split the difference correctly this time: drop what's purely decorative or entirely unwritten (headshot, testimonials), keep what's already real even without its intended wrapper (the clip quotes).

## Next up

Real assets, added when they exist rather than swapped in for a placeholder: a headshot, cut clips, testimonial outreach, the episode count, the Affinity URL, a form backend. None of these are build tasks — they're waiting on people and footage, not code.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
