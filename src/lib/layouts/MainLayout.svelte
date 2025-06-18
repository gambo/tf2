<script lang="ts">
	import Canvas from '$lib/Canvas/Canvas.svelte';
	import Lines from '$lib/Canvas/Lines.svelte';
	import Splash from '$lib/Canvas/Splash.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Canvas></Canvas>
<div class="layout">
	{@render children()}
</div>

<style lang="postcss">
	.layout {
		display: grid;
		isolation: isolate;
		grid-template-columns:
			[bleed-start] 1fr [left-gutter-start] 22rch [left-gutter-end main-start] repeat(3, 22rch)
			[main-end right-gutter-start] 22rch [right-gutter-end] 1fr [bleed-end];
		grid-template-rows: [bleed-start] 1rem [main-start] 1fr [main-end] 1rem [bleed-end];
	}
</style>
