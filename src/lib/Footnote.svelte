<script lang="ts">
	import type { Snippet } from 'svelte';
	import Back from './icons/Back.svelte';

	type Props = {
		id: string | number;
		children: Snippet;
	};
	let { id, children }: Props = $props();
</script>

<li class="footnote" id="footnote{id}">
	{@render children()}
	<span class="footnote-meta"
		><a
			href="#footlink{id}"
			title="Back to article"
			class="font-inter-tight flex items-center gap-1"
			><Back class="w-3" /><span class="text-[0.7rem]">Jump Back</span></a
		></span
	>
</li>

<style>
	.footnote {
		font-size: 0.7rem;
		line-height: 1.5;
		position: relative;
		.footnote-meta {
			position: absolute;
			top: 0;
			right: -5rem;
		}
	}
	.footnote:target {
		background: lightgoldenrodyellow;
		border: 1px dashed;
		margin: -1rem;
		margin-bottom: 2rem;
		padding: 1rem;
	}
</style>
