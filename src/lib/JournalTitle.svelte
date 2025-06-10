<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		text: string;
	};
	let { text }: Props = $props();
</script>

<h1 data-length={text.length} style="font-size: clamp(2rem, {53 / text.length}rem, 8rem)">
	{text}
</h1>

<style>
	h1 {
		text-wrap: pretty;
		line-height: 1.2;
		view-transition-name: header;
	}
</style>
