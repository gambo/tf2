<script lang="ts">
	import type { Snippet } from 'svelte';
	import Linkdin from '$lib/icons/Linkdin.svelte';
	type Props = {
		figcaption: Snippet;
		bodytext: Snippet;
		footnotes: Snippet;
	} & SiteMeta;
</script>

<article>
	<p class="cap">
		You can learn more about me by reading what I write on here. I love designing and developing
		software solutions for the web. The whole excercise is intensily rewarding for me. I have met
		amazing people along way.
	</p>
	<p>You can learn about me a bit more by reading what I write</p>
</article>

<a href="/" class="inline-flex items-center gap-1 pr-4 text-xs">
	<span class="rounded-full bg-slate-600 p-1 text-white"><Linkdin class="" /></span>
	Contact me on Linked In</a
>

<style>
	a {
		background: #242424;
		border-radius: 100rem;
		color: rgb(255 255 255 / 90%);
		font-family: var(--font-inter-tight);
		padding: 0.5rex 0.5rch;
		padding-right: 2rch;
		position: relative;
		text-box-edge: cap alphabetic;
		text-box-trim: trim-both;
		transition: 1s all ease-in-out;

		&:before {
			content: ' ';
			position: absolute;
			inset: 0;
			filter: blur(40px);
			border-radius: inherit;
			z-index: -1;
		}
		&:hover:before {
			animation-direction: normal;
			animation-duration: 3s;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
			animation-name: rotate-color;
			background: linear-gradient(var(--color-degree) in oklch longer hue, violet 0% 100%);
		}
	}
	@property --color-degree {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	@keyframes rotate-color {
		to {
			--color-degree: 360deg;
		}
	}
</style>
