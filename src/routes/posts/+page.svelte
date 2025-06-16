<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';
	import JournalPeek from '$lib/JournalPeek.svelte';
	import Splash from '$lib/Splash.svelte';

	type Props = {
		data: PageData;
		children: Snippet;
	};
	let { data, children }: Props = $props();
	let tags = $derived(new Set(data.menu.flatMap((x) => x.meta.tags)));
	$inspect(tags);
</script>

<Splash color="var(--color-violet-500)" />
<h2
	class="font-fjalla isolate mx-auto mt-8 mb-4 w-[65rch] px-2 text-6xl text-shadow-[2px_2px_white]"
>
	Journal Entries
</h2>
<div class="relative mx-auto grid w-3/4 max-w-[1000px] grid-cols-3 gap-4">
	{#each data.menu as entry, i}
		<JournalPeek {...entry} />
	{/each}
</div>

<style>
</style>
