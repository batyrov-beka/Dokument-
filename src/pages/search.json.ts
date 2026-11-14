import { getCollection } from 'astro:content';
import { categoryById } from '../data/categories';

export async function GET() {
  const guides = await getCollection('guides');
  const items = guides.map((g) => ({
    id: g.id,
    title: g.data.title,
    summary: g.data.summary,
    category: categoryById(g.data.category).title,
    keywords: g.data.keywords,
  }));
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
