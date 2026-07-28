# zackglaser.com

Personal site and brand hub for Zack Glaser. One site, four pillars: legal tech, running, the workshop, and field notes — unified by the premise that the mix is the brand: a guy who takes things apart to see how they work.

Live at [zackglaser.com](https://zackglaser.com), deployed on Vercel (personal account) from this repo's `main` branch.

## Where things stand

Shipped and live: Hub, all four pillar pages, individual post pages, `/now`, `/about`, `/newsletter`, nav/footer chrome with the motion logo, the full brand system (favicon, wordmark lockups, Knolling marks), Knolling's Buttondown subscribe forms, the full GitHub on-ramp (footer link, suggest-an-edit links, and GitHub-Discussions-backed comments via giscus), and a real social share image on every page.

`/legal-tech/speaking` is live too, but not finished. The positioning strategy (brief §9) is resolved and the page is built with real ticket-wall and topic data, plus three real podcast clip quotes and a written sample teardown. No headshot or testimonials section yet — dropped rather than placeholder'd, same call `about.astro` already made for its own photo hero — and the clips run as text only until real video exists. Also still pending: the Lawyerist Podcast's real episode count, a real Affinity referral URL, and a booking-form backend.

**Tabled, deliberately not started:**
- "A game as a front door" — three prototypes sit in `docs/mockups/`, untouched

**Not started yet:** Launch (publish the build log retroactively, announce, first newsletter issue).

Full decision-by-decision history: `docs/02-build-log-format.md`'s entry backlog, or the entries themselves in `src/content/workshop/building-this-site/` (currently 001–023, all `status: draft` until launch).

## Repo map

```
zackglaser-com/
├── README.md                  ← you are here
├── astro.config.mjs / tsconfig.json / package.json
├── src/
│   ├── content.config.ts      ← content collection schemas (loaders + zod, brief §6)
│   ├── layouts/Layout.astro   ← shell: nav, footer, meta/OG tags
│   ├── components/            ← Nav, Footer, NewsletterCard, AuthorshipStamp, Comments, EmptyState
│   ├── lib/                   ← pillars.ts, postMeta.ts, ogImage.ts (shared, not page-specific)
│   ├── styles/theme.css       ← design tokens (colors, type, spacing) — light/dark aware
│   ├── assets/og-fonts/       ← WOFF fonts for build-time OG image generation
│   ├── pages/
│   │   ├── index.astro        ← Hub
│   │   ├── [pillar]/index.astro   ← the 4 pillar landing pages, one template
│   │   ├── [...id].astro      ← individual post pages
│   │   ├── about.astro / now.astro
│   │   └── og/                ← build-time PNG generation (satori + resvg), one per post + a default
│   └── content/               ← publishable content, organized as collections
│       ├── workshop/building-this-site/   ← the build-in-public log (entries 001+)
│       ├── legal-tech/ / running/ / field-notes/
│       └── newsletter/        ← issue archive once Knolling issues start shipping
├── public/
│   ├── brand/                 ← wordmark lockups, Knolling marks + rasters
│   └── favicon.svg / favicon.ico / apple-touch-icon.png
└── docs/                      ← private working docs (not published)
    ├── 01-site-brief.md       ← the brief: goals, architecture, content model, roadmap — the living source of truth
    ├── 02-build-log-format.md ← operating manual + entry backlog for the build-in-public series
    ├── 03-github-onramp.md    ← the GitHub on-ramp spec (giscus, edit links, footer)
    ├── 04-ai-first.md         ← authorship disclosure spec (the `authorship` field, the colophon)
    ├── 05-favicon-marks.md    ← the mark system spec (Mark A, Mark B, motion)
    └── design-system/         ← frozen reference: the original design-tool mockups everything here was ported from
```

## Conventions

- `docs/` is internal. `src/content/` is public-facing (drafts flagged in front matter with `status: draft`).
- Content files are markdown with YAML front matter. The schema is defined in `docs/01-site-brief.md` §6 and enforced in `src/content.config.ts`.
- Build log entries are numbered (`001-`, `002-`, …), one decision per entry. Format rules in `docs/02-build-log-format.md`.

## Stack

**Astro** (requires Node ≥22.12) — see build log entry [004](src/content/workshop/building-this-site/004-choosing-the-stack.md). This layout matches Astro's `src/content/` collections convention directly.

```
npm install
npm run dev      # http://localhost:4321
npm run build
```
