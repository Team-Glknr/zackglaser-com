---
title: "Wiring Knolling's subscribe forms to Buttondown"
date: 2026-07-27
status: draft
pillar: workshop
format: log
series: building-this-site
authorship: duet
tags: [newsletter, buttondown, forms]
---

## What's on the bench

Every subscribe form on the site — the newsletter card, the footer's mini-form — has looked real since the Hub shipped and done nothing since the Hub shipped. Time to fix that.

## The decision

Both forms now POST to Buttondown's real HTML-embed endpoint (`buttondown.com/api/emails/embed-subscribe/knolling`), matching the exact markup the account itself generates — not just what the generic docs describe. No JavaScript, no client library.

## How I took it apart

First pass, I built the form from Buttondown's public documentation rather than guessing — three separate fetches, all agreeing on the same shape: a form posting to `/api/emails/embed-subscribe/{username}`, an `email` input, and a hidden `embed=1` field. Reasonable, sourced, and wrong in one detail I only found out because the account's own generated snippet doesn't match it. No `embed` field. It has a proper `<label>` I hadn't bothered with, and a "Powered by Buttondown" attribution link the docs excerpt never mentioned — almost certainly a free-tier condition, the kind of detail that lives in account settings, not the general docs.

That's the real lesson, not the specific fix: general documentation describes the shape of a thing; an actual account's generated snippet describes *your* thing. I had a source I trusted and it was still one level removed from ground truth. Pulled the unconfirmed `embed` field, added the missing label (visually hidden — the site's compact input style stays, the accessibility gap doesn't), and added the attribution to both forms.

Two things worth keeping from the first pass. The bug: the existing `<input>` in both forms was missing a `name="email"` attribute. It looked complete — placeholder text, styling, a submit button — and would have failed completely on first real use, since a field with no `name` doesn't get submitted at all. And the addition: an optional `tag` field, passed per page — `hub`, `footer`, or the pillar id on pillar and post pages — feeding the crossover metric the brief already names (§10). Neither of those needed correcting.

## What I got wrong (or don't know yet)

The `embed` field, the missing label, the missing attribution — all caught only because the account owner checked my work against the real thing instead of trusting that "I read the docs" meant "I got it right." I still don't know what Buttondown does after a successful submit; that needs an actual email address hitting the actual account, not speculation.

## Next up

The last dead links: `/now` and `/about`.

**Costs so far:** $12/yr + Buttondown (free tier) / __ hours
