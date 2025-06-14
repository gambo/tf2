<script lang="ts">
	import type { Snippet } from 'svelte';
	import Splash from '$lib/Splash.svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<div class="bg-red-500">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat adipisci debitis quam
	dolorum quia, repudiandae quisquam velit facere nam fuga veniam quidem quo tempora quas culpa
	incidunt necessitatibus provident?
</div>
<div class="m-auto my-8 w-[65rch]" data-theme="plastic">
	{@render children()}
</div>

<style lang="postcss">
</style>
