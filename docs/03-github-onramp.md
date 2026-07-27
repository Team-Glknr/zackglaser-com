# zackglaser.com — the GitHub on-ramp

Status: working draft · Last updated: 2026-07-26
Owner: Zack Glaser
Companion to: `docs/01-site-brief.md` (§8 references this doc) · Build log entry 006

---

## 1. Premise

A core job of the site is introducing attorneys to concepts. One of those concepts is GitHub itself — version control, change history, proposing edits for review. Rather than writing *about* GitHub, the site *is* the demonstration: it lives in a public repo, and every reader interaction with the site is quietly a GitHub interaction.

The pitch to lawyers, in their own language: a commit history is a redline trail; a pull request is a proposed edit circulated for review; blame answers "who changed this clause, when, and why." Lawyers already believe in these things — they just don't know GitHub is where the rest of the world does them.

## 2. The ladder

Three features, ordered by commitment required from the reader:

| Rung | Feature | What the reader does | GitHub concept learned |
|------|---------|----------------------|------------------------|
| 1 | Site-as-example (footer) | Clicks "see the source & every change ever made" | Repos, commits, history |
| 2 | Comments via giscus | Creates a GitHub account to leave a comment | Accounts, Discussions |
| 3 | "Suggest an edit" links | Edits a page in the browser; GitHub walks them through fork → branch → PR | Forks, branches, pull requests |

Each rung is useful on its own; together they take a reader from lurker to first pull request without ever using the word "fork" up front.

## 3. Decision: giscus over utterances

Comments run on **giscus** (giscus.app). Reasons: actively maintained; backed by GitHub Discussions rather than Issues (comments don't pollute the issue tracker); threaded replies and reactions; lazy loading; theme support. Utterances was the runner-up — simpler, but semi-dormant and Issues-backed.

Cost: both require readers to sign in with a GitHub account to comment. For this site that cost is the point — it's rung 2 of the ladder.

## 4. Prerequisites (one-time setup)

1. **Make `thirdth/zackglaser-com` public.** Pre-flight completed 2026-07-26: `.env.local` has never been tracked and the history (3 commits at time of check) contains no secrets. Re-run `git log --all -p -- .env*` before flipping the switch if more commits have landed.
2. **Enable Discussions** on the repo (Settings → Features → Discussions).
3. **Install the giscus GitHub App** on the repo (github.com/apps/giscus).
4. **Create a Discussion category** named `Comments`, type **Announcement** — so only giscus (not drive-by visitors) can open new threads.
5. **Generate the embed config** at giscus.app: mapping = `pathname`, strict matching on, lazy loading on. Capture the `data-repo-id` and `data-category-id` values it emits.

## 5. Implementation (Astro)

### 5.1 Footer: site-as-example

Add to the site-wide footer (every page):

> This site lives in a public GitHub repo — [read the source](https://github.com/thirdth/zackglaser-com) or [see every change ever made to it](https://github.com/thirdth/zackglaser-com/commits/main).

Voice check: plain-spoken, no jargon. "Every change ever made" teaches what a commit history is before naming it.

### 5.2 Comments: `src/components/Comments.astro`

A single component dropped into the post layout, below the post body:

```html
<section class="comments">
  <p class="comments-note">
    Comments run on GitHub Discussions. You'll need a (free) GitHub
    account — which is rather the point around here.
  </p>
  <script src="https://giscus.app/client.js"
    data-repo="thirdth/zackglaser-com"
    data-repo-id="<from giscus.app>"
    data-category="Comments"
    data-category-id="<from giscus.app>"
    data-mapping="pathname"
    data-strict="1"
    data-reactions-enabled="1"
    data-input-position="top"
    data-theme="preferred_color_scheme"
    data-lang="en"
    data-loading="lazy"
    crossorigin="anonymous"
    async>
  </script>
</section>
```

Notes: zero client JS shipped by us (fits brief §7/§8 — the script is giscus's, lazy-loaded); `pathname` mapping means URLs are the identity of a thread, so don't rename slugs after publication without migrating the discussion.

### 5.3 "Suggest an edit" links

On every content page, near the footer of the post:

> Spot a typo or a bad take? [Suggest an edit](…) — no coding required; GitHub will walk you through it.

The link targets GitHub's web editor for the post's source file. Astro content collections expose the file path on each entry (`entry.filePath`), so the layout builds:

```
https://github.com/thirdth/zackglaser-com/edit/main/${entry.filePath}
```

For non-collection pages (e.g. `/about`), hardcode the path or skip the link. When a logged-in reader without write access clicks through, GitHub automatically offers to fork and open a pull request — that flow *is* the tutorial, and it's Github's job to run it, not ours.

## 6. Tradeoffs accepted

- **Drafts are public.** `status: draft` hides posts from the site, not from the repo. Accepted — this is a build-in-public site and the build log already commits to "dead ends and all." Anything genuinely private stays out of the repo.
- **Comment moderation happens in GitHub**, not a dashboard. Fine at this scale; revisit if it isn't.
- **giscus is a third-party dependency.** If it dies, the comments live on as plain GitHub Discussions — the data is ours-adjacent, not hostage.

## 7. Sequencing

Ships with Phase 2 (Build) of the brief's roadmap — the footer and edit links are layout work, giscus is one component. The repo goes public **before launch**, so launch-day readers land on rung 1 immediately. Build log entry 006 writes up this decision.

## 8. Open questions

- Copy for the three touchpoints — current drafts above are placeholders pending a brand voice pass; not addressed in entry 013, no entry assigned yet.
- Whether rung 3 eventually earns a fourth rung: a short "your first pull request happened here" explainer page linked from the PR confirmation. Defer until someone actually submits one.
