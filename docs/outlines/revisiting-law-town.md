# Outline: "Revisiting Law Town" (legal-tech, take)

Planning doc for `src/content/legal-tech/revisiting-law-town.md` — not rendered
by the site (nothing outside `src/content/{legal-tech,running,workshop,field-notes}`
is), kept here as the record of how the piece got structured before it got written.

## Sources

- Sam Harden, ["Welcome to Law Town"](https://samharden.substack.com/p/welcome-to-law-town) — Substack, published 2026-01-29.
- Steve Yegge, ["Welcome to Gas Town"](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) — Medium, published 2026-01-01. Sam's piece extends Yegge's "Gas Town" orchestration metaphor into a legal-practice frame.
- `docs/sam-harden-claude-cowork-transcript.txt` — the Lawyerist Podcast episode with Sam on Claude/Claude Cowork/Claude for Legal (downloaded 2026-07-27 for the /speaking page). In active use: source of the §5 example and the SOP framing in §6/§7 (see below).

## The angle

Not a correction of Sam's piece — a translation problem. The forecast in "Law
Town" held up faster than most readers' mental model of it did. Six months
ago, "Mayor of Law Town" was real but ran on engineer-grade tools (Claude
Code, Cowork, Antigravity — same territory as Yegge's Gas Town, which he
explicitly gates to "Stage 6-7" developers). As of this writing, the same idea
is sitting in an ordinary Outlook inbox. The piece isn't "here's what Sam got
wrong," it's "here's what most people haven't clocked yet."

## Structure (continuous essay, no subheads — matching the house "take" style
used in the field-notes piece, not a sectioned teardown)

1. **Open on the six-month gap.** Sam's post, Yegge's underneath it. Shared
   image: lawyer/engineer as Mayor, supervising a factory floor instead of
   working the line personally. Land the thesis fast.
2. **Why it read as sci-fi in January.** Not wrong, just built on tools that
   lived in an engineer's world. Reasonable to have filed it as "interesting
   thought experiment, check back in a few years."
3. **The pivot — what actually shipped.** Bar moved from "run a terminal" to
   "have an Outlook account." (See research notes below for exact timeline.)
4. **The real point: comprehension gap, not a tech gap.** The tooling closed
   the distance to "everyday attorney" faster than people's sense of it did.
5. **Make it concrete: the demand letter.** From the Lawyerist episode (Sam
   Harden transcript, ~41:32–44:26): Zack walks through drafting a demand
   letter live — a SharePoint connector points Claude at the client's
   discovery folder, an off-the-shelf skill from the Claude-for-Legal GitHub
   plugin drafts the letter, and then one plain-English correction
   ("I'm in Tennessee, I always want you to draft this with a Tennessee
   jurisdiction — can you change that portion of the skill?") turns a generic
   template into the firm's own version. This is the example to use over a
   hypothetical: it chains connector → skill → correction in one breath, using
   the exact category of tool (M365-style connector) the piece is about, not
   an adjacent one. Does the actual work of #4.
6. **Guardrail details as part of the translation, not a caveat.** Tenant-bound
   data, write access off by default, admin approval required — the texture a
   vision-level pitch skips, and what makes it legible as "a setting" rather
   than "a leap of faith." Pair with Sam's SOP-first warning (see below) —
   the guardrail isn't only technical, it's procedural: don't let Claude
   improvise a workflow you haven't actually nailed down yourself yet.
7. **Practical next steps.** Concrete on-ramp for someone who isn't a
   tinkerer: turn on read-only first, test on a closed matter, treat output
   like a fast first-year associate's draft, don't flip on send/write
   permissions firm-wide without a supervision policy. Lead with Sam's own
   rule from the transcript: *"if you don't have good SOPs for how you do
   your work right now, it's not the best idea to go into Claude and start
   creating a bunch of skills to do different things. Get SOPs first."* His
   test for what a good one looks like: write it the way you'd brief "a new
   person in your office who was really smart, but needed direction." Worth
   pairing with Zack's own line from the same conversation — "if you just use
   AI to enhance a shitty process, it's just gonna do that process faster" —
   as the one-sentence version of why this order matters.
8. **Close.** The forecast held up; what's lagging is everyone's sense of how
   close it already is.

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

- ~~Concrete example for §5~~ — resolved: the demand-letter walkthrough from the transcript (see §5).
- ~~Whether/how to pull from the Sam Harden podcast transcript~~ — resolved: used for §5 and §6/§7.
- How much of Sam as a named, quoted source vs. folded-in-unattributed paraphrase — he's a coworker, so keep references plain and functional (this piece cites him the way it would cite any writer whose work is on point) rather than either over-crediting or going quiet about the connection.
