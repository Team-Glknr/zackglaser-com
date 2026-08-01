---
title: "A reference, not a release"
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [github, open-source, documentation]
---

## What's on the bench

Getting the code somewhere other than my own machine — a public GitHub repo, and what it needs to say about itself once it's there.

## The decision

Publish it to `github.com/thirdth/morning-report` — public, the same account the site itself lives under — and frame it explicitly as a reference to fork, not a plug-and-play download.

## How I took it apart

Before staging anything, checked for secrets: the Anthropic API key lives in `~/.morning_report_config.json`, outside the repo directory entirely, so it was never at risk of getting committed. Added a `.gitignore` for the two local log files `launchd` writes.

The harder part was being honest about portability. This app only runs on macOS — file deletion goes through the Trash via AppleScript, the daily trigger is a `launchd` plist, the installer builds a native `.app` with `iconutil` — none of which exists anywhere else. Saying that once in a README wasn't enough on its own, though: the checked-in `launchd` plist still had my real username hardcoded in three places, which quietly contradicted the "this is a reference" framing by looking like a working file instead of a template. Swapped it for a `YOUR_USERNAME` placeholder instead, so the repo can't be run as-is without the edit the README already describes.

## What I got wrong (or don't know yet)

Writing the setup steps, I said `install_app.sh` installs the `launchd` job. It doesn't — I'd conflated the app-bundle installer with the daily-trigger setup, and a grep for `launchctl`/`LaunchAgents` in the script came back empty. Corrected the README to describe the actual manual step (copy the plist, `launchctl load` it) and marked it optional, since the app runs fine launched by hand.

## Next up

Nothing queued — the repo's public and accurate. Whatever's next comes from actually using the thing daily.

**Costs so far:** ~4 min / Anthropic API usage, pay-as-you-go
