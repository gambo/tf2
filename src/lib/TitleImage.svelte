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
