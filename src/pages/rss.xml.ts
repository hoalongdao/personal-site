import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publicExclusives, allDigests, slugOf, url, SITE_NAME, SITE_DESC } from '../lib/content';

export async function GET(context: APIContext) {
  const ex = (await publicExclusives()).map((e) => ({
    title: e.data.title, pubDate: e.data.date, description: e.data.excerpt,
    categories: ['exclusive', ...e.data.tags], link: url(`exclusives/${slugOf(e)}/`),
  }));
  const dg = (await allDigests()).map((e) => ({
    title: e.data.title, pubDate: e.data.date, description: e.data.excerpt,
    categories: ['digest', ...e.data.tags], link: url(`digests/${slugOf(e)}/`),
  }));
  const items = [...ex, ...dg].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()).slice(0, 50);
  return rss({ title: SITE_NAME, description: SITE_DESC, site: new URL(url(''), context.site!).href, items });
}
