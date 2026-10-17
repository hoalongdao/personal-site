import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE_NAME = 'hoalongdao';
export const SITE_DESC = 'Exclusives, daily digests, and a public trading dashboard.';

export const url = (p = '') => {
  const b = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${b}/${p.replace(/^\//, '')}`;
};

export const slugOf = (e: CollectionEntry<'exclusives'> | CollectionEntry<'digests'>) =>
  e.data.slug || e.id;

const byDate = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** Public exclusives only: members:true posts are never exposed anywhere. */
export async function publicExclusives() {
  return (await getCollection('exclusives', (e) => e.data.members !== true)).sort(byDate);
}

export async function allDigests() {
  return (await getCollection('digests')).sort(byDate);
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
