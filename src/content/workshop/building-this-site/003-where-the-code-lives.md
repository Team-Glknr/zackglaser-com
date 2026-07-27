---
title: "Where the code lives"
date: 2026-07-26
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [tooling, version-control]
---

## What's on the bench

Before any framework gets chosen, the project needs a home: a git repository, and a place on GitHub to push it.

## The decision

Git repo, initialized locally, pushed to a private GitHub repo — but not under my usual GitHub login. It lives under a separate personal account, `thirdth`, that isn't tied to Affinity/Lawyerist.

## How I took it apart

This was supposed to be a non-decision. `git init`, `gh repo create`, done — five minutes, move on to the actual interesting choices. It almost was, except for one snag: my default `gh` login is the account I use for Affinity/Lawyerist work, and pushing a personal-brand project there felt wrong the moment I noticed it.

Nobody would have objected. But the whole premise of this site (brief §1) is a home base that outlives any employer or platform. Hosting the code for that home base under a work-linked account undercuts the point before a single piece of content ships. Small decision, but it's the same instinct as the rest of the brief applied one level down the stack — even the plumbing should agree with the premise.

So: a second GitHub account, logged in separately via `gh auth login` with the device-code flow — copy a one-time code, open a browser, confirm. `gh` now juggles two identities on one machine, and whichever one is "active" is the one that creates repos and pushes commits.

What's actually in the repo right now: the docs (brief, this format guide), the front-matter schema, three build-log entries including this one, and a handful of `.gitkeep` placeholders marking the content collections that don't have posts yet. No framework installed. That's next.

## What I got wrong (or don't know yet)

I don't have a habit yet for keeping two GitHub accounts straight. `gh auth switch` exists for exactly this, but I haven't tested what happens the first time I forget to check which account is active before running a command that creates or pushes something. I'll find out, probably the hard way, and probably soon.

## Next up

Choosing the stack: Astro vs. Next, and the members-area question.

**Costs so far:** $12/yr / __ hours (fill in — didn't clock this session)
