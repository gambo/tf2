<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ident: string;
		text: string;
	};
	let { ident, text }: Props = $props();
</script>

<h1 style="view-transition-name: header-{ident};">
	{text}
</h1>

<style>
	h1 {
		text-wrap: pretty;
		line-height: 1.2;
		margin-inline: -20rem;
		text-align: center;
	}
</style>
