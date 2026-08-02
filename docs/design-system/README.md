# zackglaser.com — design system reference

Source of truth for building zackglaser.com in code (Astro, per `github.md`). This is a prototype/reference project, not a production codebase — every page below is a clickable HTML mockup meant to be read for exact values (colors, type, spacing) and structure, then implemented for real in VS Code.

**Repo:** Team-Glknr/zackglaser-com (branch: main) — see `github.md` for sync history and the screen map back to real doc sources (`docs/01-site-brief.md`, `docs/02-build-log-format.md`).

## Brand premise
Zack takes things apart to see how they work — software stacks, training plans, workbenches, beliefs — and shows people the pieces. One person, one method, four subjects (currently labeled "pillars" — naming still open, see Open Items).

## Foundations — `Style Guide.dc.html`
The canonical reference for every token. Sections, in order:
1. **Wordmark** — "zack" in Literata italic + "glaser" in Space Mono bold, one lowercase word, always ink-colored, min 18px tall.
2. **Color** — neutrals (cool blue-gray, not brown) + one accent per pillar:
   - Neutrals — light: paper `#F2F4F6`, raised `#FAFBFC`, ink `#1F2429`, inkSoft `#616B75`, line `#D6DBE0`. Dark: paper `#161A1E`, raised `#1F242A`, ink `#EDF0F2`, inkSoft `#98A2AC`, line `#323A42`.
   - Pillar accents (light / dark): legal tech `#3B5BA5` / `#7C9BDB` · running `#B23A3A` / `#E1726C` · workshop `#A6792E` / `#D9A857` · field notes `#3F7D5C` / `#6FBB94`.
   - Rule: one accent per pillar, everything else in the system stays identical. Accent never carries meaning alone — always paired with a text label (accessibility).
3. **Type** — Literata (serif, italic for display/decisions/wordmark), Archivo (sans, body/UI), Space Mono (mono, labels/tags/meta/wordmark second half). Scale: display-xl 64 / display 48 / title 32 / body-lg 18 / body 16 / mono-sm 13.
4. **Spacing** — 4/8/12/16/24/32/48/64/96/128px scale.
5. **Mark** — no separate logo mark exists; wordmark carries the brand. Repo does have `public/favicon.svg` (mountain/flame glyph, light/dark aware) — not yet formally adopted, flagged for a decision.
6. **Imagery** — real photos only, no stock, true color (no filters/gradients), square corners + 1px border, mono caption below like a lab label.
7. **Iconography** — one shared line-icon system, 24×24 grid, 1.25px stroke, square caps, ink by default, accent only on the pillar mark. No per-pillar icon variants (color already differentiates).
8. **Links & buttons** — underline-on-hover body links, `[ bracket ]` mono buttons for actions.
9. **Tags** — mono pill chips, neutral border by default, pillar accent for pillar tags.
10. **Newsletter block** — reusable card: eyebrow, italic headline, email input + subscribe button. Appears on nearly every page.
11. **Layout grid** — 1200px wide for grids/hub, 680–760px reading column for articles.
12. **Motion** — hover/focus only, 150ms ease-out, color/border/opacity changes. No scroll-triggered effects, no bounce/parallax. Respects `prefers-reduced-motion`.
13. **Accessibility** — visible 2px ink focus ring (never removed), AA contrast minimum, 44px min hit targets, color never the sole signal, semantic headings/landmarks/alt text everywhere.
14. **Forms & states** — default/focus/error/disabled input treatments; dedicated error red (`#C2295A` light / `#E8698F` dark), separate from the pillar palette.
15. **Dropdown/elevation** — the ONLY shadow in the system (`0 8px 24px rgba(0,0,0,0.16)`), reserved for transient overlays (nav dropdown, tooltips) — never on static cards. 6px radius, opacity+4px-translateY open/close.

## Site-wide chrome — `Site Nav & Footer.dc.html`
- **Nav order (locked):** pillars ▾ (dropdown) → speaking → newsletter → about — subscribe is the one CTA, pinned right. `/now` deliberately excluded from nav (see Hub).
- Nav bar: single justified row, wordmark left, links + subscribe right, 18px/28px padding, 6px radius, raised background.
- Footer: 3-column link block (pillars / site / elsewhere) + bottom row (wordmark + copyright). Mobile nav pattern lives in `Mobile Nav.dc.html` (full-panel overlay, 52px row height, flat pillar list, subscribe as full-width button).

