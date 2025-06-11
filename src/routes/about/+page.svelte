<script lang="ts">
	import KeySkills from './KeySkills.svelte';
	import { scrollY } from 'svelte/reactivity/window';

	import Terminal from './Terminal.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';
	import Personal from './Personal.svelte';
	import Typewriter from './Typewriter.svelte';
	import Work from './Work.svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-sky-500)"></Splash>
<h2
	class="font-geist-mono isolate col-span-full mt-8 mb-12 text-center text-6xl text-shadow-[2px_2px_white]"
>
	<Typewriter speed={140} delay={0} text="$ whoami_"></Typewriter>
</h2>
<div class="relative mx-auto grid w-3/4 grid-cols-2 gap-8">
	<KeySkills />
	<Personal />
	<Work />
</div>
