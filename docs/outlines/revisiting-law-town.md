# Outline: "Revisiting Law Town" (legal-tech, take)

Planning doc for `src/content/legal-tech/revisiting-law-town.md` — not rendered
by the site (nothing outside `src/content/{legal-tech,running,workshop,field-notes}`
is), kept here as the record of how the piece got structured before it got written.

## Sources

- Sam Harden, ["Welcome to Law Town"](https://samharden.substack.com/p/welcome-to-law-town) — Substack, published 2026-01-29.
- Steve Yegge, ["Welcome to Gas Town"](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) — Medium, published 2026-01-01. Sam's piece extends Yegge's "Gas Town" orchestration metaphor into a legal-practice frame.
- Related, already in the repo: `docs/sam-harden-claude-cowork-transcript.txt` — the Lawyerist Podcast episode with Sam on Claude/Claude Cowork/Claude for Legal (downloaded 2026-07-27 for the /speaking page). Possible supporting material or pull-quote source once drafting starts; not yet used.

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
5. **Make it concrete.** Take one or two of Sam's specific examples
   (discovery email triage, timeline generation from records) and de-abstract
   them into the literal, boring version of what that looks like today in a
   real inbox. Does the actual work of #4. — **open: need a real example Zack
   has tried or watched someone try, not a hypothetical.**
6. **Guardrail details as part of the translation, not a caveat.** Tenant-bound
   data, write access off by default, admin approval required — the texture a
   vision-level pitch skips, and what makes it legible as "a setting" rather
   than "a leap of faith."
7. **Practical next steps.** Concrete on-ramp for someone who isn't a
   tinkerer: turn on read-only first, test on a closed matter, treat output
   like a fast first-year associate's draft, don't flip on send/write
   permissions firm-wide without a supervision policy.
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

- Concrete example for §5 — waiting on Zack.
- Whether/how to pull anything from the Sam Harden podcast transcript.
