---
title: Choosing the stack
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
tags: [stack, tooling]
---

# Choosing the stack

## What's on the bench

The framework: what actually renders this site.

## The decision

Astro, deployed static-first with SSR available if I need it later.

## How I took it apart

The real contest was Astro vs. Next.js. Ghost, WordPress, and Squarespace dropped out early — they fight the premise. This site's content model (brief §6) is everything's-a-post-with-a-pillar-tag, and hand-rolling that schema inside a CMS built around its own post types is friction I don't need. Hand-rolling the whole thing without a framework was tempting for about five minutes — full workbench-brag potential — but "publish weekly" and "maintain a bespoke static-site generator" are competing time budgets, and the newsletter habit has to win.

Between Astro and Next, three things actually mattered:

**Content collections.** Astro's `src/content/` with typed collections is a 1:1 match for the pillar model — I built the folder structure to that convention before the framework existed (see [003](/workshop/building-this-site/003-where-the-code-lives)), which is itself a tell. Next.js can do the same thing, but it's assembled from parts (a content library like Contentlayer or Velite, plus your own routing conventions) rather than shipped as the framework's front door.

**Default JS weight.** The design direction (brief §7) is typography-first, minimal chrome. Astro ships zero client JS unless a component asks for it — islands architecture. Next.js can be disciplined about this with the App Router and Server Components, but it takes discipline; Astro makes the frugal choice the default one, and defaults are what actually ship when I'm tired on a Tuesday.

**Fun-to-tinker factor.** This is a stated goal (brief §3, ranked third but real): if the stack stops being fun I abandon the project by October. Astro's mental model — plain HTML/markdown by default, reach for a framework component only where interactivity earns its keep — matches how I actually think about the site. Next's everything-is-a-component model is the right call for an app; this isn't an app yet.

What didn't matter as much as I expected going in: the members-area question (brief §8). I'd assumed it would tip the scale, since gated content sounds like it wants Next's bigger ecosystem. It doesn't tip anything — both frameworks get there the same way (SSR + middleware + a drop-in auth provider), and I'm not building it for v1 either way. Deferred is deferred regardless of framework.

The lawyer angle, since I owe myself the same rigor I'd hand a client: this was a buy-vs-build call disguised as a build-vs-build call. Both options are frameworks, not from-scratch work, so the real question was never "how much do I build" — it was "which framework's defaults already agree with the decisions I've already made in the brief." Astro's did. That's the whole analysis; anything more elaborate would have been me enjoying the research more than the site needed.

## What I got wrong (or don't know yet)

Astro's ecosystem for drop-in auth is thinner than Next's — fewer battle-tested Clerk/Auth.js integration guides, more stitching it together myself if the members area shows up sooner than the roadmap assumes (brief §11, currently Phase 2+). I'm accepting that risk now in exchange for the better fit today. If I'm wrong about the timeline, this is the entry I'll come back and wince at.

## Next up

Naming the newsletter.

**Costs so far:** $12/yr / __ hours (still not clocking this — I should start)
