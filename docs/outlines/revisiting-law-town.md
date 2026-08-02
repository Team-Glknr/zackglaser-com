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

Remapped 2026-08-02 onto docs/09-writing-voice.md's five-part shape. **Decided
2026-08-02: this piece uses true H2 subheads**, not continuous prose — a
deliberate exception to the one house precedent (the field-notes take runs
headerless), made for SEO/AEO: this is a search-and-cite-shaped topic
("is Claude's Microsoft 365 connector safe," "how do lawyers use AI
connectors"), and headers are the chunk boundary an answer engine actually
extracts from. Opening and Ending stay unheaded — a header before the hook or
one literally labeled "Conclusion" would be exactly the formulaic scaffolding
the style guide warns against.

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

**H2: "The Forecast Was Right. The Tools Weren't There Yet."**

Why "Mayor of Law Town" read as sci-fi in January: not wrong, just built on
tools that lived in an engineer's world (Claude Code, Cowork, Antigravity —
same territory as Yegge's Gas Town, which he explicitly gates to "Stage 6-7"
developers). Reasonable to have filed it as "interesting thought experiment,
check back in a few years." The actual distinction to draw: the gap wasn't a
technology gap, it's a comprehension gap — and unlike the first draft's
"that's the part worth naming precisely" framing (flagged as overused
phrasing, avoid repeating it), land this as an ongoing, present-tense close
rather than a completed one: the gap is *closing*, not closed. Working line
from Zack, 2026-08-02: "More and more, that comprehension gap is starting to
close. The technology, previously obfuscated behind a terminal, is now easily
accessible to most attorneys." Also: don't re-name "Welcome to Law Town" here
— it's already introduced in the Opening, so this section should refer to
"Sam's piece"/"his post," not reintroduce the title.

### 3. Development

**H2: "The Connector Went Free. Claude Moved into Word and Outlook."**

Sharpened 2026-08-02, per Zack: the finer point isn't that a new AI
capability shipped — coders could always read/write files and run Skills via
Claude Code/Cowork. What actually changed is who can walk through that door
and which door they use: an ordinary attorney ("Jamie Attorney"), with
nothing but Claude Chat and an admin's approval, can now read and write
client files via the connector (write access shipped July 2026 — see
research notes) and, more importantly for the "Law Town" crowd, run Skills
against those Microsoft 365 files without touching Cowork or Code at all.
This section now absorbs the July write-access milestone, so it covers all
four releases (Oct/April/May/July) and lands the "same AI, new door" point.
Full drafted text lives in the post file / chat log, not duplicated here.

**H2: "A Demand Letter, Start to Finish"**

Make it concrete. From the Lawyerist episode (Sam Harden transcript,
~41:32–44:26): Zack walks through drafting a demand letter live — a
SharePoint connector points Claude at the client's discovery folder, an
off-the-shelf skill from the Claude-for-Legal GitHub plugin drafts the
letter, and then one plain-English correction ("I'm in Tennessee, I always
want you to draft this with a Tennessee jurisdiction — can you change that
portion of the skill?") turns a generic template into the firm's own version.
Use this over a hypothetical: it chains connector → skill → correction in
one breath, using the exact category of tool the piece is about, not an
adjacent one.

### 4. Application

**H2: "Is This Safe for Confidential Client Data?"**

Development now covers the July write-access announcement, so this section
opens straight on the guardrails rather than re-announcing anything: admin
has to re-consent to the updated permission set, org has to turn write tools
on per account (blocked by default otherwise), Teams stays read-only no
matter what, data is tenant-bound and not cached, and — the sharpest detail —
Claude can never exceed the Microsoft 365 permissions of the person it's
acting for. No SharePoint access for the human, none for Claude either. This
is the texture a vision-level pitch skips, and what makes it legible as "a
setting" rather than "a leap of faith." The one deliberate question-style
header in the piece — it mirrors how someone would actually phrase this to a
search engine or an AI assistant, and the section resolves it rather than
gesturing at it, which is what earns it the question form (see
docs/09-writing-voice.md's rule on when a question is allowed to carry a
section).

**H2: "Get Your SOPs First"**

Practical next steps, led by Sam's own rule from the transcript: *"if you
don't have good SOPs for how you do your work right now, it's not the best
idea to go into Claude and start creating a bunch of skills to do different
things. Get SOPs first."* His test for a good one: write it the way you'd
brief "a new person in your office who was really smart, but needed
direction." Pair with Zack's own line from the same conversation — "if you
just use AI to enhance a shitty process, it's just gonna do that process
faster" — as the one-sentence version of why this order matters. Concrete
on-ramp from there: turn on read-only first, test on a closed matter, treat
output like a fast first-year associate's draft, don't flip on send/write
permissions firm-wide without a supervision policy.

### 5. Ending

The forecast held up; what's lagging is everyone's sense of how close it
already is. Sharper than "here's what's coming" — return to the scaffolding
image from the opening if it earns a second look.

## Research notes (grounding for Development/Application, so it isn't
re-researched at draft time)

