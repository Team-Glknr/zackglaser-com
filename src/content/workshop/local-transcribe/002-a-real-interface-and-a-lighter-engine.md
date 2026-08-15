---
title: A real interface, and a lighter engine
date: 2026-08-15
status: published
pillar: workshop
format: log
series: local-transcribe
authorship: duet
tags: [whisper, transcription, legal-tech, fastapi]
---

## What's on the bench

Turning the Automator droplet and its alert-dialog "UI" into something with a real interface, and deciding what — if anything — changes underneath it.

## The decision

A local web app: a small FastAPI backend, a single plain HTML/JS page as the frontend, no build step. Drop a file in the browser, watch real progress, review and edit the transcript before it saves. Underneath, swap OpenAI's Whisper for faster-whisper.

## How I took it apart

The UI question came down to three real options: a native macOS app, an Electron app, or a local web app served from a small Python backend. Native gets the most polished feel but is Mac-only and a heavier maintenance surface for something meant to be cloned by other people, most of whom aren't going to want to compile a Swift project. Electron is cross-platform and would look more like a "real app," but the dependency footprint is enormous for what this actually needs to do. A local web app won on friction: anyone who clones this repo already has Python, and `pip install -r requirements.txt && python app.py` is a bar almost anyone can clear, including a lawyer with no interest in touching a terminal more than once.

The engine question had a wrinkle worth being precise about: none of the three candidates (openai-whisper, faster-whisper, whisper.cpp) differ at all in privacy — all three run entirely offline once the model weights are downloaded, and none of them ever send audio anywhere. The actual trade-off is dependency footprint and auditability versus build effort. openai-whisper drags in the whole of PyTorch. whisper.cpp has no Python dependency at all and the smallest possible trust surface — the strongest "audit this yourself" story for exactly the audience this tool is for — but it means packaging a compiled binary and calling it as a subprocess instead of a plain `pip install`. faster-whisper landed in the middle: a CTranslate2 reimplementation, much lighter than full PyTorch, same accuracy, still just `pip install faster-whisper`. That's the right trade for this pass — whisper.cpp stays a real option for later if the audit story turns out to matter enough to justify the extra packaging work.

Progress feedback turned out to be simple once the engine choice was made: faster-whisper's `transcribe()` returns a lazy generator of segments rather than a single blocking call, and each segment carries its own end timestamp. Comparing that against the audio's total duration gives real, if coarse, progress — no need for anything more elaborate. The editable transcript was just a matter of not writing the file to disk automatically: hold the result in memory, render it in a textarea, only write to `~/Documents/Transcripts` when the user clicks save. Two features explicitly stayed out of scope for this pass — a model-size/output-format picker and a multi-file batch queue view — both still hardcoded or sequential, both fine to add later without touching the architecture just built.

## What I got wrong (or don't know yet)

The progress percentage is coarse — it's driven by segment end-time versus total duration, not by anything faster-whisper reports directly, so it can jump unevenly rather than climbing smoothly. I also don't yet know how the `medium` model's speed holds up on a longer, real recording rather than the few-second synthesized test clips used to verify the pipeline end-to-end today.

## Next up

Publishing this to `github.com/thirdth/local-transcribe`, and deciding whether to retire the original Automator droplet once the new app is in daily use.

**Costs so far:** $0 — faster-whisper, FastAPI, and ffmpeg are all free; time not yet tracked
