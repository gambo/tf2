<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<ol class="footnotes ml-4">
	{@render children()}
</ol>

<style>
	.footnotes {
		border-top: 1px solid #ddd;
		padding-top: 2rex;
		list-style: decimal-leading-zero;
	}
</style>
