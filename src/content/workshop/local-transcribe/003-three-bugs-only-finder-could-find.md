---
title: Three bugs only Finder could find
date: 2026-08-15
status: published
pillar: workshop
format: log
series: local-transcribe
authorship: duet
tags: [whisper, transcription, legal-tech, macos, packaging]
---

## What's on the bench

Making the app actually launchable the way a lawyer would use it: double-click an icon, get a browser tab. Not "run a command in a terminal."

## The decision

Build the same kind of double-clickable `.app` wrapper `morning-report` already uses, and chase every real launch failure down with actual evidence — logs, process checks, `spctl` output — instead of guessing at fixes.

## How I took it apart

Three separate bugs turned up, and every one of them was invisible from a terminal and only surfaced on a real double-click, which is exactly the gap that matters here: "it works when I test it" and "it works the way the actual user will run it" turned out to be two different claims.

First: an architecture crash. `pydantic_core`'s compiled extension is arm64-only, and it loaded fine every time I ran the script directly from my shell — but Finder/LaunchServices was launching the same bundle translated through Rosetta (x86_64), so the identical code crashed on an architecture mismatch only when double-clicked. A direct shell exec just inherits the terminal's native architecture; LaunchServices doesn't necessarily make the same choice for a faceless, unsigned app. Fixed by detecting the native architecture at install time and pinning the launcher to it explicitly with `arch`.

Second: Finder's "The application is not open anymore" dialog, with zero corresponding entries in the launch log — meaning the launcher script never even started running. That looked at first like a stale Dock reference, and removing/re-adding the Dock icon was a reasonable first guess, but it wasn't the actual cause: `codesign` showed the bundle wasn't signed at all, and this version of macOS refuses to execute a completely unsigned app via LaunchServices, full stop, independent of the quarantine flag or the usual right-click-to-open override. An ad-hoc signature (`codesign --sign -`, no Apple Developer account needed) was the actual fix.

Third, once it was finally launching: a plain `[Errno 2] No such file or directory: 'ffmpeg'` on the first real file drop. Homebrew's `ffmpeg` lives at `/opt/homebrew/bin`, which is on an interactive shell's `PATH` but not on the minimal `PATH` Finder hands a GUI-launched process — so every terminal-based test found it fine, and every real double-click couldn't. The old `transcribe.py` this project replaced had already worked around this exact problem, hardcoding the Homebrew path; the new app needed the same defensive lookup (`shutil.which` first, then a list of common install locations) rather than trusting a bare `"ffmpeg"` on `PATH`.

One more fix landed alongside these, lower stakes but same theme of "the terminal-tested version wasn't the real version": a video with no audio track produced a raw `ffmpeg` stderr dump in the UI instead of a plain "there's no audio here" message — not a bug, but not something a non-technical user should ever have to read.

## What I got wrong (or don't know yet)

Every one of these was a real launch-path bug that my own terminal-based testing had already given me false confidence about — three separate times in one session. I don't yet know whether there are more gaps of the same shape waiting on a machine I haven't tested on: an Intel Mac, or a completely clean clone with none of today's incremental fixes already in place.

## Next up

A license, publishing the repo to GitHub, and deciding whether to retire the original Automator droplet now that the replacement actually works end to end.

**Costs so far:** $0 — roughly 45 minutes of active debugging across two bursts, though the wall-clock gap between them (waiting on real-device testing) was closer to two hours
