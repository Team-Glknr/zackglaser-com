---
title: "Porting the design system: theme, chrome, and the Hub"
date: 2026-07-26
status: published
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [astro, design-system, frontend]
---

## What's on the bench

Turning the design system (`docs/design-system/`) from clickable HTML prototypes into real Astro code — starting with the shared chrome (theme, nav, footer) and the homepage.

## The decision

Built a real `theme.css` from the prototype's tokens, a base `Layout.astro` wrapping every page in `Nav` + `Footer`, and the Hub page itself — wired to the actual content collection, not placeholder data.

## How I took it apart

The design system's own readme told me the plan: "extract the token values into a real CSS/JS theme file once, then reference it across components." So `theme.css` is just the Style Guide's neutrals, pillar accents, type scale, and spacing scale as CSS custom properties, light by default with a `prefers-color-scheme: dark` override — no manual toggle, since nothing in the brief asks for one yet.

The bigger call was interactivity. The prototype tool ships its own JS component runtime (`support.js`, `image-slot.js`) to drive things like the pillars dropdown and mobile menu — none of which belongs in the real site. Astro's whole pitch is zero JS by default, and the brief's design direction agrees ("typography-first, minimal chrome"), so I rebuilt both as pure HTML/CSS: the desktop pillars dropdown is a native `<details>/<summary>`, and the mobile full-panel overlay is a hidden checkbox plus a sibling selector. Neither needs a script tag.

The Hub page's mockup ships four hero variants — plain, CTA, a "choose your read" wizard, and a latest-project spotlight — and I picked plain. The other three all lean on something that doesn't exist yet: the CTA and spotlight variants want a real subscriber count or a real published post to point to, and the wizard is explicitly flagged in the design system's own readme as still exploratory, not decided. Shipping any of them now would mean faking data on the homepage, which is exactly the kind of thing the build log exists to call out.

Same instinct on "latest posts": the mockup hardcodes three sample posts. I wired it to `getCollection('posts')` filtered to `status: 'published'` instead — right now that's genuinely empty (every build-log entry so far is still a draft), so the Hub shows a real empty state ("Nothing here yet") borrowed from the design system's own empty-pillar pattern, rather than lying about content that doesn't exist. The day an entry flips to `published`, it'll show up here with zero page changes.

One real bug caught along the way: Astro's content layer API gives entries an `id`, not a `slug` — I'd written the "latest" post links against `.slug` out of habit from the older Content Collections API, and the build didn't complain about it (it's valid TypeScript, just wrong), so I only caught it because I was checking every field against the actual type. Worth remembering: Astro's content APIs changed shape between major versions, and old habits don't always throw errors — they just quietly link to nowhere.

## What I got wrong (or don't know yet)

Headless Chrome's CLI screenshot mode (`--headless=new --screenshot`) gave me a false negative — it rendered the mobile hamburger button as completely missing, even though the compiled CSS was correct. Switching to Puppeteer with an explicit viewport and reading computed styles directly showed the button was there all along. Lesson: don't trust a single screenshot tool's word for a missing element — check computed styles before concluding the code is wrong.

## Next up

The pillar landing pages.

**Costs so far:** $12/yr / __ hours
