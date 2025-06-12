<script lang="ts">
	import { poly_bg } from '$lib';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-orange-500)" />
<div class="isolate mx-auto mt-8 w-[1000px]">
	<h1 class="text-7xl">Hi, I'm Shaun</h1>
	<h2 class="text-4xl">Senior Software Developer</h2>
	<div class="bg-white p-2">
		<img
			src="/me.png"
			alt="Shaun Richardson sitting at a table smiling"
			class="mt-10 w-100 bg-white/40 p-2"
			{@attach poly_bg}
		/>
	</div>
</div>

<style>
	h1,
	h2 {
		font-weight: bold;
		font-family: var(--font-merriweather);
	}
	h1,
	h2 {
		rotate: -6.2deg;
		translate: -10px -7px;
	}
	h2 {
		font-family: var(--font-mono);
		text-transform: uppercase;
		letter-spacing: -0.15rem;
		color: #eee;
		font-size: 3.2rem;
		translate: 0 -35px;
		letter-spacing: -0.04rem;
	}
</style>
