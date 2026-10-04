import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    key: z.string(),
    order: z.number().int(),
    title: z.string(),
    authors: z.array(z.object({
      name: z.string(),
      self: z.boolean().default(false),
    })).min(1),
    venue: z.string(),
    year: z.number().int(),
    selected: z.boolean().default(false),
    preview: z.string().optional(),
    links: z.object({
      arxiv: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
    }).default({}),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

export const collections = { publications };
