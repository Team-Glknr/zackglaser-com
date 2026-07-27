# zackglaser.com — site brief

Status: working draft · Last updated: 2026-07-26
Owner: Zack Glaser

---

## 1. Purpose

zackglaser.com is Zack's personal brand hub. It presents all sides of him — legal tech expert, runner, tinkerer, essayist — as one coherent identity, and converts that identity into speaking and consulting opportunities, a subscriber audience, and a home base that outlives any employer or platform.

## 2. Brand premise

"Legal tech commentator" is a crowded category. The differentiator is the mix: Zack takes things apart to see how they work — software stacks, training plans, workbenches, beliefs — and shows people the pieces. Religion degree → JD → fullstack certificate is the arc; the site makes it legible.

Implications:

- The site never apologizes for range. The crossover is the hook, not a bug.
- Voice: natural teacher — warm, plain-spoken, allergic to making people feel they should have already known.
- Every pillar uses the same "teardown" instinct; the subject rotates, the method doesn't.

## 3. Goals (ranked)

1. **Visibility as an expert.** Speaking, press, and podcast appearances are proof points, not the goal itself — the /speaking page's job is credibility first, booking made easy second.
2. **Audience building.** Regular publishing via a single newsletter; subscribers are the asset.
3. **Personal playground.** The site itself is a workshop project. If it stops being fun, the design has failed.

Non-goals (for v1): e-commerce, courses, a members area (see §8), competing with Lawyerist/Affinity content.

## 4. Audiences

- **Bookers**: CLE organizers, conference programmers, podcast hosts, firms seeking a consultant. Need: credibility, topics, logistics, fast contact.
- **Small-firm lawyers & legal tech people**: the existing Lawyerist audience meeting Zack directly. Need: useful takes, tool teardowns.
- **The crossover curious**: runners, makers, and readers who arrive through one pillar and stay for the person.

## 5. Site architecture

One site, path-based sections, no subdomains. Rationale: preserves consolidated SEO authority, one design to maintain, and matches the blended-brand strategy. Any pillar can be promoted to a subdomain later because everything is a tagged collection underneath.

```
/                       Hub: 30-second intro, four doors, latest 3 posts (any pillar), newsletter CTA
/now                    What Zack is building / training for / reading right now
/about                  Longer story, photos, the arc
/legal-tech             Pillar: tools, takes, industry commentary
/legal-tech/speaking    Credibility page first, booking made easy second: topics, appearances, press, one-sheet, headshots, booking form
/running                Pillar: training logs, race reports
/workshop               Pillar: builds, tinkering, code
/workshop/building-this-site   The build-in-public series (launch content)
/field-notes            Pillar: essays, big questions, alternative viewpoints
/newsletter             About + archive + subscribe
/teardowns              Format view: every teardown across all pillars — doubles as the newsletter archive
```

Navigation is pillar-based (subjects are how people browse). Formats get cross-cutting views (`/teardowns`; each log series gets its own page). No nav changes required by the format axis.

## 6. Content model

Everything is a post in one system; sections are filtered views.

**Two axes, never conflated** (decided 2026-07-26; build log entry 005):

- **Pillar** = subject — *what the post is about*. Exactly one per post. Pillars are the interests: legal tech, running, making things, big ideas. Slugs double as section URLs and content folders.
- **Format** = method — *what the post does*. Exactly one per post:
  - `teardown` — the flagship: disassemble one thing, show the pieces. Every newsletter issue is a teardown.
  - `log` — ongoing journal entries in a series (training log, building-this-site, experiment logs).
  - `take` — short, timely opinion.

The earlier model crammed both axes into one list, which is why "workshop" (a subject) and "teardowns" (a method) kept colliding.

Front matter schema (all content):

```yaml
title:        string
date:         YYYY-MM-DD
status:       draft | published
pillar:       legal-tech | running | workshop | field-notes   # subject — exactly one
format:       teardown | log | take                           # method — exactly one
series:       optional (e.g. building-this-site)
newsletter:   optional issue number, if the post ran as an issue
tags:         []   # fine-grained topics (ai, woodworking); not promoted to structure until a tag earns it
```

