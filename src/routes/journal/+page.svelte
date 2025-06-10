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
<div class="overview relative mx-auto w-3/4">
	{#each data.menu as entry, i}
		{@render first(i)}
		<JournalPeek {...entry} style="grid-area:g{i + 1}" />
	{/each}
</div>

{#snippet first(index: number)}
	{#if index === 1}
		<div class="latest">latest</div>
	{/if}
{/snippet}

<style>
	.overview {
		display: grid;
		grid-template-areas:
			'g1 g1 g2'
			'g1 g1 g2'
			'g3 g4 g5';
		gap: 1rem;
		&:first-child {
			outline: 4px solid red;
		}
	}
	.latest {
		position: absolute;
		background: var(--color-sky-200);
		color: var(--color-sky-900);
		padding: 0.5rem 2rem;
		transform-origin: top right;
		translate: -60%;
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
