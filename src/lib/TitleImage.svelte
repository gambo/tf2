<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		src: string;
		alt: string;
		children: Snippet;
	};
	let { src, alt, children }: Props = $props();
</script>

<figure class="titleImage">
	<img {src} {alt} />
	<figcaption>
		{@render children()}
	</figcaption>
</figure>

<style>
	figure {
		margin: 0.5rem -10rem 2rem;
		&:before {
			background: var(--color-orange);
			margin: 0 -1000px;
			display: block;
			content: '';
		}
	}
</style>
