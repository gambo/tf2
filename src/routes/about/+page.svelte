<script lang="ts">
	import KeySkills from './KeySkills.svelte';
	import { scrollY } from 'svelte/reactivity/window';

	import Terminal from './Terminal.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';
	import Personal from './Personal.svelte';
	import Typewriter from './Typewriter.svelte';
	import Work from './Work.svelte';
	import Mobile from './Mobile.svelte';

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
<div class="relative mx-auto flex w-3/4 gap-8">
	<div class="pile w-1/2">
		<div class="relative top-60 -left-40 scale-95">
			<KeySkills />
		</div>
		<div class="relative top-90 left-15 scale-90">
			<Personal />
		</div>
		<div class="isolate">
			<Work />
		</div>
	</div>
	<Mobile />
</div>
