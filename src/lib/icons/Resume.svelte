<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
	};
	let { class: classes }: Props = $props();
</script>

{#snippet okthen()}
	okokok
{/snippet}
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
	><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path
		d="M14 2v4a2 2 0 0 0 2 2h4"
	/><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg
>

<style lang="postcss">
</style>
