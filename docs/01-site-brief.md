# zackglaser.com — site brief

Status: working draft · Last updated: 2026-07-27
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
/how-this-site-is-made  Colophon: the bots, the models, the supervision loop (slug provisional; docs/04)
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
authorship:   human | duet | bot   # provenance, not taxonomy — who typed it; see docs/04-ai-first.md
tags:         []   # fine-grained topics (ai, woodworking); not promoted to structure until a tag earns it
```

**Authorship is provenance, not a third axis** (decided 2026-07-26; build log entry 009): most content here is AI-drafted under Zack's direction, and every post says so via a stamp — celebrated, not disclaimed. It never drives navigation. The rule that makes it safe: the voice doc governs the bots, not vice versa. Full spec: `docs/04-ai-first.md`.

**The newsletter is a format, not a pillar.** **Knolling** (named 2026-07-26; build log entry 011) names the newsletter itself. Every issue is written in the `teardown` format, but the two words split jobs for good: **Knolling** refers to the newsletter as a place/product — nav, footer, subscribe cards, issue copy; **teardown** (lowercase) stays the taxonomy word for the disassembly method, used wherever the site names the idea rather than the destination — the format pill on a post, `/teardowns` as its archive route. `/teardowns` isn't renaming to `/knolling`: it's an archive of a format, not a synonym for the newsletter. The former working title survives as the tagline: *"taking things apart to see how they work"* (whether it holds is still open — not addressed in entry 013, no entry assigned yet). Each issue files under one pillar; `/teardowns` is its archive. Logs and takes are site-only content between issues — which also answers "what do I publish when a teardown isn't ready."

Cadence commitment: regular (target weekly-ish; the format doc governs the build-log series specifically).

## 7. Design direction

- One design system at the hub; each pillar gets an accent color within it, not its own identity.
- Workbench aesthetic over corporate polish: photos of real projects, sketches, honest numbers.
- Typography-first, fast, minimal chrome. The content is the design.
- Color palette and type pairing: decided and shipped in `src/styles/theme.css` (build log entry 007 ✓) — neutrals + one accent per pillar, Literata/Space Mono/Archivo. Not open questions; already live on every page.
- Favicon shipped (build log entry 012 ✓): the "knolling grid" mark — four squares, one workshop-gold accent, light/dark aware. Spec: `docs/05-favicon-marks.md`.
- Wordmark lockups shipped (entries 013 ✓, 014 ✓): `public/brand/wordmark-zackglaser.svg` (site) and `public/brand/wordmark-knolling.svg` (newsletter), both light/dark aware. Mark B shipped too (`public/brand/mark-knolling.svg`), plus rasters for the Buttondown account (`knolling-avatar.png`, `knolling-header.png`) now that it exists — `buttondown.com/knolling`.

## 8. Technical requirements

- Static-first with SSR available. Stack: **Astro** (content collections map 1:1 to pillars). Decided in build log entry 004.
- Newsletter platform: **Buttondown**, name: **Knolling** (both decided 2026-07-26; build log entry 011 ✓). Account created and `buttondown.com/knolling` secured 2026-07-26 (entry 014 ✓). Subscribe forms wired site-wide 2026-07-27 (entry 015 ✓), tagged by signup source for the crossover metric (§10). Markdown-native with a full REST API, so issues live as markdown in the repo and `/teardowns` on our own domain is the archive — one source of truth. Checks every requirement (custom domain, API, archives, tagging), starts free/$9-a-month at this list size, and subscriber export is trivial so there's no lock-in. Kit and beehiiv optimize for commerce and ad-driven growth respectively — both non-goals (§3).
- Analytics: privacy-friendly (Plausible/Fathom-class), watch pillar crossover specifically.
- **Members-area future-proofing**: no v1 build, but stack must not preclude gated content. Astro SSR + middleware + drop-in auth (Clerk/Auth.js/Supabase) covers gated archives and course-style content. If members ever means an interactive app (dashboards, UGC), stand up a separate app — that's the legitimate use of a subdomain.
- Booking form on /speaking must notify immediately (email at minimum). Zero friction: no accounts, no multi-step.
- **AI-first, out loud** (decided 2026-07-26; build log entry 009): `authorship` field enforced in the content config and provenance stamp component shipped in entry 010 ✓. `Co-Authored-By` trailers on bot commits already in place (every commit since entry 001). Colophon page still pending — the public repo doubles as the disclosure audit trail once it lands. Full spec: `docs/04-ai-first.md`.
- **GitHub on-ramp** (decided 2026-07-26; build log entry 006): the repo goes public and the site itself teaches GitHub to attorneys — footer links to source and commit history, comments via giscus (GitHub Discussions), and a "suggest an edit" link on every post that walks readers into their first pull request. Full spec: `docs/03-github-onramp.md`. Note the accepted tradeoff: `status: draft` posts are visible in the public repo.

## 9. Positioning guardrail

Zack is Legal Tech Advisor at Lawyerist/Affinity and host of the Lawyerist Podcast. The personal site complements, never competes: it links out to Lawyerist work and doesn't replicate its content categories.

**The /speaking line (resolved 2026-07-27):** the badge is worn openly. The Lawyerist/Affinity title and podcast hosting are the page's core credential — hero-level, not bio-buried (the v2 mockup's stance, now confirmed). The page books **speaking and podcast appearances only**; consulting inquiries are explicitly referred to Affinity with a visible line and link, never absorbed here. That referral *is* the complement-not-compete mechanism: the page sends business toward the firm, not around it.

**What the page proves (decided 2026-07-27):** not that Zack is *a* speaker but an *effective* one — holds large rooms, works small ones, funny, engaging, makes hard technical things simple. Never asserted in copy; proven four ways:

1. **Clips first.** Three curated podcast excerpts, high on the page, directly under the hero (expanded from two — decided 2026-07-27): a complex thing made simple, an original idea landing live, and candor/depth. No clip is specifically "the funny one" — Zack's read is that his humor comes through regardless of clip topic, so it isn't force-assigned to a slot. Locked picks and timestamps live in `docs/06-speaking-page-copy.md`. A stage-video slot is designed in for when real talk footage exists.
2. **The page performs the skill.** A written mini-teardown (~100 words) of one genuinely gnarly concept, styled as its own section — the free sample. The page demos the product instead of describing it.
3. **Reaction-specific testimonials.** Quotes about what the *room* did ("kept a 4pm ethics slot laughing"), not generic praise. 2–3 to be requested before ship; section ships only when real quotes land.
4. **Range in the metadata.** Each ticket carries room size (`room: 400` / `room: 14`) — large-room/intimate-setting claim made by the data, never the copy.

Concept decisions made with the line:

- "Show, don't tell" holds, but the ticket-wall unit widens from *stage talk* to **room held**: Lawyerist Podcast hosting is the flagship ticket (episode count as the number), joined by guest spots, webinars, CLEs, and panels. Real proof only — no faking, per the site's standing rule (entry 010). The wall closes with an empty "your event here" ticket linking to the booking form.
- **Humor dial: one or two winks.** Copy stays professional with exactly two dry lines: the empty "your event here" ticket, and the sample teardown's closer ("Now imagine forty-five minutes and a slide clicker"). Forms stay straight. The page must never *say* it isn't boring. Drafted copy lives in `docs/06-speaking-page-copy.md`.
- The page carries the **legal-tech accent**, matching its `/legal-tech/speaking` path (§7's one-accent-per-pillar rule).
- Topic cards: the v2 mockup's titles stay as the working set, pending a pass to confirm which are real deliverable talks.

Remaining before ship: clip selection from the podcast archive; the written sample teardown; testimonial requests out to 2–3 people; and the page should be coordinated with (or at least not surprise) the team.

## 10. Success metrics

- Visibility proof points landed per quarter (primary): speaking engagements, press mentions, podcast appearances — the direct measure of "visibility as an expert," not a proxy like follower counts or raw traffic.
- Newsletter subscribers and open rate; % of subscribers who engage with 2+ pillars (the crossover bet).
- Publishing streak — issues shipped on cadence.
- Speaking/consulting inquiries per quarter via the site (secondary — still worth tracking, but a lagging indicator now that credibility, not conversion, is the goal).

## 11. Roadmap

| Phase | Scope | Exit criteria |
|-------|-------|---------------|
| 0. Foundation (now) | Briefs, build log running, decisions logged | This doc + entries 001–002 ✓ |
| 1. Decisions | Stack (004) ✓, taxonomy (005) ✓, GitHub on-ramp (006) ✓, AI-first (009) ✓, newsletter name/platform (011) ✓, favicon (012) ✓, brand basics (013) ✓ | Each is a build log entry |
| 2. Build | Hub ✓, pillar pages ✓, post pages ✓, /now ✓, /about ✓, newsletter wired up ✓, GitHub on-ramp rungs 1+3 ✓ (docs/03; rung 2 waits on giscus App install), OG images ✓, /speaking | Site deployable; speaking page reviewed against §9; repo public with comments + edit links live |
| 3. Launch | Publish build-log series retroactively, announce, first newsletter issue | Live + issue 001 sent |
| 4. Habit | Weekly-ish issues, quarterly review of metrics (§10) | 12 consecutive issues |

## 12. Open questions

- ~~Affinity/Lawyerist positioning line~~ — resolved 2026-07-27 (§9): badge worn openly; page books speaking + podcasts only; consulting referred to Affinity. Ticket unit = "room held." Legal-tech accent.
- ~~Newsletter name~~ — resolved 2026-07-26: **Knolling** (§6, entry 011). *Taking Things Apart* demoted to working tagline.
- ~~Section naming~~ — resolved 2026-07-26 (entry 013): "workshop" and "field notes" keep their display names as-is. Both already read as subjects alongside "legal tech" and "running" in the nav/footer lists.
- ~~Colophon slug~~ — resolved 2026-07-26 (entry 013): `/how-this-site-is-made`, not "colophon." Already the live link in `AuthorshipStamp.astro`; matches the teaching-voice brand (§2).
- Whether one rotating newsletter retains single-pillar subscribers — the bet to watch in metrics.
