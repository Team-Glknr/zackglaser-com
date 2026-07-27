# zackglaser.com — favicon & mark system spec

Status: Mark A shipped (build log entry 012 ✓); Mark B and wordmark lockups remain proposals for the brand pass (entry 013) · Last updated: 2026-07-26
Owner: Zack Glaser
Companion to: `docs/01-site-brief.md` §7 · `src/styles/theme.css` (token source of truth)

---

## 1. Concept

Both marks come from one system: **the knolling grid** — a 2×2 arrangement of parts, laid out square with even gutters. It encodes three brand ideas at once:

- **Knolling** (the newsletter, entry 011): parts laid out at right angles so everything can be seen.
- **One house, four rooms** (entry 002): four cells, one grid — the four pillars under one roof.
- **The teardown instinct** (brief §2): a whole, shown as its pieces, still in relation.

The marks are the site's existing icon language (right angles, square caps, flat, geometric — see `Nav.astro`, `EmptyState.astro`) translated from thin stroke to bold fill. Strokes disappear at 16px; fills don't. Same grammar, louder voice.

## 2. The two marks

### Mark A — "Four rooms" (site mark / favicon)

One square, knolled apart into four. The gutters form a cross of negative space; one part carries the workshop-gold accent.

**Use:** global favicon, app icons, avatar for site-wide accounts (GitHub, etc.), footer stamp.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g fill="#1f2429">
    <rect x="1"  y="1"  width="13" height="13" rx="1.5"/>
    <rect x="18" y="1"  width="13" height="13" rx="1.5"/>
    <rect x="1"  y="18" width="13" height="13" rx="1.5"/>
  </g>
  <rect x="18" y="18" width="13" height="13" rx="1.5" fill="#a6792e"/>
</svg>
```

### Mark B — "Knolled bench" (Knolling newsletter mark)

Same grid, but the four cells hold four *different* parts — square, circle, L, bar — like tools on a bench. More personality; visibly Mark A's sibling.

**Use:** Knolling masthead, email header, `/newsletter` page, newsletter social avatars. Not the site favicon.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g fill="#1f2429">
    <rect x="1" y="1" width="13" height="13" rx="1.5"/>
    <circle cx="24.5" cy="7.5" r="6.5"/>
    <path d="M1,18 h13 v5 h-8 v8 h-5 z"/>
  </g>
  <rect x="25" y="18" width="6" height="13" rx="1.5" fill="#a6792e"/>
</svg>
```

## 3. Grid geometry (normative)

All values on a 32-unit viewBox; scale proportionally.

| Property | Value | Ratio |
|----------|-------|-------|
| Canvas | 32 × 32 | — |
| Outer margin | 1 | 1/32 |
| Cell | 13 × 13 | ~40.6% |
| Gutter | 4 | 12.5% |
| Corner radius | 1.5 | ~4.7% (echoes `--radius-card` proportion, not sharper) |
| Cell origins | (1,1) (18,1) (1,18) (18,18) | — |

Rules:

- **Parts align to the grid, not necessarily fill it.** Mark B's bar (6 wide) right-aligns to its cell edge (x = 25–31). Knolled objects keep their own size; the alignment is what's disciplined.
- **The gutter is sacred.** Nothing crosses it. The cross of negative space is half the mark.
- **Fills only, no strokes.** Presence at 16px comes from mass. (The circle in Mark B is the one deliberate break from the all-right-angle language — benches hold round parts too. Design gut-check invited.)

## 4. Color (tokens from `theme.css`)

| Role | Light mode | Dark mode | Token |
|------|-----------|-----------|-------|
| Parts (ink) | `#1f2429` | `#edf0f2` | `--color-ink` |
| Accent part | `#a6792e` | `#d9a857` | `--pillar-workshop` |
| Reference bg | `#f2f4f6` | `#161a1e` | `--color-paper` (favicon itself stays transparent) |

Rules:

- **Exactly one part carries the accent.** Never two, never zero. Default accent = workshop gold (the marks are about making, and it reads warm at small sizes).
- Favicon ships with the `prefers-color-scheme` media query (pattern already in `public/favicon.svg`).
- Open to Design: whether the accent part could take the section's pillar color on pillar pages (site header only — the favicon never rotates).

## 5. Deliverables checklist

1. `public/favicon.svg` — Mark A with dark-mode media query (replaces the current file, which is still **Astro's default logo**). ✓ entry 012
2. `public/favicon.ico` — Mark A rasterized at 32 and 16 (replaces default). ✓ entry 012
3. `apple-touch-icon.png` (180×180) — Mark A on solid `--color-paper`, margins widened to 3/32 per side (iOS crops tight). ✓ entry 012
4. Knolling mark (Mark B) — SVG + rasters for Buttondown header and social avatars, deferred until the account exists.
5. Wordmark lockups (mark + "zackglaser.com" / mark + "Knolling") — brand pass, entry 013.

## 6. Extending the family

The grid is the system; cell contents are the variable. Future marks (a series mark, a pillar mark) swap parts into the same 2×2 grid with the same margin/gutter/radius rules. A mark belongs to the family if: same grid, fills only, one accent part, gutter untouched.

## 7. Open questions for Design

- Mark B's circle — keep the deliberate break, or keep the family 100% rectilinear?
- Accent placement: bottom-right is where the eye lands last (reading order) — intentional "the interesting part is at the end." Confirm or move.
- Motion: parts drifting from scattered to knolled (~150ms, `--motion-fast`) as a header hover/load moment. Favicon stays static regardless.
- Whether Mark A at 16px reads "grid app" out of context — the asymmetric gold part is the current answer; Design may have a better one.
