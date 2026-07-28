---
title: "The GitHub on-ramp: going public"
date: 2026-07-26
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [github, version-control, community]
---

## What's on the bench

A big part of this site's job is introducing people — attorneys especially — to concepts worth knowing. The first concept on the bench isn't legal tech at all. It's GitHub.

## The decision

The repo is public, as of today. And the site is getting three features that quietly turn every reader into a GitHub user: a footer link to the source code and its full change history, comments that run on GitHub Discussions (via giscus), and a "suggest an edit" link on every post that walks a reader into their first pull request. The full spec lives in `docs/03-github-onramp.md` — which you can now go read, because that's the whole point.

## How I took it apart

I could write an explainer called "What Is GitHub and Why Should Lawyers Care." It would get skimmed, nodded at, and forgotten, because reading about version control teaches you version control the way reading about swimming teaches you swimming.

The alternative: make the site itself the demonstration. It already lives in a git repo on GitHub (entry 003). Keeping that repo private was throwing away the best teaching prop I own.

Here's the pitch in lawyer terms, because lawyers already believe in everything GitHub does — they just don't know this is where the rest of the world does it. A commit history is a redline trail. A pull request is a proposed edit circulated for review. Blame — terrible name, useful tool — answers "who changed this clause, when, and why." None of these are new ideas to anyone who's negotiated a contract. What's new is software that does them well.

So the three features are really a ladder, ordered by commitment. Rung one costs nothing: click the footer link and look at every change ever made to this site, including the dead ends. Rung two costs an account: comments run on giscus, which uses GitHub Discussions as its backend, so leaving a comment means creating a GitHub account first. That's usually listed as giscus's downside. Here it's the feature — a low-stakes reason to get past the signup screen. (Giscus beat utterances, the other contender, on maintenance activity and on using Discussions instead of cluttering the Issues tab.) Rung three is the sneaky one: "suggest an edit" opens the post's source file in GitHub's web editor, and when a reader without write access saves their fix, GitHub itself walks them through fork, branch, and pull request. They come out the other side having done the thing, vocabulary optional.

Going public took one pre-flight check: making sure no secrets ever touched the history. They hadn't — the `.env` files were gitignored from the first commit. Then it was one toggle in the repo settings.

## What I got wrong (or don't know yet)

Two things. First, `status: draft` hides posts from the site but not from a public repo — so if you're reading this in the repo before launch, hello, you've found the workshop with the lights on. I've decided that's on-brand rather than embarrassing, but I decided it after the fact, which is worth admitting. Second, the ladder is a theory. I genuinely don't know whether any attorney will climb past rung one, and I won't know until someone submits a pull request fixing my typos. If you're that person: the typos are in there, and I left the door unlocked on purpose.

## Next up

Turning the design system into real code, starting with the shared chrome and the Hub.

**Costs so far:** $12/yr / about an hour (planning and a settings toggle — the components ship with the Phase 2 build)
