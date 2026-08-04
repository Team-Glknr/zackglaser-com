// Creates a Buttondown draft from a Knolling newsletter markdown file.
// Usage: node --env-file=.env.local scripts/buttondown-draft.mjs <path-to-md>
//
// Status is always hardcoded to "draft" below — this must never send an
// email on its own. Sending stays a deliberate manual click in Buttondown.

import { readFileSync } from "node:fs";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node --env-file=.env.local scripts/buttondown-draft.mjs <path-to-md>");
  process.exit(1);
}

const apiKey = process.env.BUTTONDOWN_API_KEY;
if (!apiKey) {
  console.error("Set BUTTONDOWN_API_KEY in .env.local");
  process.exit(1);
}

const raw = readFileSync(filePath, "utf8");
const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
if (!match) {
  console.error(`${filePath} doesn't look like a frontmatter markdown file (missing --- ... --- block).`);
  process.exit(1);
}
const [, frontmatter, rest] = match;

const titleMatch = frontmatter.match(/^title:\s*"?(.*?)"?\s*$/m);
if (!titleMatch) {
  console.error(`No title field found in ${filePath}'s frontmatter.`);
  process.exit(1);
}
const subject = titleMatch[1];

const body = rest.trim().replace(/\]\(\//g, "](https://zackglaser.com/");

const res = await fetch("https://api.buttondown.com/v1/emails", {
  method: "POST",
  headers: {
    Authorization: `Token ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ subject, body, status: "draft" }),
});

if (!res.ok) {
  console.error(`Buttondown API error ${res.status}:`, await res.text());
  process.exit(1);
}

const email = await res.json();
console.log(`Draft created: "${subject}" (id: ${email.id})`);
console.log("It's sitting in Buttondown as a draft — go send it manually when you're ready.");
