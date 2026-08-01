---
title: "Morning Report"
series: morning-report
status: active
teaser: "A local app that opens at 8am, scores my Downloads folder by how deletable each file is, and makes cleaning it out a ten-file-a-morning game instead of a chore I never get to."
cost: "~42 min + Anthropic API usage"
authorship: duet
---

Downloads folders don't get cleaned because deciding what to delete, one file at a time, costs more than most people are willing to pay. Morning Report doesn't automate the deletion — it automates the presentation of the decision. A scoring algorithm ranks files by how deletable they look (duplicates, junk filenames, age); Claude adds the semantic read a score alone can't give ("this is an old export of a file you already fixed"); I click trash, keep, or later on ten files a morning until the folder stops growing faster than I clean it.

Six entries across three chapters: the core decision-cost framing and the score-then-Claude architecture, shaping the game loop and matching it to the site's own design system, then polishing the theme handling and publishing the source itself — live at [github.com/thirdth/morning-report](https://github.com/thirdth/morning-report), the same account the site lives under.

Drill into any chapter for the full recap, or any entry for the raw log.
