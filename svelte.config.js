import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

const config = {
	extensions: ['.svelte'],
	kit: { adapter: adapter() },
	preprocess: [vitePreprocess()],
};

export default config;
