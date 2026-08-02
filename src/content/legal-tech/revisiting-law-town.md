---
title: "Revisiting Law Town"
date: 2026-08-02
status: published
pillar: legal-tech
format: take
authorship: duet
---

I spend a significant part of my day building scaffolding these days. Yes, I run bots and agents—plenty of them. But most of the actual work is building the infrastructure they operate inside: the permissions, the templates, the guardrails that decide what an agent can touch on its own and what it has to hand back to me.

That's not a hobby anymore. It's most of the job.

Six months ago, Sam Harden described this exact shift in ["Welcome to Law Town"](https://samharden.substack.com/p/welcome-to-law-town)—itself a legal-practice riff on Steve Yegge's ["Welcome to Gas Town,"](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) which pictures engineers running fleets of AI agents like a factory floor. The lawyer becomes the *Mayor*, Sam wrote: less someone drafting every letter by hand, more someone supervising a crew that does it. At the time, that read like a forecast. A good one—but a forecast, built on tools that lived in an engineer's world, not an ordinary law practice.

It isn't a forecast anymore.

## The Forecast Was Right. The Tools Weren't There Yet.

Sam wasn't describing science fiction. He was describing Claude Code and Claude Cowork—real products, doing real work, for people who already knew how to run them. Steve Yegge's "Gas Town," the system Sam was riffing on, orchestrates twenty or thirty AI agents at once, and Yegge is explicit that it's only for engineers already comfortable running several agents a day. That's not a knock on the idea. It's an honest description of who could act on it in January: people who already lived inside a terminal.

For everyone else, the reasonable response was to file Sam's piece under interesting, check back later. Not because the argument was weak. Because there was nothing yet you could point a normal attorney at and say, try this on Tuesday.

More and more, that comprehension gap is starting to close. The technology, previously obfuscated behind a terminal, is now easily accessible to most attorneys. The distance between "this is possible" and "this is now sitting in the app you already have open" is closing.

## The Connector Went Free. Claude Moved into Word and Outlook.

None of this required a new capability. Coders could already do it—Claude Code and Claude Cowork have been able to read and write files, and run *Skills*, for close to a year. What changed is who else can walk through that door, and which door they use.

The [Microsoft 365 connector](https://claude.com/claude-for-microsoft-365)—Anthropic's bridge into SharePoint, OneDrive, Outlook, and Teams—launched in October, enterprise-only, read and search only. In April, it opened to every plan, including free. A month later, Claude's add-ins for Word, Excel, and PowerPoint went to general availability, with Outlook joining in beta. In July, the connector itself picked up write access.

Put those four releases together and your everyday attorney—no terminal, no Cowork, nothing but Claude Chat and an admin's approval—can now read and write the same client files a developer could always reach. More to the point for anyone who read "Welcome to Law Town": that attorney can run Skills against those files. The SOP-as-Skill idea Sam described six months ago, aimed at whatever's sitting in SharePoint, from the ordinary chat window. That's the door that opened. Not a new kind of AI. The same AI, reachable by someone who was never going to install Claude Code.

## A Demand Letter, Start to Finish

I ran through exactly this, live, on the [Lawyerist Podcast](https://lawyerist.com/podcast/what-claude-means-for-law-firms-ai-skills-connectors-and-workflow-strategy-with-sam-harden/) with Sam Harden a few months back—worth walking through because the value is in how unremarkable it is. Point Claude at the discovery folder in SharePoint. Ask for a demand letter. Claude reads the file, pulls the relevant facts, and produces a draft: competent, generic, built off whatever template the Skill defaults to.

Then the correction: "I'm in Tennessee. I always want this drafted under Tennessee jurisdiction. Update the Skill so it does that from now on." Claude rewrites that section, and the fix sticks the next time I ask for a demand letter.

That's the whole workflow. A connector to find the file, a Skill to draft it, one plain-English correction to make it mine instead of generic. Nothing in that sequence touched a settings menu, a line of documentation, or anything resembling code. It required knowing what a good demand letter looks like—something any attorney already knows.

## Is This Safe for Confidential Client Data?

Genuinely, yes—with real qualifications, not marketing ones. Write access doesn't turn on by itself. A Microsoft Entra administrator has to [re-consent to the updated permission set](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide), and then the organization has to switch write tools on for specific accounts. If a firm connected before write access existed, it stays off until someone with admin rights decides otherwise. Nobody wakes up to Claude suddenly able to send email on their behalf.

The detail that matters most: Claude can never see more than the person it's acting for can see. If an associate doesn't have access to a matter in SharePoint, Claude doesn't either, no matter what's asked of it. Teams stays read-only regardless of any setting—Claude can pull context from a channel, but it can't post to one. Data stays inside the firm's own tenant; nothing gets cached or pulled out to train anything.

None of that replaces judgment. It's the difference between trusting the vendor and reading the settings page, then deciding—which is a much easier thing to ask a managing partner to do than "trust me."

## Get Your SOPs First

Sam's actual advice, from the same conversation: "If you don't have good SOPs for how you do your work right now, it's not the best idea to go into Claude and start creating a bunch of Skills to do different things. Get SOPs first." His test for a good one is worth stealing directly: write it the way you'd brief a smart new hire who needs direction—what you'd actually tell them, what you'd hand them to work from. That's the Skill.

If your SOPs are crap, though, your output is going to be crap—just faster. So it's worth taking this moment to sharpen your axe.

In order, then: write down how you actually do the thing—the demand letter, the intake, the deposition summary—before asking Claude to do it. Turn on read access before write access. Test it on a closed matter before a live one. Treat the first output the way you'd treat a first-year associate's first draft: read every word, expect to redline it, don't sign your name to anything you haven't actually checked. And don't turn on write permissions for the whole firm until someone's watched how it goes for a handful of people first.

Sam's forecast held up. What's lagging is everyone else's sense of how close it already is—not in some hypothetical rollout eighteen months out, but this quarter, gated by nothing harder than an admin's checkbox. I still spend most of my day building scaffolding. The difference, six months on, is how many other people now have the parts to build their own.
