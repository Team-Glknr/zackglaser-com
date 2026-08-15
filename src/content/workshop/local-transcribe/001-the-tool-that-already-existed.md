---
title: The tool that already existed
date: 2026-08-15
status: draft
pillar: workshop
format: log
series: local-transcribe
authorship: duet
tags: [whisper, transcription, legal-tech]
---

## What's on the bench

A personal transcription tool I'd already built and been using: `transcribe.py`, a Python script running OpenAI Whisper's `medium` model against video files, wrapped in a macOS Automator "droplet" app. Drag a video onto the app icon in the Dock, it extracts audio with `ffmpeg`, transcribes it locally, and writes a formatted `.txt` file to `~/Documents/Transcripts`.

## The decision

This entry is a backfill, not a real-time log — the tool above was already built and already in personal use before this project, or this series, existed. Rather than skip that context, it's worth one honest entry describing what was already there, since everything after this is a rebuild, not a build from zero.

## How I took it apart

The pipeline itself was already solid: `ffmpeg` for audio extraction, Whisper for the actual transcription, a formatting pass that groups the raw segments into timestamped paragraphs. What it never had was an interface. The only feedback loop was macOS alert dialogs and notifications — `display alert`, `display notification` — fired by an AppleScript that just shelled out to the Python script and waited. No progress indication during a transcription that can take several minutes. No way to see or fix a mistranscription without opening the output file separately afterward. No way to run it on anything but this Mac, since the whole invocation path runs through an Automator app and AppleScript's `do shell script`.

That gap is exactly the reason this is worth turning into a real project instead of leaving it as a personal script: the transcription engine was never the missing piece, the interface was. And a decent local transcription tool has a real audience beyond just me — recordings that come up in legal work are frequently privileged, and a tool that never uploads the video anywhere is a genuinely different privacy story than the cloud transcription services most people reach for by default.

## What I got wrong (or don't know yet)

I don't have a precise sense of how much time went into the original script, since it wasn't logged as it was built — which is itself the argument for keeping a real log from here forward. I also don't yet know how much of the original script survives the rebuild versus gets replaced outright.

## Next up

The actual rebuild decisions: a local web UI instead of the Automator droplet, and a swap from OpenAI's Whisper to faster-whisper.

**Costs so far:** $0 — the original script used only already-installed tools (ffmpeg, pip)
