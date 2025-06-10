<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
		children: Snippet;
	};
	let { data, children }: Props = $props();
	let [first, second, ...rest] = data.menu;
</script>

<div class="flex gap-4">
	<div>
		<pre>{JSON.stringify(first, null, 2)}</pre>
		<pre>{JSON.stringify(second, null, 2)}</pre>
	</div>
	{#each rest as item}
		<pre>{JSON.stringify(item, null, 2)}</pre>
	{/each}
</div>
