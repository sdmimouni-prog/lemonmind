import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const modeFlagIndex = process.argv.indexOf('--mode');
const modeFlag = process.argv.find((arg) => arg.startsWith('--mode='));
const modeFromFlag = modeFlagIndex >= 0 ? process.argv[modeFlagIndex + 1] : modeFlag?.split('=')[1];
const mode = modeFromFlag || (process.argv.includes('build') || process.argv.includes('preview') ? 'production' : 'development');
const fileEnv = loadEnv(mode, process.cwd(), '');

Object.entries(fileEnv).forEach(([key, value]) => {
  if (process.env[key] === undefined) {
    process.env[key] = value;
  }
});

const site = process.env.PUBLIC_SITE_URL || fileEnv.PUBLIC_SITE_URL || 'https://lemonmind.agency';

export default defineConfig({
  site,
  output: 'server',
  adapter: process.env.VERCEL ? vercel() : node({
    mode: 'standalone',
  }),
  devToolbar: { enabled: false },
  server: {
    host: process.env.ASTRO_HOST || '127.0.0.1',
    port: Number.parseInt(process.env.ASTRO_PORT || '4323', 10),
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
