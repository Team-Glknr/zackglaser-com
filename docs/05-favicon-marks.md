# zackglaser.com — favicon & mark system spec

Status: Both marks and both wordmark lockups shipped (entries 012–014 ✓) — Mark A + lockup, then Mark B + lockup once the Buttondown account existed · Last updated: 2026-07-26
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
4. Knolling mark (Mark B) — ✓ entry 014 (`public/brand/mark-knolling.svg`). Rasters shipped too: `public/brand/knolling-avatar.png` (512×512, social) and `public/brand/knolling-header.png` (480×168 @3x, Buttondown/email use).
5. Wordmark lockups: mark + "zackglaser.com" ✓ entry 013 (`public/brand/wordmark-zackglaser.svg`). Mark + "Knolling" ✓ entry 014 (`public/brand/wordmark-knolling.svg`).

## 6. Extending the family

The grid is the system; cell contents are the variable. Future marks (a series mark, a pillar mark) swap parts into the same 2×2 grid with the same margin/gutter/radius rules. A mark belongs to the family if: same grid, fills only, one accent part, gutter untouched.

## 7. Open questions for Design

- Mark B's circle — keep the deliberate break, or keep the family 100% rectilinear?
- Accent placement: bottom-right is where the eye lands last (reading order) — intentional "the interesting part is at the end." Confirm or move.
- ~~Motion~~ — resolved 2026-07-27 (entry 017): Mark A plays a scattered-to-knolled reveal once on page load in the nav, 700ms with a staggered 90ms cascade per part, then holds. Reference: `docs/design-system/motion/knolling-motion-preview.html`; implementation: `Nav.astro`. Favicon itself stays static, as originally scoped.
- Whether Mark A at 16px reads "grid app" out of context — the asymmetric gold part is the current answer; Design may have a better one.

## 8. Note for whoever rasterizes these next

`magick` on this machine delegates SVG rendering to `rsvg-convert`, and that path rendered every asymmetric-margin composition here off-center — content that's mathematically centered in the source SVG came out shifted toward the top-left in the raster, silently. Symmetric marks (Mark A alone, no added margin) happened to render fine, which is exactly what let the bug through the first time. Verify any new raster's content bounding box against its expected margins before shipping it; don't just eyeball the preview. Browser-based rendering (Chrome headless via Puppeteer, screenshotting the actual SVG) did not have this bug and is the safer default. Full account: build log entry 014.
