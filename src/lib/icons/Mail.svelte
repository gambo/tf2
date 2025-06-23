<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
	};
	let { class: classes }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="16"
	height="16"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={classes}
	><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect
		x="2"
		y="4"
		width="20"
		height="16"
		rx="2"
	/></svg
>

<style lang="postcss">
</style>
