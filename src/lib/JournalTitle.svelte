<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ident: string;
		text: string;
	};
	let { ident, text }: Props = $props();
</script>

<h2 style="view-transition-name: header-{ident};" class="text-4xl">
	{text}
</h2>

<style>
	h2 {
		text-wrap: pretty;
		line-height: 1.2;
	}
</style>
