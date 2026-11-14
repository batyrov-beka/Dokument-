import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS } from './data/categories';

/**
 * Жол көрсөткүчтөр: src/content/guides/*.md
 * Файлдын аты = беттин дареги (мисалы, id-karta.md → /jol/id-karta/).
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(CATEGORY_IDS),
    keywords: z.array(z.string()).default([]),
    where: z.string(),
    cost: z.string(),
    time: z.string(),
    documents: z.array(z.string()).min(1),
    steps: z.array(z.string()).min(1),
    tip: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    official: z.object({ label: z.string(), url: z.string().url() }).optional(),
    updated: z.coerce.date(),
    popular: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { guides };
