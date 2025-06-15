<script lang="ts">
	import { poly_bg } from '$lib';
	import Article from '$lib/Article.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-orange-500)">
	<img
		in:fly={{ x: -20, delay: 600 }}
		src="/me.png"
		alt="Shaun Richardson sitting at a table smiling"
		class="mx-auto mt-8 w-[71rch]"
	/>
</Splash>
<div class="isolate mx-auto mt-8 w-fit">
	<h1 in:fade={{ delay: 250 }} class="text-7xl">Hi, I'm Shaun</h1>
	<h2 in:fade={{ delay: 500 }} class="text-shadow -mt-2 ml-10 text-2xl text-white">
		Senior Software Developer
	</h2>
</div>
<div
	class="byline font-inter-tight isolate mx-auto mt-43 translate-x-140 -rotate-[6.2deg] text-left font-black uppercase"
>
	<p in:fade={{ delay: 750 }} class="trim text-shadow text-4xl text-white">A full-stack guy:</p>
	<p in:fade={{ delay: 1000 }} class="trim text-4xl">From Cloud & DB, to UX & User</p>
</div>
<article class="mx-auto mt-20 w-[65rch]">
	<Dinkus />
	<p>
		You can find out more about me <a href="/about">here</a>, but If you want to tuck into some good
		stuff, I would recommend reading about my <a href="/">site-design breakdown</a>, or a short
		entry about my <a href="location">location</a>
	</p>
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
