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
	<div class="wrap">
		<div class="titleimage aspect-[16/7] [background-image:var(--image)] bg-cover bg-center"></div>
	</div>
	<!-- <img {src} {alt} /> -->
	<figcaption>
		{@render children()}
	</figcaption>
</figure>

<style>
	.titleimage {
		border-radius: 1rex;
		background-image:
			linear-gradient(
				45deg,
				transparent,
				rgb(255 255 255 / 30%) 20%,
				transparent 20%,
				rgb(255 255 255 / 30%) 70%,
				transparent 70%
			),
			radial-gradient(circle at 10% 10%, rgb(255 255 255 / 20%), rgb(0 0 0 / 20%)), var(--image);
		background-blend-mode: soft-light, color-burn;
	}
	.wrap {
		--pad: 0.2rex;
		--border-radius: calc(1rex + var(--pad));
		background-image: radial-gradient(ellipse at top, #fff, #ddd);
		outline: 1px solid rgb(0 0 0 / 10%);
		border-radius: var(--border-radius);
		padding: var(--pad);
		box-shadow: 0 0 4px rgb(0 0 0 / 8%);
	}
	figure {
		background: #fff;
		box-shadow:
			0 0 4px rgb(0 0 0 / 0.08),
			inset 0 2px 4px white;
		color: #242424;
		margin: 0.5rem -10rem 2rem;
		padding-bottom: 0;
		padding: 1rem;
		border-radius: 0.5rex;
		border: 1px solid rgb(0 0 0 / 25%);
	}
	figcaption {
		color: #666;
		font-size: 0.8rem;
		margin-bottom: 2rex;
		padding: 1rex 0;
	}
</style>
