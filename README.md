# personal-site

Static personal site for **Mike**, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://hoalongdao.github.io/personal-site/

## Where content goes

### Exclusives: `content/exclusives/*.md`

Long-form articles. Frontmatter (use single-quoted YAML scalars, never `\"` escapes):

```yaml
---
title: 'Article title'
date: 2026-10-17
slug: 'article-slug'
excerpt: 'One or two sentence summary.'
tags: ['tag-one', 'tag-two']
members: true   # optional
---
```

Posts with `members: true` are excluded from everything public: no page is generated, and they never appear in listings, the homepage hero, RSS, or the sitemap.

URL: `/personal-site/exclusives/<slug>/`

### Digests: `content/digests/YYYY-MM-DD.md`

Daily social-pulse digests. Same frontmatter minus `members`. Use the date as the slug.

URL: `/personal-site/digests/<slug>/`

### Dashboard data: `public/dashboard/book.json`

The `/dashboard` page is rendered at build time from this file (also served raw at `/personal-site/dashboard/book.json`). While `generated_at` is `null` the page shows **No data yet**.

```json
{
  "generated_at": "2026-10-19T20:15:00Z",
  "equity": 0, "cash": 0, "unsettled": 0, "buying_power": 0,
  "index": { "symbol": "SPY", "price": 0, "change_pct": 0, "as_of": "..." },
  "positions": [{ "symbol": "", "qty": 0, "avg_cost": 0, "price": 0, "market_value": 0, "unrealized_pl": 0, "unrealized_pl_pct": 0 }],
  "orders": [{ "symbol": "", "side": "buy", "qty": 0, "type": "limit", "limit_price": 0, "status": "open", "submitted_at": "..." }],
  "history": [{ "date": "2026-10-19", "equity": 0, "index_close": 0 }],
  "trades": [{ "time": "...", "symbol": "", "side": "buy", "qty": 0, "price": 0, "reasoning": "Why this trade was made." }]
}
```

## Homepage

- Hero: latest public Exclusive
- Signal block: latest Digest
- Listings of both

Also generated: `/rss.xml` and `/sitemap.xml` (public items only).

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm run build`, then the `dist/` folder is published to GitHub Pages (Pages source: GitHub Actions). The base path `/personal-site` is set in `astro.config.mjs`. To publish, commit a Markdown file or an updated `book.json` to `main`.

## Local development

```sh
npm ci
npm run dev      # http://localhost:4321/personal-site/
npm run build    # outputs dist/
```
