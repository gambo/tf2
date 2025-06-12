<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { color: string; children: Snippet };
	let { color = '#bada55', children }: Props = $props();
</script>

<div style:--color={color} class="w-screen overflow-hidden">
	<div class="splash absolute inset-0 top-20 h-120">{@render children?.()}</div>
</div>

<style>
	.splash {
		--color2: hsl(from var(--color) h calc(s + 10) calc(l + 10));
		background:
			/* repeating-linear-gradient(90deg, #bada55 0px, #cbec66 4px, transparent 4px), #bada55; */ repeating-linear-gradient(
			90deg,
			var(--color) 0px,
			var(--color2) 4px,
			transparent 4px
		);
		clip-path: polygon(0 30%, 100% 0, 100% 70%, 0 100%);
	}
</style>
