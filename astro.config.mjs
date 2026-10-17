import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hoalongdao.github.io',
  base: '/personal-site',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
