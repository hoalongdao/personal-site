import type { APIContext } from 'astro';
import { publicExclusives, allDigests, slugOf, url } from '../lib/content';

export async function GET(context: APIContext) {
  const abs = (p: string) => new URL(url(p), context.site!).href;
  const entries: { loc: string; lastmod?: string }[] = [
    { loc: abs('') }, { loc: abs('exclusives/') }, { loc: abs('digests/') }, { loc: abs('dashboard/') },
  ];
  for (const e of await publicExclusives()) entries.push({ loc: abs(`exclusives/${slugOf(e)}/`), lastmod: e.data.date.toISOString() });
  for (const e of await allDigests()) entries.push({ loc: abs(`digests/${slugOf(e)}/`), lastmod: e.data.date.toISOString() });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
