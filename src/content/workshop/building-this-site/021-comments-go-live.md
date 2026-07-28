---
title: "Comments go live: rung 2 of the GitHub on-ramp, closed"
date: 2026-07-27
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [github, on-ramp, giscus]
---

## What's on the bench

The one piece entry 018 left dangling: rung 2 of the GitHub on-ramp. `Comments.astro` was built to spec and sitting unmounted, waiting on two browser-only steps only the account owner could do.

## The decision

Both steps are done — the giscus GitHub App is installed on `thirdth/zackglaser-com`, and a `Comments` Discussion category (type Announcement) exists. `Comments.astro` is mounted in the post layout with the real `repo-id`/`category-id`. The on-ramp is fully shipped: all three rungs live.

## How I took it apart

Entry 018 already established why the install and the category couldn't be scripted — one's an OAuth consent screen, the other has no API mutation. Both happened this session, in the browser, by the account owner. What was still open was how to get the two IDs `Comments.astro` needed.

Docs/03's plan routed that through giscus.app's config generator — paste in the repo, get back a script tag with `data-repo-id` and `data-category-id` baked in. But those two values are just GitHub's own GraphQL node IDs for the repo and the category, and both objects already existed once the install and the category were done. Queried them directly — `repository.id` for the repo, `repository.discussionCategories.nodes` filtered to the one named `Comments` — and skipped giscus.app's form entirely. One fewer browser hop, and no risk of a screenshot-relayed typo in a 40-character ID.

Mounting was the easy part: `<Comments repoId="..." categoryId="..." />` below the post body in `[...id].astro`, per docs/03 §5.2. The harder part was verifying it without actually publishing anything early — every post is still `status: draft` pre-launch, and `[...id].astro`'s `getStaticPaths` filters drafts out, so a normal build produces zero post pages to inspect. Flipped one entry (014) to `published`, ran a real build, grepped the output HTML for the giscus `<script>` tag, confirmed both IDs matched what the API returned, then flipped 014 back to draft. The component compiles and renders correctly; whether giscus itself accepts the pairing is still unverified — that needs a live URL, which doesn't exist until this deploys.

## What I got wrong (or don't know yet)

Two things stay true even with the on-ramp closed. First, category creation is still not scriptable — confirmed again, no GraphQL mutation exists for Discussion categories — so if this site ever needs a second comment-bearing category, that's a human clicking through the UI again, not something either of us can automate. Second, the build-time check proves the HTML is correct but not that giscus resolves it — the actual comment widget only talks to GitHub once it's loaded on the real, deployed `zackglaser.com` URL the mapping is keyed to. First real post to publish is the real test.

## Next up

Nothing left in Build but the two tabled items — `/speaking` and the game-front-door prototypes — before Launch.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
