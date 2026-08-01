---
title: Matching the house style
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [design-system, visual-design]
---

## What's on the bench

The look of a purely local, personal tool that only I will ever open.

## The decision

Style it to match zackglaser.com exactly, not a generic dark-mode default: `#111110` background, `#d4d4d0` text, SF Mono throughout, flat cards with no border-radius, bracket-style buttons, lowercase copy, and a header that reads `zackglaser / morning-report`.

## How I took it apart

Nobody else was ever going to see this app — it's a local tool with a UI only I open, once a day, on my own machine. That made it tempting to skip visual design entirely and ship whatever the default dark theme looked like. I didn't, on the theory that a personal tool should feel like it belongs to the same system as everything else I build, not like a separate throwaway project. If it opened in the browser looking like a generic dark-mode dashboard, I'd feel less ownership over it and use it less — the aesthetic is part of what makes it feel like *mine* rather than a script I happened to write.

Concretely that meant pulling the site's actual palette and type choices rather than approximating them, treating the score as data (`72/100`) instead of a colored badge that would editorialize the number before I'd read it, and keeping the bracket-button convention (`[ trash ]` `[ keep ]` `[ later ]` `[ config ]`) that shows up elsewhere in my own tools.

## What I got wrong (or don't know yet)

I eyeballed the palette and font from memory instead of pulling them from `src/styles/theme.css`, and it shows: the site's actual dark-mode tokens are `#161a1e` background on `#edf0f2` text, not the `#111110`/`#d4d4d0` I used, and the mono stack is **Space Mono**, not SF Mono. Close in spirit, wrong in the details — worth a pass to pull the real tokens instead of approximating them.

## Next up

Pulling the real tokens instead of approximating them — and while at it, letting the palette be overridden by hand, not just by the system.

**Costs so far:** ~5 min (of a 30 min build) / Anthropic API usage, pay-as-you-go