## Pages built
- **`Hub.dc.html`** (`/`) — nav, swappable hero (prop `heroVariant`: plain / cta / wizard / latest-project — a "choose your read" wizard is the current interactive direction), "how it fits together" system explainer, four-door pillar grid, latest posts, newsletter CTA, footer. `/now` lives here as a one-line link, not in nav.
- **`Pillar Page.dc.html`** (`/legal-tech` etc.) — pillar header w/ accent underline, format filter chips (teardown/log/take), compact post list, pagination, newsletter CTA.
- **`Post Page.dc.html`** — breadcrumb, header (pillar tag + format pill + date), hero image slot, article body (heading/blockquote/pull-quote treatments), tags, author bio, next/prev, newsletter CTA, comments.
- **`Now Page.dc.html`** (`/now`) — label/value/detail rows per pillar accent, "last touched" freshness note.
- **`About Page.dc.html`** — photo + intro, the religion→JD→fullstack→now arc as a scannable strip, Lawyerist/Affinity context line, photo gallery, newsletter CTA.
- **`Newsletter Page.dc.html`** (`/newsletter`) — centered pitch hero, subscribe form + subscriber count, filterable cross-pillar issue archive with pagination.
- **`Speaking.dc.html`** (`/speaking`) — TABLED pending a strategy pass (see Open Items). Current draft reframes the page around "visible expert" (credibility first) rather than a booking form, with a "show don't tell" structure (where I've spoken / what I can talk about / who I talk to / book for event or podcast).

## Build log system (`/workshop/building-this-site`)
Three altitudes, per `docs/02-build-log-format.md`'s real 5-part entry structure (what's on the bench / the decision / how I took it apart / what I got wrong / next up):
- **`Build Log Project.dc.html`** — whole-project rollup: total cost/time/chapters/entries stat row, ~150-word recap, publish-progress bar, chapter list linking down.
- **`Build Log Chapter.dc.html`** — TOC of all chapters (current highlighted), horizontally-swipeable/wheel-scrollable chapter panels, each a standalone ~350-word article (stats + prose + takeaways/mistakes), with an **accordion** of that chapter's individual entries at the bottom (collapsed by default, full decision/teardown/wrong text on expand, deep-links out to a standalone entry permalink).
- **`Build Log Series.dc.html`** — lighter index of chapter teaser cards, superseded in practice by Project + Chapter but kept as an alternate entry list view.
- Structure rationale: chapters are few and sequential (swipe fits), entries can be numerous and need scanning (accordion fits — tested at 300–600 word length, holds up).

## Utility templates
- **`404 & Empty States.dc.html`** — 404 ("Hey y'all — this page took itself apart"), empty pillar, empty /now, no search/filter results.
- **`Comments Section.dc.html`** — Giscus (GitHub Discussions) restyled to match the system: reaction chips, threaded comments w/ author badge, sign-in CTA, empty state. Real integration: point Giscus's custom-CSS theme param at these tokens.
- **`Social Share Image.dc.html`** — 1200×630 OG card, one layout for every post: wordmark + pillar tag, format + auto-sizing title, meta + domain, pillar-accent edge bar.

## Open items (not yet decided)
- **Pillar naming** — "pillars" may be renamed; explored but tabled: lenses, threads, beats, angles, throughlines, obsessions, strands, loose ends, unravelings, the pull, stations, benches, corners, trades. No pick yet — ships as "pillars" until decided.
- **Speaking page strategy** — needs a dedicated strategy pass (goal ranking, what "visible expert" means concretely) before final design.
- **Logo mark** — whether to formally adopt `public/favicon.svg` or keep wordmark-only.
- **Brief ranking edit** — recommended (not yet applied to the repo, no push access): swap goal order so audience/newsletter is #1, reframe "speaking" as "visibility as an expert" (proof points, not the sole goal) at #2, playground stays #3. See `github.md`.

## For implementation in VS Code
Every `.dc.html` file inlines its own styles (no shared stylesheet) — when porting to Astro, extract the token values above into a real CSS/JS theme file once, then reference it across components rather than re-declaring per-page. Fonts: Literata, Space Mono, Archivo — all on Google Fonts, loaded via the `<link>` tag visible in any page's `<head>`.
