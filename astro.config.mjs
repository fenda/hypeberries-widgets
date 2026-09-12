// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: "https://widgets.hypeberries.com",
	build: {
		inlineStylesheets: "always",
	},
});
