# Outline: "Revisiting Law Town" (legal-tech, take)

Planning doc for `src/content/legal-tech/revisiting-law-town.md` — not rendered
by the site (nothing outside `src/content/{legal-tech,running,workshop,field-notes}`
is), kept here as the record of how the piece got structured before it got written.

## Sources

- Sam Harden, ["Welcome to Law Town"](https://samharden.substack.com/p/welcome-to-law-town) — Substack, published 2026-01-29.
- Steve Yegge, ["Welcome to Gas Town"](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) — Medium, published 2026-01-01. Sam's piece extends Yegge's "Gas Town" orchestration metaphor into a legal-practice frame.
- `docs/sam-harden-claude-cowork-transcript.txt` — the Lawyerist Podcast episode with Sam on Claude/Claude Cowork/Claude for Legal (downloaded 2026-07-27 for the /speaking page). In active use: source of the Development-section example and the SOP framing in Application (see below).
- `docs/09-writing-voice.md` — the house style guide this piece is written against. Structure below follows its Opening/Reframing/Development/Application/Ending shape.

## The angle

Not a correction of Sam's piece — a translation problem. The forecast in "Law
Town" held up faster than most readers' mental model of it did. Six months
ago, "Mayor of Law Town" was real but ran on engineer-grade tools (Claude
Code, Cowork, Antigravity — same territory as Yegge's Gas Town, which he
explicitly gates to "Stage 6-7" developers). As of this writing, the same idea
is sitting in an ordinary Outlook inbox. The piece isn't "here's what Sam got
wrong," it's "here's what most people haven't clocked yet."

## Structure

Remapped 2026-08-02 onto docs/09-writing-voice.md's five-part shape. Whether
this renders with true subheads or stays continuous prose with bolded inline
signposts (matching the field-notes take's precedent) is still open — see
below. Either way, these five parts are the argument's skeleton, not
necessarily what prints on the page.

### 1. Opening

Personal, concrete, no scene-setting. Working line (Zack's, 2026-08-02):

> I spend a significant amount of my day building scaffolding, these days.
> Yes, I run bots and agents a lot. But most of my day is creating the
> infrastructure through which these agents operate.

That's the hook — lands the Mayor-of-Law-Town idea as something Zack is
already living, before naming Sam or Yegge at all. Bridges into: Sam's post
six months ago, Yegge's "Gas Town" underneath it, the shared image of
lawyer/engineer as Mayor supervising a factory floor instead of working the
line personally. Land the thesis fast.

### 2. Reframing

Why "Mayor of Law Town" read as sci-fi in January: not wrong, just built on
tools that lived in an engineer's world (Claude Code, Cowork, Antigravity —
same territory as Yegge's Gas Town, which he explicitly gates to "Stage 6-7"
developers). Reasonable to have filed it as "interesting thought experiment,
check back in a few years." The actual distinction to draw: the gap that's
closed since isn't a technology gap, it's a comprehension gap — the tooling
reached "everyday attorney" faster than most people's mental model of it did.

### 3. Development

Two moves:

- **The pivot — what actually shipped.** Bar moved from "run a terminal" to
  "have an Outlook account." (See research notes below for exact timeline.)
- **Make it concrete: the demand letter.** From the Lawyerist episode (Sam
  Harden transcript, ~41:32–44:26): Zack walks through drafting a demand
  letter live — a SharePoint connector points Claude at the client's
  discovery folder, an off-the-shelf skill from the Claude-for-Legal GitHub
  plugin drafts the letter, and then one plain-English correction ("I'm in
  Tennessee, I always want you to draft this with a Tennessee jurisdiction —
  can you change that portion of the skill?") turns a generic template into
  the firm's own version. Use this over a hypothetical: it chains
  connector → skill → correction in one breath, using the exact category of
  tool the piece is about, not an adjacent one.

### 4. Application

- **Guardrail details as part of the translation, not a caveat.** Tenant-bound
  data, write access off by default, admin approval required — the texture a
  vision-level pitch skips, and what makes it legible as "a setting" rather
  than "a leap of faith."
- **Practical next steps**, led by Sam's own rule from the transcript:
  *"if you don't have good SOPs for how you do your work right now, it's not
  the best idea to go into Claude and start creating a bunch of skills to do
  different things. Get SOPs first."* His test for a good one: write it the
  way you'd brief "a new person in your office who was really smart, but
  needed direction." Pair with Zack's own line from the same conversation —
  "if you just use AI to enhance a shitty process, it's just gonna do that
  process faster" — as the one-sentence version of why this order matters.
  Concrete on-ramp from there: turn on read-only first, test on a closed
  matter, treat output like a fast first-year associate's draft, don't flip
  on send/write permissions firm-wide without a supervision policy.

### 5. Ending

The forecast held up; what's lagging is everyone's sense of how close it
already is. Sharper than "here's what's coming" — return to the scaffolding
image from the opening if it earns a second look.

## Research notes (grounding for §3/§6, so it isn't re-researched at draft time)

Two separate Anthropic releases get conflated in casual conversation — worth
keeping distinct in the piece:

- **Microsoft 365 connector**: read/write access to SharePoint, OneDrive,
  Outlook, Teams via delegated Microsoft Graph permissions. Enterprise-only at
  launch (Oct 2025) → expanded to all plans including Free (April 2026). Data
  stays tenant-bound, not cached; write scopes (`Mail.Send`, `Files.ReadWrite.All`)
  blocked by default even where available — an org has to opt in deliberately.
  Admin approval + Entra tenant auth required; supports conditional access
  (MFA, device compliance). Anthropic holds SOC 2 Type II, ISO 27001, GDPR.
  ([security guide](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide), [UC Today coverage](https://www.uctoday.com/productivity-automation/anthropic-expands-claude-microsoft-365-integration-for-all-user-plans/))
- **Claude for Word/Excel/PowerPoint** (GA) **+ Outlook** (public beta) —
  shipped May 7, 2026. Claude runs as one persistent agent across the four
  apps, carrying conversation context as you move between an email, a doc,
  and a spreadsheet without re-explaining the work in progress.

Sam's specific examples in "Law Town" (timeline generation from medical
records, discovery-email triage, appellate-transcript analysis) all ran on
Claude Code / Cowork / Antigravity — the connector and app integrations are
the more mainstream-reachable version of the same underlying capability.

## Open questions

- ~~Concrete example for Development~~ — resolved: the demand-letter walkthrough from the transcript.
- ~~Whether/how to pull from the Sam Harden podcast transcript~~ — resolved: used for Development and Application.
- How much of Sam as a named, quoted source vs. folded-in-unattributed paraphrase — he's a coworker, so keep references plain and functional (this piece cites him the way it would cite any writer whose work is on point) rather than either over-crediting or going quiet about the connection.
- **Subheads vs. continuous prose, for SEO/AEO.** True headers help both —
  they're the natural chunk boundary an AI answer engine pulls a citable
  passage from, and they help search engines parse topical structure. But the
  site's one published "take" runs as a headerless continuous essay, and
  docs/09-writing-voice.md itself says structure should be "driven by the
  idea, not imposed by a template." Recommendation: keep it headerless, but
  use a bolded inline signpost sentence or two (the way the field-notes piece
  uses "**The seam is more useful than the smooth surface it's covering
  up.**") at the Reframing and Ending turns — gets some of the
  scannability/chunk-boundary benefit without breaking the take format's
  identity. Pending Zack's call.
- **Target word count** — not yet set. The one published take runs ~750
  words with no subheads; this piece covers more ground (two source pieces,
  a timeline, a worked example) so may want more room. Pending Zack.
