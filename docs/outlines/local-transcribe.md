# Outline: "local-transcribe" (workshop project)

Planning doc for `src/content/workshop-projects/local-transcribe.md` and its
entries in `src/content/workshop/local-transcribe/` — not rendered by the
site, kept here as the working brief. Second hardware-adjacent-but-really-
software project; unlike `old-laptop-llm-box` this one's code lives in its
own repo (`~/local-transcribe`, → `github.com/thirdth/local-transcribe`),
same pattern as `morning-report`.

## Premise

A local web app that transcribes video files entirely on-machine — no
cloud upload, no API key, no subscription. Direct benefit to lawyers
specifically: depositions, client calls, and witness interviews are often
privileged, and cloud transcription means handing that recording to a
third party. This doesn't.

## Starting point (not built from scratch)

There was already a working tool before this project started: `~/Scripts/transcribe.py`
(OpenAI Whisper, `medium` model, English hardcoded) wrapped in an Automator
"droplet" app (`~/Applications/Transcribe.app`) — drag video files onto the
app icon, an AppleScript shells out to the Python script, macOS alert
dialogs are the only UI. No progress indication, no preview, no editing.

This means entry 001 is a **backfill**, not a real-time log — it describes
a tool that already existed and had already been in personal use, written
after the fact rather than as the decision happened. Flagged plainly in the
entry itself per the house rule (`docs/02-build-log-format.md`: "fresh
reasoning beats reconstructed reasoning") — this is the one legitimate
exception, describing a baseline rather than reconstructing a decision.

## Decisions made 2026-08-15 (session start)

- **UI target: local web app**, not a native macOS app or Electron. FastAPI
  backend + plain HTML/JS/CSS frontend, no build step, no node_modules —
  lowest friction for a non-technical lawyer to clone and run.
- **Engine swap: openai-whisper → faster-whisper.** All three candidates
  (openai-whisper, faster-whisper, whisper.cpp) are equally private — the
  real trade-off was auditability/dependency footprint vs. build effort, not
  data handling. faster-whisper picked as the middle ground: lighter than
  full PyTorch, still a plain `pip install`, no compiled-binary packaging
  work. whisper.cpp's smaller trust surface (no Python/PyTorch at all) was
  considered and set aside as a possible future entry, not a day-one need.
- **Feature scope for this pass:** real progress feedback (per-segment,
  streamed from faster-whisper's segment duration against total audio
  duration) and an editable transcript preview before saving. Explicitly
  deferred: model-size/output-format picker, multi-file batch queue UI —
  both still hardcoded/sequential for now.
- **Name: `local-transcribe`.**
- **Unlike `morning-report`, this one is meant to actually be cloned and
  run**, not just read as a reference — so real `requirements.txt`, a real
  setup section in the README, and no macOS-only shortcuts in the core
  pipeline (ffmpeg + faster-whisper both run cross-platform; the only
  macOS-specific thing being replaced, the Automator droplet, is exactly
  what's being torn out).

## Verified this session

Built `app.py` (FastAPI, threaded transcription jobs, `/upload` `/status/{id}`
`/save/{id}`) and `static/index.html` (drag-drop, live progress bar,
editable transcript, save button). Tested end-to-end through the actual
browser UI (Playwright) with a synthesized speech clip (`say` + `ffmpeg`):
upload → extract → transcribe → progress reaches 100 → transcript renders
correctly → edit → save → confirms real output path. Committed as the first
commit in `~/local-transcribe`.

## Entry map

- 001 — Backfill: the tool that already existed (transcribe.py + Automator
  droplet), what it did, what it lacked
- 002 — The rebuild decisions: web UI over native, faster-whisper swap,
  progress + editable-preview scope (covers this session's actual build)
- (future) — Publishing to GitHub, README/setup polish, retiring the old
  droplet
- (future, maybe) — whisper.cpp swap if the audit-story matters enough to
  justify the packaging work

## Open items

- [ ] Create `github.com/thirdth/local-transcribe` and push (not done yet —
      confirm with Zack before making anything public)
- [ ] Decide whether to retire `~/Applications/Transcribe.app` and
      `~/Scripts/transcribe.py` once the new app is in daily use
- [ ] License file (morning-report has none either — decide once, reuse)
