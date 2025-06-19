<script lang="ts">
	import Canvas from '$lib/Canvas/Canvas.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Canvas></Canvas>
<div class="layout overflow-hidden">
	<div class="main">
		{@render children()}
	</div>
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
	}
	.main {
		grid-area: main;
		border: 1px dashed hsl(from var(--color-slate-900) h s l / 30%);
		border-width: 0 1px;
	}
</style>
