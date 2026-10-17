import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = {
  title: z.string(),
  date: z.coerce.date(),
  slug: z.string().optional(),
  excerpt: z.string().default(''),
  tags: z.array(z.string()).default([]),
};

const exclusives = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/exclusives' }),
  schema: z.object({ ...base, members: z.boolean().default(false) }),
});

const digests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/digests' }),
  schema: z.object(base),
});

export const collections = { exclusives, digests };
