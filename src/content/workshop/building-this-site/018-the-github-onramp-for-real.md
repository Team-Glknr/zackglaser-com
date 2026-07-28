---
title: "The GitHub on-ramp, for real"
date: 2026-07-27
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [github, on-ramp, giscus]
---

## What's on the bench

Turning docs/03's fully-specified plan — three rungs, from "click a link" to "open a pull request" — into actual code, ten months after entry 006 wrote up the decision.

## The decision

Rung 1 (footer: read the source, see every change) and rung 3 (suggest-an-edit links on every post) are live. Rung 2 (giscus comments) is built as a real component but not mounted anywhere yet — it needs two things only the account owner can do.

## How I took it apart

First surprise: the repo was already public. Docs/03's own prerequisite list assumed that was still an open step; it wasn't. Still worth re-running the secrets check it calls for rather than trusting a ten-month-old pre-flight — `git log --all -p -- .env*` across all 12 commits now, versus 3 at the original check. Still clean.

Enabling Discussions was one API call, but I checked before making it — it's a small, reversible change, but it's still a live setting on a real public repo, and this session has held that line consistently: mechanical and reversible doesn't mean unilateral. Everything past that point genuinely isn't scriptable. Installing the giscus GitHub App is an OAuth consent screen that only the repo owner can click through; generating the embed config happens on a web form at giscus.app that outputs a `repo-id` and `category-id` I have no way to retrieve myself. I built `Comments.astro` to spec anyway, with `repoId`/`categoryId` as required props and no defaults — the component is ready the moment those two values exist, but it isn't mounted in the post layout yet. The alternative — shipping it with literal placeholder text as the data attributes — would have meant an actually-broken third-party embed visible to every reader, which is a worse failure mode than a page simply not having comments yet.

The edit link needed one thing verified before I trusted it: docs/03 says Astro content entries expose `entry.filePath`, but doesn't say in what form. Checked empirically rather than assumed — it's already repo-relative (`src/content/workshop/building-this-site/...`), which meant the GitHub edit URL was one string template, no path manipulation needed.

The bug worth remembering: the footer's GitHub line looked correct in the source — a sentence broken across multiple lines with links in between, indented for readability, the way I've written every other multi-link paragraph on this site. It rendered as "read the source ↗orsee every change ever made to it ↗" — no spaces around either link. Astro's template compiler strips whitespace-only text nodes that fall on their own line between elements; it doesn't preserve them as a single space the way a browser parsing raw HTML would. I only caught it because I screenshot the rendered footer instead of trusting the source formatting — the same discipline that caught the rasterizer bug in entry 014, aimed at a completely different kind of rendering. Fixed with explicit `{" "}` expressions everywhere a line break sits between inline elements.

## What I got wrong (or don't know yet)

A reader visiting today sees the footer line and the edit links working, and no comments section at all — not a broken one, just absent. That's the honest state, but it means rung 2 will sit half-finished until the giscus setup actually happens, and nothing on the site will remind anyone that it's pending except this entry and docs/03's own status table.

## Next up

Whatever's next now that the roadmap's Build phase has only two things left: `/speaking` (tabled, deep work in progress) and finishing rung 2 once the giscus App is installed.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
