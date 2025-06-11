<script lang="ts">
	import KeySkills from './KeySkills.svelte';

	import Terminal from './Terminal.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';
	import Personal from './Personal.svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-sky-500)"></Splash>
<div class="relative mx-auto grid w-3/4 grid-cols-2 gap-4">
	<!-- <h2
		class="font-fjalla text-shadow col-span-full mt-8 mb-4 text-center text-6xl text-shadow-[2px_2px_white]"
	>
		About Shaun, presented by commandlines
	</h2> -->
	<h2 class="font-geist-mono col-span-full mt-8 mb-4 text-center text-6xl">$ woami_</h2>
	<KeySkills />
	<Personal />
</div>
