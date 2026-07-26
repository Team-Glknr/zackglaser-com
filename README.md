# zackglaser.com

Personal site and brand hub for Zack Glaser. One site, four pillars: legal tech, running, the workshop, and field notes — unified by the premise that the mix is the brand: a guy who takes things apart to see how they work.

## Repo map

```
zackglaser-com/
├── README.md                  ← you are here
├── astro.config.mjs / tsconfig.json / package.json
├── src/
│   ├── content.config.ts      ← content collection schemas (loaders + zod, brief §6)
│   ├── pages/                 ← Astro routes (just a placeholder index for now)
│   └── content/               ← publishable content, organized as collections
│       ├── workshop/
│       │   └── building-this-site/   ← the build-in-public log (entries 001+)
│       ├── legal-tech/
│       ├── running/
│       ├── field-notes/
│       └── newsletter/        ← issue archive once the newsletter exists
├── public/                    ← static assets
└── docs/                      ← private working docs (not published)
    ├── 01-site-brief.md       ← the brief: goals, architecture, content model, roadmap
    └── 02-build-log-format.md ← operating manual for the build-in-public series
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
