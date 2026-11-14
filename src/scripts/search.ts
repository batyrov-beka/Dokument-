export interface SearchItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  keywords: string[];
}

const norm = (s: string) =>
  s.toLowerCase().replace(/ё/g, 'е').replace(/[«»"'.,:;!?()\-–—]/g, ' ');

/** Кыргыз сөздөрүнүн мүчөлөрүн эске алуу үчүн жөнөкөй "уңгу" */
const stem = (w: string) => (w.length > 6 ? w.slice(0, w.length - 3) : w.length > 4 ? w.slice(0, w.length - 1) : w);

let cache: Promise<SearchItem[]> | null = null;
export function loadIndex(): Promise<SearchItem[]> {
  cache ??= fetch('/search.json').then((r) => r.json());
  return cache;
}

export function search(items: SearchItem[], query: string): SearchItem[] {
  const terms = norm(query).split(/\s+/).filter((t) => t.length > 1).map(stem);
  if (!terms.length) return [];
  const scored = items.map((it) => {
    const title = norm(it.title);
    const kw = norm(it.keywords.join(' '));
    const sum = norm(it.summary);
    let score = 0;
    for (const t of terms) {
      let s = 0;
      if (title.includes(t)) s = 5;
      else if (kw.includes(t)) s = 3;
      else if (sum.includes(t)) s = 1;
      if (!s) return { it, score: 0 };
      score += s;
    }
    return { it, score };
  });
  return scored.filter((x) => x.score > 0).sort((a, b) => b.score - a.score).map((x) => x.it);
}
