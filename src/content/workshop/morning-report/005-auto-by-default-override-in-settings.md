---
title: "Auto by default, override in settings"
date: 2026-08-01
status: published
pillar: workshop
format: log
series: morning-report
authorship: duet
tags: [design-system, theming, css]
---

## What's on the bench

The app's color handling, revisited after entry 004 caught that its "matches the site" palette didn't actually match the site's real tokens.

## The decision

Pull the real light and dark tokens from `theme.css` and switch automatically with `prefers-color-scheme`. Then, on request, add a manual `auto` / `light` / `dark` selector in settings that can override the system setting.

## How I took it apart

The mapping was mostly mechanical: the site's `--color-paper` / `--color-raised` / `--color-ink` / `--color-ink-soft` / `--color-line` / `--color-error` became the app's `--bg` / `--surface` / `--text` / `--muted` / `--border` / `--danger`, in both light and dark, and SF Mono got swapped for Space Mono via the same Google Fonts request the site uses (with the old fallback stack kept behind it in case the font fails to load). The one gap: the site has no success/green token, only an error one, so `--safe` reuses the field-notes pillar green rather than inventing a color that doesn't exist anywhere else in the system.

The override selector needed a way to beat the media query on command. The fix was a CSS specificity trick: `:root[data-theme="dark"]` outranks a bare `:root` inside `@media (prefers-color-scheme: dark)` regardless of source order, so an explicit choice always wins in both directions, and "auto" just means the attribute isn't set at all. To avoid a flash of the wrong theme on load, the choice gets injected server-side — a one-line string replace in the `GET /` handler — so the correct `data-theme` is already sitting in the first bytes the browser parses, before any JS runs.

## What I got wrong (or don't know yet)

Testing the new selector surfaced a real bug left over from the original build: the settings panel's open/close toggle checked `p.style.display === "none"`, but that inline property starts as an empty string, not `"none"`, until JS has explicitly set it at least once. The panel was hidden by a stylesheet rule, not inline style, so the very first click after every page load compared `"" === "none"`, got `false`, and did nothing — only the second click actually opened it. Fixed it to read `getComputedStyle(p).display` instead, which reflects the real rendered state regardless of whether it came from a stylesheet or an inline override.

## Next up

Getting the code somewhere other than my own machine: a public repo, and being honest in it about what actually runs where.

**Costs so far:** ~8 min / Anthropic API usage, pay-as-you-go
