<script lang="ts">
	import { poly_bg } from '$lib';
	import Article from '$lib/Article.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-orange-500)">
	<img
		src="/me.png"
		alt="Shaun Richardson sitting at a table smiling"
		class="mx-auto mt-8 w-[71rch]"
	/>
</Splash>
<div class="isolate mx-auto mt-8 w-fit">
	<h1 class="text-7xl">Hi, I'm Shaun</h1>
	<h2 class="text-shadow -mt-2 ml-10 text-2xl text-white">Senior Software Developer</h2>
</div>
<div
	class="byline font-inter-tight isolate mx-auto mt-43 translate-x-140 -rotate-[6.2deg] text-left font-black uppercase"
>
	<p class="trim text-shadow text-4xl text-white">A full-stack guy:</p>
	<p class="trim text-4xl">From Cloud & DB, to UX & User</p>
</div>
<article class="mx-auto mt-20 w-[65rch]">
	<Dinkus />
	<p class="cap">
		I have worked for many years in heaviliy regulated industries like Mining Manufacturing and
		FinTech as a full-stack software developer. I love building software for the web.
	</p>
	<p></p>
</article>

<style>
	h1,
	h2 {
		font-weight: bold;
		font-family: var(--font-merriweather);
	}
	h1,
	h2 {
		rotate: -6.2deg;
		translate: -80px 1px;
	}
	h2 {
		font-family: var(--font-inter-tight);
		text-transform: uppercase;
		letter-spacing: -0.15rem;
		color: #eee;
		font-size: 3.2rem;
		translate: 0 -31px;
		letter-spacing: -0.04rem;
	}
	.text-shadow {
		text-shadow: 1px 1px black;
	}
	.byline {
		width: fit-content;
		translate: 240px 41px;
	}
</style>
