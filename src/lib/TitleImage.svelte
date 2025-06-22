<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ident: string;
		src: string;
		alt: string;
		children: Snippet;
	};
	let { src, ident, alt, children }: Props = $props();
</script>

<figure
	class="relative isolate z-10"
	style="view-transition-name: image-{ident}; --image: url({src})"
>
	<div class="wrap overflow-clip">
		<div
			class="titleimage aspect-[16/7] [background-image:var(--image)] bg-cover bg-center transition-all hover:scale-105"
		></div>
	</div>
	<!-- <img {src} {alt} /> -->
	<figcaption>
		{@render children()}
	</figcaption>
</figure>

<style>
	.wrap {
		--pad: 0.2rex;
		padding: var(--pad);
	}
	figure {
		background: #fff;
		color: #242424;
		margin: 0.5rem -10rem 2rem;
		padding-bottom: 0;
		padding: 1rem;
		border-radius: 0.5rex;
		border: 1px solid rgb(0 0 0 / 25%);
		box-shadow: 0 30px 0px -23px #bbbbbb77;
	}
	figcaption {
		color: #666;
		font-size: 0.8rem;
		margin-bottom: 2rex;
		padding: 1rex 0;
	}
</style>
