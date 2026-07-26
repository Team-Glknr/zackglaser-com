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

1. **Speaking & consulting leads.** Make it effortless to evaluate and book Zack. The /speaking page is the site's one conversion job.
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
/legal-tech/speaking    THE conversion page: topics, appearances, one-sheet, headshots, booking form
/running                Pillar: training logs, race reports
/workshop               Pillar: builds, tinkering, code
/workshop/building-this-site   The build-in-public series (launch content)
/field-notes            Pillar: essays, big questions, alternative viewpoints
/newsletter             About + archive + subscribe
```

## 6. Content model

Everything is a post in one system; sections are filtered views.

Front matter schema (all content):

```yaml
title:        string
date:         YYYY-MM-DD
status:       draft | published
pillar:       legal-tech | running | workshop | field-notes
series:       optional (e.g. building-this-site)
newsletter:   optional issue number, if the post ran as an issue
tags:         []
```

**The newsletter is the engine.** One format — each issue takes one thing apart — rotating across pillars. Working title: *Taking Things Apart*. Each issue publishes to the site and auto-files into its pillar archive. One publishing habit feeds the whole site.

Cadence commitment: regular (target weekly-ish; the format doc governs the build-log series specifically).

## 7. Design direction

- One design system at the hub; each pillar gets an accent color within it, not its own identity.
- Workbench aesthetic over corporate polish: photos of real projects, sketches, honest numbers.
- Typography-first, fast, minimal chrome. The content is the design.
- Deliverables needed: color palette, type pairing, simple wordmark (logo question deferred — build log entry).

## 8. Technical requirements

- Static-first with SSR available. Stack: **Astro** (content collections map 1:1 to pillars). Decided in build log entry 004.
- Newsletter platform must support: custom domain, API access, web archive, tagging (Buttondown/ConvertKit-class; decide alongside stack).
- Analytics: privacy-friendly (Plausible/Fathom-class), watch pillar crossover specifically.
- **Members-area future-proofing**: no v1 build, but stack must not preclude gated content. Astro SSR + middleware + drop-in auth (Clerk/Auth.js/Supabase) covers gated archives and course-style content. If members ever means an interactive app (dashboards, UGC), stand up a separate app — that's the legitimate use of a subdomain.
- Booking form on /speaking must notify immediately (email at minimum). Zero friction: no accounts, no multi-step.

## 9. Positioning guardrail

Zack is Legal Tech Advisor at Lawyerist/Affinity and host of the Lawyerist Podcast. The personal site complements, never competes: it links out to Lawyerist work, doesn't replicate its content categories, and the speaking page should be coordinated with (or at least not surprise) the team. Draw this line precisely before /speaking ships. **Open item.**

## 10. Success metrics

- Speaking/consulting inquiries per quarter via the site (primary).
- Newsletter subscribers and open rate; % of subscribers who engage with 2+ pillars (the crossover bet).
- Publishing streak — issues shipped on cadence.

## 11. Roadmap

| Phase | Scope | Exit criteria |
|-------|-------|---------------|
| 0. Foundation (now) | Briefs, build log running, decisions logged | This doc + entries 001–002 ✓ |
| 1. Decisions | Stack (003), newsletter name/platform (004), brand basics (005) | Each is a build log entry |
| 2. Build | Hub, pillar pages, /speaking, newsletter wired up | Site deployable; speaking page reviewed against §9 |
| 3. Launch | Publish build-log series retroactively, announce, first newsletter issue | Live + issue 001 sent |
| 4. Habit | Weekly-ish issues, quarterly review of metrics (§10) | 12 consecutive issues |

## 12. Open questions

- Affinity/Lawyerist positioning line (§9) — resolve before /speaking.
- Newsletter name — *Taking Things Apart* is a working title, not a decision.
- Section naming — "workshop" vs. physical/code split; "field notes" gut-check.
- Whether one rotating newsletter retains single-pillar subscribers — the bet to watch in metrics.
