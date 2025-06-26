<script module>
	import image from './titleimage.png';
	export const meta: SiteMeta = {
		ident: 'sitebreakdown',
		title: 'Site Design Breakdown',
		date: new Date('15 June 2025'),
		tags: ['design'],
		image,
		alt: 'A snippet of an open code editor with the code of the current website.',
	};
</script>

<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/icons/Back.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
	import Code from '$lib/Code.svelte';
	import Summary from '$lib/Summary.svelte';
	import type { SiteMeta } from '../types';
</script>

<Article {...meta}>
	{#snippet figcaption()}
		A screenshot of the code that runs this site, embeddeded in a page that runs on that code.
	{/snippet}
	{#snippet bodytext()}
		<h2>A new Site</h2>
		<p class="cap">
			It's been some time since I've had the time to build my own site. My last 2 roles were
			challenging and rewarding, but they were also very demanding and free time was quite precious.
			I took some inspiration from the layouts of print magazines, they always break out the grid
			and have splashes of color, something a little different. The stack is Svelte/Kit because I
			like frameworks with powerful primitives that get out the way
		</p>
		<Dinkus />
		<h3>Choosing Fonts and Logo</h3>
		<p>
			I started with content first. I wanted good sans-serif fonts, and roped it into some great
			legibility measurements. 65 characters for line length, 1.4 leading, a very traditional type
			scale. I chose Merriweather as body copy and Fjalla as display&mdsah;I fell back to Inter
			Tight Variable for certain UI elements. The logo, I created in Figma by playing around with my
			initials 'SR', until I came up with something timeless. Free font resources are actually
			really good these days. I used <a href="https://fontsource.org/">@fontsource</a> to package my
			fonts
		</p>
		<Dinkus />
		<h3>The Splash</h3>
		<p>
			I like working with textures, and think they arent always as utilizied as they should be, I
			took a orange with a bit of a punch, and laid on this sort of bamboo style texture on top.
			<Code lang="css">
				<pre>
				{`
	.splash {
		--color2: hsl(from var(--color) h calc(s + 10) calc(l + 10));
		background: repeating-linear-gradient(
			90deg,
			var(--color) 0px,
			var(--color2) 4px,
			transparent 4px
		);
		clip-path: polygon(0 var(--offset, 30%), 100% 0, 100% calc(100% - var(--offset, 30%)), 0 100%);
	}
`}
</pre>
			</Code>
		</p>
		<h3>Functionality</h3>
		<p>
			I wanted my site to have articles I write, and host interviews I give, but mostly I also
			wanted a way to
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">Em dash has been placed by me intentionally.</Footnote>
	{/snippet}
</Article>
