---
title: "Splitting the labor: score, then Claude"
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [python, anthropic-api, architecture]
---

## What's on the bench

The pipeline that turns a Downloads folder into ten ranked, reasoned-about candidates every morning.

## The decision

Structure and semantics are different jobs. A plain scoring algorithm handles structure — age, duplicates, junk filename patterns. Claude handles semantics — reading a filename and explaining, in a sentence, why it's a red flag.

## How I took it apart

Everything runs locally: Python 3, standard library only, a local HTTP server on `localhost:5757`, launchd firing the whole thing at 8am, macOS Trash (via AppleScript, recoverable) instead of permanent deletion. Only filename, size, age, and type ever leave the machine, sent to the Anthropic API per file — never file contents.

Before Claude sees anything, a scoring pass ranks every file 0–100 on cheap structural signals: an exact SHA-256 duplicate match is worth 50 points, a junk filename pattern (`.dmg`, `Screenshot`, `Untitled`, a stray `(1)` or `copy`) is 20, age past 180 days is another 20, 90–180 days is 10, and anything under 100 KB adds 5. The top ten (adjustable) surface in the UI.

That algorithm could have been the whole product — sort by score, done. The reason it isn't: a score can tell you a file is *probably* junk, but it can't tell you *why* in a way that's useful for judgment. Claude is genuinely better at filename semantics than a scoring table — it can look at `FINAL-v2-USE THIS.pdf` or `Untitled-3 copy.docx` and articulate the actual tell (working copies almost never get reopened after the version they were tracking ships). That reasoning changes how a recommendation lands versus a bare number. So the algorithm does the structural pre-filter, and Claude does the one to two sentences of judgment on top of it — one API call per file, not one call to rank the whole folder.

## What I got wrong (or don't know yet)

I haven't stress-tested the scoring weights against a folder that's actually been left to rot for a year rather than the relatively tame one I built this against — it's possible the age and duplicate thresholds need retuning once there's more real data.

## Next up

Why this is a local web app with a game framing, not a terminal script.

**Costs so far:** ~15 min (of a 30 min build) / Anthropic API usage, pay-as-you-go
