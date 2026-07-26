# zackglaser.com

Personal site and brand hub for Zack Glaser. One site, four pillars: legal tech, running, the workshop, and field notes — unified by the premise that the mix is the brand: a guy who takes things apart to see how they work.

## Repo map

```
zackglaser-com/
├── README.md                  ← you are here
├── docs/                      ← private working docs (not published)
│   ├── 01-site-brief.md       ← the brief: goals, architecture, content model, roadmap
│   └── 02-build-log-format.md ← operating manual for the build-in-public series
└── src/
    └── content/               ← publishable content, organized as collections
        ├── workshop/
        │   └── building-this-site/   ← the build-in-public log (entries 001+)
        ├── legal-tech/
        ├── running/
        ├── field-notes/
        └── newsletter/        ← issue archive once the newsletter exists
```

## Conventions

- `docs/` is internal. `src/content/` is public-facing (drafts flagged in front matter with `status: draft`).
- Content files are markdown with YAML front matter. The schema is defined in `docs/01-site-brief.md` §6.
- Build log entries are numbered (`001-`, `002-`, …), one decision per entry. Format rules in `docs/02-build-log-format.md`.

## Stack status

Not yet chosen — that decision is build log entry 003. The working recommendation is Astro (this layout matches Astro's `src/content/` collections convention). If the stack ends up being Next.js or Eleventy, move `src/content/` to wherever that framework wants it; nothing else in this repo cares.

When the stack is chosen, run the framework init in this directory and let it merge around the existing folders.
