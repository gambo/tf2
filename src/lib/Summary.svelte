<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<aside class="color-slate-700 -mx-2 text-sm">
	<p class="toc mb-2 text-lg font-semibold">Summary</p>
	<ul class="-ml-[2px] list-image-[url('/dot.svg')] text-sm">
		{@render children()}
	</ul>
</aside>

<style>
	aside {
		--color: hsl(from var(--color-accent) h s l / 10%);
		background-image: repeating-linear-gradient(
			45deg,
			var(--color) 0px,
			var(--color) 1px,
			transparent 2px,
			transparent 4px
		);
		padding: 1rex 2rch;
	}
</style>
