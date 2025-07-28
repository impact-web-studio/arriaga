// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// Default Website Config
	// TODO: UPDATE WEBSITE DOMAIN
	site: 'https://worksiteleads.com',
	base: '/',
	trailingSlash: 'never',

	integrations: [
		sitemap(),
		icon({
			include: {
				tabler: ['*'],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
