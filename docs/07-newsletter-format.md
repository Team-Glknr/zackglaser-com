# Knolling — newsletter issue operating manual

This doc is private; the issues are public. Issues live in `src/content/newsletter/`.

## Premise

One issue, one thing taken apart. The subject rotates across all four pillars — a piece of legal software, a training block, a workbench build, an idea; the method never does. Every issue is written in the `teardown` format (see `docs/01-site-brief.md` §6 on the pillar/format axes).

## Where it publishes

- Archive: `/newsletter`
- Individual issues: `/newsletter/{id}` (e.g. `/newsletter/002-some-slug`)
- Issues are numbered `001-`, `002-`, etc., matching the `newsletter` front-matter field. The field, not the filename, drives archive order — but keep them in sync so nobody has to check both.

## Front matter

Uses the site-wide post schema (`src/content.config.ts`), extended with a required `newsletter` number:

```yaml
---
title: "Issue title"
date: 2026-XX-XX
status: draft        # draft | published — draft stays off /newsletter and the Hub
pillar: field-notes   # legal-tech | running | workshop | field-notes — whichever this issue is actually about
format: teardown      # every issue is a teardown; not optional
newsletter: 2         # issue number, sequential
authorship: human     # human | duet | bot — see docs/04-ai-first.md §3
tags: []
---
```

Body is plain markdown — no fixed section structure like the build log entries have. Link out to real, already-published site content when relevant; don't restate it.

## Authoring workflow

1. Create your own branch off `main` for the issue (e.g. `newsletter/002-draft`) — don't reuse a Claude Code session's working branch, since those get rebased/force-pushed as their PRs merge.
2. Draft and commit as you go, `status: draft`. Drafts don't render anywhere public — same convention the build log used pre-launch.
3. Flip to `status: published` when it's ready to ship, and merge.

## Rules of thumb (from issue 001)

- One idea per issue, not a survey of several.
- 500–1000 words has been the working range so far — long enough to land one real point, short enough not to overstay.
- If the issue leans on other site content, link to it once and characterize it in a sentence — don't re-summarize the whole thing.
