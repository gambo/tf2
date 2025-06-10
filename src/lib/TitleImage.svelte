<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		src: string;
		alt: string;
		children: Snippet;
	};
	let { src, alt, children }: Props = $props();
	let vtn = src.replaceAll('/', '');
</script>

<figure class="titleImage relative isolate z-10" style="view-transition-name: {vtn}">
	<img {src} {alt} />
	<figcaption>
		{@render children()}
	</figcaption>
</figure>

<style>
	figure {
		background: #ececec;
		border: 1px solid #ccc;
		box-shadow: 0 0 4px rgb(0 0 0 / 0.08);
		color: #242424;
		margin: 0.5rem -10rem 2rem;
		padding-bottom: 0;
		padding: 1rem;
		border-radius: 0.5rex;
		border: 1px solid rgb(0 0 0 / 10%);
	}
	figcaption {
		color: #666;
		font-size: 0.8rem;
		margin-bottom: 2rex;
		padding: 1rex 0;
	}
</style>
