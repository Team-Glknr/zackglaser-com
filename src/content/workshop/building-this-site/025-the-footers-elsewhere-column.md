---
title: "The footer's elsewhere column, for real"
date: 2026-07-28
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, rss, footer]
---

## What's on the bench

Three dead links in the footer's "elsewhere" column — podcast, rss, email — sitting as `href="#"` since the nav/footer chrome first shipped.

## The decision

The Lawyerist Podcast link now points at `lawyerist.com/podcast`. A real `/rss.xml` feed exists, built with Astro's official `@astrojs/rss` package. And rather than a standalone email link, that slot became LinkedIn and GitHub profile links instead.

## How I took it apart

RSS needed actually building, not just linking — the first real feed on this site. Each item carries title, link, `pubDate`, and categories, plus a description that reuses `postMetaCrossPillar()` — the same short meta line ("legal tech · teardown") already doing this job on the Hub's latest-posts grid. Considered shipping full post content in the feed instead of a meta line, but the schema has no excerpt field to draw a summary from, and full-content RSS in Astro means rendering content through the experimental container API — more machinery than a personal site's feed needs right now. A reader who wants the whole post clicks through.

The email link took a detour before it became LinkedIn and GitHub. First instinct was a dedicated contact page. Caught it with one question before building anything: does this site need a contact surface at all, given `/speaking` already ships a real booking form for the actual "reach out about work" case? It didn't. A public `mailto:` would have been a second contact surface doing a smaller version of a job the site already does properly elsewhere, plus the standing spam-scraper exposure every public email address picks up. Pointing the same footer slot at real LinkedIn and GitHub profiles costs nothing and matches how people already expect to reach someone.

## What I got wrong (or don't know yet)

Whether the feed should ever carry full content instead of a meta line is still open — revisit if an actual reader asks for it, not before.

## Next up

Real assets for `/speaking` aside, Build is down to one tabled item — "a game as a front door" — before Launch.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
