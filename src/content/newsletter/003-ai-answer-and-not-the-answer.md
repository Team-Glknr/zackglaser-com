---
title: "AI Is Both the Answer and Not the Answer"
date: 2026-08-16
status: draft
pillar: legal-tech
format: teardown
newsletter: 3
authorship: human
tags: []
---

"I have an issue that I need to solve and I think AI can help me." 

That's a common refrain rattling around in my head these days. I know I have a problem. I have the metes and bounds. And I think I can just have AI go in and "think" for me in some way. 

This idea is both empowering and scary at the same time. How do I teach it to think like me? How much autonomy should I give it? How do I maintain privacy and confidentiality?

As a lawyer, it would be easy to just throw my hands up here and either give up, or look for a bespoke solution from an existing provider. Either way, I'm probably not solving my unique problem. At least not today.

If I were to stop there, though, I'd miss out on the actual, real-world benefits of the current large language models. More and more, I'm finding that the solution to my problem isn't to slap some AI on it. Rather, it's to use AI in the process of solving the issue. 

Stay with me here, because I'm not sure that was a clear sentence. 

**The Problem**
I need to transfer some files from an old case management database of mine to a new, bespoke database that another attorney built to manage their cases.

**The Perceived Solution**
1. Export my database locally into a .csv or .json file format.
2. Get an example import .csv or .json from the target database. 
3. Spin up a local LLM on an old machine I have lying around.
4. Ask the LLM to manipulate my .csv or .json file into a form matching what the new database expects.

When we approach the problem above from a "have AI will travel" standpoint, the present solution seems pretty reasonable. All the client data stays on my machine, I can *train* the machine to adjust the data the way I want it to. And we get from point A to point B without me having to manually do all the adjustments.

But my data isn't some mess of unstructured information. It's in a database, stored in tables, with each client or matter's information stored the same way as the others. And the target location isn't some unstructured prose. It's also a database. And the information will go into it the same way each time. We don't need translation, or intuition here. In fact, "most likely" is reducing our confidence in the data, not increasing it. 

We have structured data that needs to turn into slightly different structured data. What we need is a script that we can run on the input data that will turn it into the output data. 

But, I don't know how to write that script. Frankly, I don't know what sort of language, or program, or magic wand I'm supposed to use to write that script. 

This is where an LLM enters the equation. And, in this case, the LLM doesn't even have to have access to the client data. So it doesn't need to be a private LLM. All it would need is the structure of the output data and the structure of the input data. Essentially, just the headers of the tables, and the information type that would go into each place.

So here's what that actually looks like. I feed the LLM the structure of my source data as a JSON — table names, field names, field types — and I feed it the same structure for the target database. Then, instead of asking it to guess where the fields that don't line up should go, I go through those one by one with it and make the call myself: this maps to that, this one gets dropped, this one gets split in two. The LLM never decides a mapping. What it hands back, once every field is accounted for, is the script that actually does the transformation.

Importantly, this avoids three specific issues that often plague us as attorneys, 1) client privacy, 2) out of control token usage, and 3) the potential for hallucinations. 

Client data never has to leave your machine, since you're running a local script against it. Token usage is limited to building the script, not to processing the actual data. And the hallucination risk nearly disappears — the model never makes a mapping decision on its own, so the only thing it has to get right is code, and code is something you can test.

Going field by field takes longer than telling a model to "just handle it." But that's the price of trusting the output instead of hoping for it, and it's a price paid once — not every time the script runs.

This doesn't mean that none of my problems can (or should) be solved with AI processing. But, where the input and output are both structured and repeatable, AI's job it to generate the tool, not to be the tool. Which, almost counter-intuitively, increases the usefulness of standard LLMs in the legal practice. 

Notice what happened to the questions I started with. I never had to teach the model to think like me, because I never asked it to think — I asked it to write. I never had to decide how much autonomy to give it, because it never touched my data at all. The only question left standing was whether I can trust the output. And unlike the other two, that one I can check.

It's not that there is some new magic tool on the market that will do all of the work for me. I simply have the ability to build tools that already existed on my own and with very little investment. 

-- Zack