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
	<div class="flex gap-2">
		<span>
			{@render children()}
		</span>
		<span class="footnote-meta">
			<a href="#footlink{id}" title="Back to article" class="bg-accent rounded p-1 text-white"
				><Back class="w-3" /></a
			>
		</span>
	</div>
</li>

<style>
	.footnote {
		font-size: 0.7rem;
		line-height: 1.5;
	}
	.footnote:target {
		background: lightgoldenrodyellow;
		border: 1px dashed;
		margin: -1rem;
		margin-bottom: 2rem;
		padding: 1rem;
	}
</style>