**The newsletter is a format, not a pillar.** *Taking Things Apart* = the teardown format, full stop. Each issue files under one pillar; `/teardowns` is its archive. Logs and takes are site-only content between issues — which also answers "what do I publish when a teardown isn't ready."

Cadence commitment: regular (target weekly-ish; the format doc governs the build-log series specifically).

## 7. Design direction

- One design system at the hub; each pillar gets an accent color within it, not its own identity.
- Workbench aesthetic over corporate polish: photos of real projects, sketches, honest numbers.
- Typography-first, fast, minimal chrome. The content is the design.
- Deliverables needed: color palette, type pairing, simple wordmark (logo question deferred — build log entry).

## 8. Technical requirements

- Static-first with SSR available. Stack: **Astro** (content collections map 1:1 to pillars). Decided in build log entry 004.
- Newsletter platform: **Buttondown** (decided 2026-07-26; to be written up with the naming decision, build log entry 009). Markdown-native with a full REST API, so issues live as markdown in the repo and `/teardowns` on our own domain is the archive — one source of truth. Checks every requirement (custom domain, API, archives, tagging), starts free/$9-a-month at this list size, and subscriber export is trivial so there's no lock-in. Kit and beehiiv optimize for commerce and ad-driven growth respectively — both non-goals (§3).
- Analytics: privacy-friendly (Plausible/Fathom-class), watch pillar crossover specifically.
- **Members-area future-proofing**: no v1 build, but stack must not preclude gated content. Astro SSR + middleware + drop-in auth (Clerk/Auth.js/Supabase) covers gated archives and course-style content. If members ever means an interactive app (dashboards, UGC), stand up a separate app — that's the legitimate use of a subdomain.
- Booking form on /speaking must notify immediately (email at minimum). Zero friction: no accounts, no multi-step.
- **GitHub on-ramp** (decided 2026-07-26; build log entry 006): the repo goes public and the site itself teaches GitHub to attorneys — footer links to source and commit history, comments via giscus (GitHub Discussions), and a "suggest an edit" link on every post that walks readers into their first pull request. Full spec: `docs/03-github-onramp.md`. Note the accepted tradeoff: `status: draft` posts are visible in the public repo.

## 9. Positioning guardrail

Zack is Legal Tech Advisor at Lawyerist/Affinity and host of the Lawyerist Podcast. The personal site complements, never competes: it links out to Lawyerist work, doesn't replicate its content categories, and the speaking page should be coordinated with (or at least not surprise) the team. Draw this line precisely before /speaking ships. **Open item.**

## 10. Success metrics

- Visibility proof points landed per quarter (primary): speaking engagements, press mentions, podcast appearances — the direct measure of "visibility as an expert," not a proxy like follower counts or raw traffic.
- Newsletter subscribers and open rate; % of subscribers who engage with 2+ pillars (the crossover bet).
- Publishing streak — issues shipped on cadence.
- Speaking/consulting inquiries per quarter via the site (secondary — still worth tracking, but a lagging indicator now that credibility, not conversion, is the goal).

## 11. Roadmap

| Phase | Scope | Exit criteria |
|-------|-------|---------------|
| 0. Foundation (now) | Briefs, build log running, decisions logged | This doc + entries 001–002 ✓ |
| 1. Decisions | Stack (004) ✓, taxonomy (005) ✓, GitHub on-ramp (006) ✓, newsletter name/platform (009), brand basics (010) | Each is a build log entry |
| 2. Build | Hub, pillar pages, /speaking, newsletter wired up, GitHub on-ramp (docs/03) | Site deployable; speaking page reviewed against §9; repo public with comments + edit links live |
| 3. Launch | Publish build-log series retroactively, announce, first newsletter issue | Live + issue 001 sent |
| 4. Habit | Weekly-ish issues, quarterly review of metrics (§10) | 12 consecutive issues |

## 12. Open questions

- Affinity/Lawyerist positioning line (§9) — resolve before /speaking.
- Newsletter name — *Taking Things Apart* is a working title, not a decision.
- Section naming — the subject/method conflation is resolved (pillar vs. format, entry 005), but whether "workshop" and "field notes" *read* as subjects to visitors is still a gut-check for the brand entry. Slugs stay put either way; only display names would change.
- Whether one rotating newsletter retains single-pillar subscribers — the bet to watch in metrics.
