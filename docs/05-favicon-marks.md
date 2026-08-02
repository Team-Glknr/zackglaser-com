# zackglaser.com — favicon & mark system spec

Status: Single mark shipped everywhere (entry 028 ✓) — replaces the Mark A / Mark B system from entries 012–014 · Last updated: 2026-08-02
Owner: Zack Glaser
Companion to: `docs/01-site-brief.md` §7 · `src/styles/theme.css` (token source of truth)

---

## 1. Concept

One mark, used everywhere: a 2×2 grid of circles, each punched with a different icon — plus, minus, star, square — like a socket set laid out on a bench. It replaces the earlier two-mark system (a plain square grid for the site, a second "knolled bench" mark reserved for the Knolling newsletter). There's no longer a site/newsletter distinction: the same SVG is the browser-tab favicon, the app icon, and the animated logo in `Nav.astro`.

## 2. The mark

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <circle cx="8" cy="8" r="7" fill="#1f2429" /><rect x="6.9" y="4" width="2.2" height="8" fill="#faf9f5" /><rect x="4" y="6.9" width="8" height="2.2" fill="#faf9f5" />
    <circle cx="24" cy="8" r="7" fill="#1f2429" /><rect x="20" y="6.9" width="8" height="2.2" fill="#faf9f5" />
    <circle cx="8" cy="24" r="7" fill="#1f2429" /><polygon points="8,19.5 9.1,22.1 11.9,21.75 10.2,24 11.9,26.25 9.1,25.9 8,28.5 6.9,25.9 4.1,26.25 5.8,24 4.1,21.75 6.9,22.1" fill="#faf9f5" />
    <circle cx="24" cy="24" r="7" fill="#a8432a" /><rect x="21.2" y="21.2" width="5.6" height="5.6" fill="#faf9f5" />
</svg>
```

**Use:** global favicon, app icons, the animated nav logo, avatar for site-wide accounts (GitHub, etc.), Knolling newsletter (Buttondown avatar/header) — everywhere a mark is needed.

## 3. Grid geometry (normative)

All values on a 32-unit viewBox; scale proportionally.

| Property | Value | Ratio |
|----------|-------|-------|
| Canvas | 32 × 32 | — |
| Circle radius | 7 | ~21.9% |
| Circle centers | (8,8) (24,8) (8,24) (24,24) | — |
| Gutter between circles | 2 (edge-to-edge) | — |

Rules:

- **Icon cutouts stay inside their circle.** Nothing crosses into the gutter. Each icon (cross, bar, star, square) is centered on its own circle.
- **Fills only, no strokes.** Presence at 16px comes from mass.

## 4. Color (tokens from `theme.css`)

| Role | Light mode | Dark mode | Token |
|------|-----------|-----------|-------|
| Circles (ink) | `#1f2429` | `#edf0f2` | `--color-ink` |
| Icon cutouts (paper) | `#faf9f5` | `#1a1816` | `--color-paper` |
| Accent circle | `#a8432a` | `#de8f6c` | `--pillar-running` |

Rules:

- **Exactly one circle carries the accent** (bottom-right, the square). Never two, never zero.
- Favicon ships with the `prefers-color-scheme` media query (pattern in `public/favicon.svg`); ink and paper invert together so contrast holds in both modes.
- The accent is `--pillar-running`, not workshop gold — that's what's baked into the supplied design, not a rotation rule. No pillar-page rotation; the favicon and nav logo stay fixed regardless of which pillar page is open.

## 5. Deliverables checklist

1. `public/favicon.svg` — the mark with dark-mode media query. ✓ entry 028
2. `public/favicon.ico` — the mark rasterized at 32 and 16. ✓ entry 028
3. `apple-touch-icon.png` (180×180) — the mark on solid `--color-paper`, ~18% margin per side (iOS crops tight), rendered via headless Chrome (see §6). ✓ entry 028
4. `Nav.astro`'s animated logo — same four shapes, same per-part scatter-to-knolled animation from entry 017, shapes swapped in without touching the animation. ✓ entry 028
5. Knolling's Buttondown avatar/header — **still outstanding.** Those rasters live outside this repo (uploaded directly to Buttondown in entry 014) and still show the retired Mark B until manually re-uploaded.

## 6. Note for whoever rasterizes these next

`magick` on this machine delegates SVG rendering to `rsvg-convert`, and that path has rendered mathematically-centered compositions off-center before — silently, no warning (full account: entry 014). Browser-based rendering (Chrome headless: `chrome --headless --screenshot`, or Puppeteer) does not have this bug and is the safer default. Verify any new raster's content bounding box against its expected margins before shipping it; don't just eyeball the preview.

## 7. History

The site shipped a two-mark system in entries 012–014: a plain square-grid mark (Mark A) for site-wide use, and a second "knolled bench" mark (Mark B) reserved for the Knolling newsletter specifically. Entry 028 replaced both with the single mark documented above and deleted Mark B's assets (`public/brand/mark-knolling.svg`, `wordmark-knolling.svg`, `knolling-avatar.png`, `knolling-header.png`) from the repo. `public/brand/wordmark-zackglaser.svg` (the general site wordmark lockup from entry 013) still uses the retired square-grid mark and hasn't been updated — out of scope for entry 028, since nothing in the site currently references it.