Three separate Anthropic releases get conflated in casual conversation —
worth keeping distinct in the piece, and worth getting the sequence right
since it's the actual six-month timeline the piece is arguing from:

- **Oct 2025** — Microsoft 365 connector launches. Enterprise-only,
  **read-only**: search/read across SharePoint, OneDrive, Outlook, Teams via
  delegated Microsoft Graph permissions.
- **April 2026** — connector expands to all plans (Free, Pro, Max, Team,
  Enterprise). Still read-only at this point.
- **May 7, 2026** — separate release: Claude add-ins for Word, Excel,
  PowerPoint go GA, Outlook joins in beta. Claude runs as one persistent
  agent across the four apps, carrying conversation context as you move
  between an email, a doc, and a spreadsheet without re-explaining the work
  in progress.
- **July 7, 2026** — the connector gets **write access**, across all plans:
  send email, manage drafts and calendar events, update mailbox settings,
  create/update files in OneDrive and SharePoint. This is the milestone that
  actually operationalizes Sam's "workflow execution" idea, not just
  visibility into case files. Requires deliberate admin action, not
  automatic: a Microsoft Entra admin has to re-consent to the updated
  permission set, then the org has to turn on write tools per account. Orgs
  that were already connected before write tools launched have them blocked
  by default until an admin opts in. Teams stays read-only regardless —
  Claude can pull context from a Teams channel but can't post to one.
  Critically: Claude can never exceed the M365 permissions of the person
  it's acting on behalf of — no access to a SharePoint site for the human,
  none for Claude either. Data stays tenant-bound, not cached. Anthropic
  holds SOC 2 Type II, ISO 27001, GDPR.
  ([security guide](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide),
  [setup/plan-availability doc](https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector),
  [UC Today coverage of the April expansion](https://www.uctoday.com/productivity-automation/anthropic-expands-claude-microsoft-365-integration-for-all-user-plans/))

~~Decision on where July write access goes~~ — resolved 2026-08-02: "The
Connector Went Free. Claude Moved into Word and Outlook." now covers all four
releases (Oct/April/May/July), framed around who gets access rather than
what's newly possible. "Is This Safe for Confidential Client Data?" opens
straight on guardrails instead.

Sam's specific examples in "Law Town" (timeline generation from medical
records, discovery-email triage, appellate-transcript analysis) all ran on
Claude Code / Cowork / Antigravity — the connector and app integrations are
the more mainstream-reachable version of the same underlying capability.

## Open questions

- ~~Concrete example for Development~~ — resolved: the demand-letter walkthrough from the transcript.
- ~~Whether/how to pull from the Sam Harden podcast transcript~~ — resolved: used for Development and Application.
- How much of Sam as a named, quoted source vs. folded-in-unattributed paraphrase — he's a coworker, so keep references plain and functional (this piece cites him the way it would cite any writer whose work is on point) rather than either over-crediting or going quiet about the connection.
- ~~Subheads vs. continuous prose, for SEO/AEO~~ — resolved 2026-08-02: true
  H2 subheads, five of them, listed under Structure above. Deliberate
  departure from the field-notes take's headerless precedent.
- ~~Target word count~~ — resolved 2026-08-02: 800–1,000 words.
