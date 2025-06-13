<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageServerLoad } from './$types';

	type Props = {
		data: PageServerLoad;
		children: Snippet;
	};
	let { data, children }: Props = $props();
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<style lang="postcss">
</style>
