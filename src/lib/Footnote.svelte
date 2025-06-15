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
			<a
				href="#footlink{id}"
				title="Back to article"
				class="font-inter-tight color-slate-800 flex items-center gap-1 rounded-md bg-slate-200 p-[1rch] shadow-sm"
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
