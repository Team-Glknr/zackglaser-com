# Feature backlog

This doc is private; it exists to make "what's next" a deliberate choice across every workshop project — Building This Site, Morning Report, and whatever comes after — instead of whatever idea happens to be freshest in memory. It sits one level above the build log: an idea lives here until it actually gets built, at which point it becomes one or more numbered entries and its line here goes away.

## How to use this

- Add an idea the moment it occurs, with a one-line note on where it came from. Ideas noticed sideways while building something else (see entries 026–027) are exactly as valid as ones planned in advance.
- Pick the next build deliberately from this list rather than from memory.
- The build log is the permanent record, not this doc — once something ships, delete its line here. Don't let the same idea rot in two places.
- "Tabled" isn't "rejected." Leave the one-line reason it's on hold so that reasoning doesn't have to be reconstructed later. If there's no reason recorded yet, say so honestly rather than inventing one.
- This doc doesn't replace docs/02's own entry backlog for Building This Site — that list tracks *numbered entries already committed to*; this one tracks *features not yet scoped into entries at all*.

## Morning Report

- **Near-duplicate detection beyond filenames** — perceptual hashing for images, fuzzy text matching for PDFs. Filename-pattern scoring misses near-dupes that don't share a name.
- **Session history** — log what got trashed over time, track total mb freed across sessions. Right now there's no memory beyond the single day's summary screen.
- **Folder descent** — optionally recurse into subdirectories instead of only scanning the top level of Downloads.
- **Claude memory across sessions** — if a file gets kept three times running, stop resurfacing it. Every session currently re-scores cold.

## Building This Site

- **A game as a front door** — tabled; three prototypes already sketched in `docs/mockups/`. No reason for the hold is recorded yet beyond "no resolution reached" — worth revisiting rather than leaving unexplained. Also holds a reserved slot as entry 028 in docs/02's backlog.
- **A "last updated" signal on project/pillar cards** — noticed while shipping entries 026–027 (chapter 8): neither `/workshop` nor a project rollup shows when a project last moved, so a returning visitor can't tell what's freshly active without opening each one.
- **Thumbnails on the remaining card types** — the chapter list, entry list, and pillar post feed are still text-only rows. Entry 027 scoped this out deliberately (those are shared-border list rows, not individually boxed cards, so fitting an image in cleanly means redesigning the component, not adding an `<img>` tag) — not an oversight, but still open.

## General / cross-project

- (nothing yet)
