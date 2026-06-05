// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://visitvineo.yehiel.co.il',
	i18n: {
		defaultLocale: 'he',
		locales: ['he', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
