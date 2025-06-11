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
</script>

<Splash color="var(--color-amber-500)" />
<div class="relative mx-auto grid w-3/4 max-w-[1000px] grid-cols-3 gap-4">
	<h2 class="font-fjalla col-span-2 mt-8 mb-4 text-right text-6xl text-shadow-[2px_2px_white]">
		Journal Entries
	</h2>
	{#each data.menu as entry, i}
		{@const span = 2 - i < 1 ? 1 : 2 - i}
		{@render first(i)}
		<JournalPeek {...entry} style="grid-column: span {span} / span {span}" />
	{/each}
</div>

{#snippet first(index: number)}
	{#if index === 1}
		<div class="latest">latest</div>
	{/if}
{/snippet}

<style>
	.latest {
		position: absolute;
		background: var(--color-sky-200);
		color: var(--color-sky-900);
		padding: 0.5rem 2rem;
		transform-origin: top right;
		translate: -4rem 7.7rem;
		rotate: -90deg;
		clip-path: polygon(10% 0%, 0 50%, 10% 100%, 100% 100%, 100% 0);
		font-family: var(--font-inter-tight);
		font-size: 0.6rem;
		letter-spacing: 0.05rem;
		text-transform: uppercase;
		font-weight: bold;
		opacity: 0.8;
	}
</style>
