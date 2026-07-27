---
title: "Individual post pages, and the provenance stamp"
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, ai, authorship]
---

## What's on the bench

The last dead link on the site: every post URL the Hub and pillar pages generate has pointed nowhere until now. Also on the bench, because it turned out to belong here: shipping the `authorship` field and provenance stamp from entry 009.

## The decision

One catch-all route, `src/pages/[...id].astro`, generating a page per published post at whatever URL its content ID actually is — plus `authorship: z.enum(['human', 'duet', 'bot'])` added to the schema, backfilled on all nine existing entries, and a stamp component rendered near the byline.

## How I took it apart

Before writing the route I checked what Astro's content layer actually calls a post's `id`, instead of assuming. Good thing — it's the *full* path relative to the collection base, not just the filename. A build-log entry at `workshop/building-this-site/001-why-im-building-this.md` gets the id `workshop/building-this-site/001-why-im-building-this`, not `001-why-im-building-this`. That meant the links I'd already written on the Hub and pillar pages (`/${pillar}/${post.id}`) were quietly broken — they'd have produced `/workshop/workshop/building-this-site/...`, doubling the pillar segment. Nothing caught it because every post is still a draft, so those links have never actually rendered yet.

The fix was to trust the id instead of reconstructing it: link to `/${post.id}` directly. That turned out to be the better decision anyway, not just the correct one — a flat pillar post gets a clean two-segment URL (`/legal-tech/some-post`), and a series post like the build log gets the three-segment URL the brief already specified (`/workshop/building-this-site/...`), with no special-casing anywhere. The directory structure was already encoding the URL; I just had to stop overriding it.

A top-level rest route (`[...id].astro`) rather than nesting under `[pillar]/` was the other real choice — post depth varies (flat for most pillars, one level deeper for anything in a series), and a single catch-all handles both without caring which shape it's looking at.

The authorship work rode along because docs/04-ai-first.md's own checklist bundles the schema field and the stamp component together as "the post layout" — building the layout without the stamp would mean redoing this same file in a week. Making `authorship` required (not optional) matched the spec's "every post declares its authorship" language, which meant backfilling all nine existing entries with `authorship: duet` before the build would pass at all — a good forcing function, since it meant nothing could go out undeclared by construction rather than by discipline.

One more real bug, caught only because I was building the actual rendering path instead of reading markdown as prose: every existing entry had a `# Title` line at the top of its body, left over from before there was a pipeline that pulled `title` from front matter into its own styled `<h1>`. Rendered as written, every post would have shown its title twice. Stripped the redundant line from all nine files and updated the format doc's template so future entries don't reintroduce it.

## What I got wrong (or don't know yet)

Two things visibly missing that I didn't try to fake: comments (giscus) and a hero image. Neither exists yet in the schema or the mockup this page is built from — comments ship with the rest of the GitHub on-ramp (entry 006's spec, still unimplemented), and there's no image field to render honestly until one exists. The provenance stamp also links to `/how-this-site-is-made`, which doesn't exist yet either — same forward-linking pattern as `/now` and `/speaking` elsewhere on the site, betting the destination gets built before anyone actually clicks.

## Next up

Naming the newsletter.

**Costs so far:** $12/yr / __ hours
