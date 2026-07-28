import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Front-matter schema per docs/01-site-brief.md §6.
const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  status: z.enum(['draft', 'published']),
  // Two axes, never conflated (brief §6): pillar = subject, format = method.
  pillar: z.enum(['legal-tech', 'running', 'workshop', 'field-notes']),
  format: z.enum(['teardown', 'log', 'take']),
  series: z.string().optional(),
  newsletter: z.number().optional(),
  // Provenance, not a third axis — who typed it, never drives navigation. docs/04-ai-first.md §3.
  authorship: z.enum(['human', 'duet', 'bot']),
  tags: z.array(z.string()).default([]),
});

// Everything is a post in one system; pillar sections are filtered views (brief §5/§6).
const posts = defineCollection({
  loader: glob({
    pattern: '{legal-tech,running,workshop,field-notes}/**/*.md',
    base: './src/content',
  }),
  schema: postSchema,
});

// Newsletter issues are a separate archive, not a pillar (see README repo map).
const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
  schema: postSchema.extend({ newsletter: z.number() }),
});

// A build-log project rolls up a `series` of posts (e.g. building-this-site).
// /workshop lists projects; a project can exist before it has any chapters yet.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshop-projects' }),
  schema: z.object({
    title: z.string(),
    series: z.string(),
    status: z.enum(['active', 'done']),
    teaser: z.string(),
    cost: z.string(),
    authorship: z.enum(['human', 'duet', 'bot']),
  }),
});

// A chapter groups a numbered range of a project's entries under a rollup —
// recap prose, takeaways, and mistakes live in the body (see docs/02 §entry structure).
const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshop-chapters' }),
  schema: z.object({
    title: z.string(),
    project: z.string(), // matches a projects entry's `series`
    order: z.number(),
    entryStart: z.number(),
    entryEnd: z.number(),
    cost: z.string(),
    authorship: z.enum(['human', 'duet', 'bot']),
  }),
});

export const collections = { posts, newsletter, projects, chapters };
