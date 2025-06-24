<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';
	import JournalPeek from '$lib/JournalPeek.svelte';
	import { sitetags } from '$lib';

	type Props = {
		data: PageData;
		children: Snippet;
	};
	let { data, children }: Props = $props();
</script>

<h2
	class="font-fjalla isolate mx-auto mt-8 mb-4 w-[65rch] px-2 text-3xl text-shadow-[2px_2px_white]"
>
	Site Content
</h2>
<div class="-mx-[22rch] grid grid-cols-3 gap-4">
	{#each data.menu as entry, i}
		<JournalPeek {...entry} />
	{/each}
</div>

<style>
</style>
