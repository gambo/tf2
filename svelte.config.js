import { mdsvex } from 'mdsvex';
import { remarkAutoDiff } from 'remark-auto-diff';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	rehypePlugins: [],
	remarkPlugins: [remarkAutoDiff],
};

const config = {
	extensions: ['.svelte', '.svx'],
	kit: { adapter: adapter() },
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
};

export default config;
