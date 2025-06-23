<script lang="ts">
	import Canvas from '$lib/Canvas/Canvas.svelte';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Canvas></Canvas>
<div class="mx-auto w-[66rch] overflow-hidden">
	<SiteHeader></SiteHeader>
</div>
<div class="layout">
	<div class="main">
		{@render children()}
	</div>
	<SiteFooter></SiteFooter>
</div>

<style lang="postcss">
	.layout {
		display: grid;
		isolation: isolate;
		grid-template-columns:
			[bleed-start] 1fr
			[main-start] repeat(3, 22rch)
			[main-end] 1fr
			[bleed-end];
		grid-template-rows: [main-start] 1fr [main-end];
		@media (width <= 590px) {
			grid-template-columns: 1fr;
		}
		overflow: clip;
	}
	.main {
		grid-area: main;
		border: 1px dashed hsl(from var(--color-slate-900) h s l / 30%);
		border-width: 0 1px;
	}
</style>
