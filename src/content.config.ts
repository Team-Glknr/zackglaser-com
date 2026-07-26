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

export const collections = { posts, newsletter };
