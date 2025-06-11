<script lang="ts">
	import type { Snippet } from 'svelte';
	import './atomdark.css';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<div class="m-auto my-8 w-[65rch]" data-theme="plastic">
	{@render children()}
</div>

<style lang="postcss">
</style>
