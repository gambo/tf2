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
<div class="overview isolate mx-auto w-3/4">
	{#each data.menu as entry, i}
		<JournalPeek {...entry} style="grid-area:g{i + 1}" />
	{/each}
</div>

<style>
	.overview {
		display: grid;
		grid-template-areas:
			'g1 g1 g2'
			'g1 g1 g2'
			'g3 g4 g5';
		gap: 1rem;
	}
</style>
