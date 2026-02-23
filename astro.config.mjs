import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://github.com/skilldill/dailyTipsTricks',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
