<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageServerLoad } from './$types';

	type Props = {
		data: PageServerLoad;
		children: Snippet;
	};
	let { data, children }: Props = $props();
</script>

<style lang="postcss">
</style>
