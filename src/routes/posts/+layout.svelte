<script lang="ts">
	import type { Snippet } from 'svelte';
	import Splash from '$lib/Canvas/Splash.svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="#bada55"></Splash>
<div class="m-auto my-8 w-[65rch]" data-theme="plastic">
	{@render children()}
</div>

<style lang="postcss">
</style>
