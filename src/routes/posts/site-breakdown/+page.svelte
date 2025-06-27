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
	import Dinkus from '$lib/Dinkus.svelte';
	import Article from '$lib/Article.svelte';
	import Code from '$lib/Code.svelte';
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
		</p>

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
		<h3>Functionality</h3>
		<p>
			I wanted my site to have articles I write, and host interviews I give, but mostly I also
			wanted a way to for the experiments and articles I write to have full web technologies, so I
			dont actually use any markdown for content rendering. I write regular Svelte template's
			because its so close to HTML, then if I do need a bit of extra functionality, any article can
			become it's own mini-playground.
		</p>
		<h3>SSR by default</h3>
		<p>
			The site is <abbr title="Server Side Rendered">SSR</abbr> by default. This is Svelte/Kit's
			default and one of the many reasons I reach for SvelteKit first. I feel SSR is just a better
			default to rely on, It's quicker, has a more reliable delivery and just has fewer downsides in
			general, <abbr title="Server Side Generated">SSG</abbr> and
			<abbr title="Single Page Application">SPA</abbr>
			still have their place, but as I have said in other places on this site
			<a
				href="https://www.linkedin.com/pulse/following-people-tools-steven-joubert-vc8lf/?trackingId=vMr7xeGpS2Kljx5tEkjePQ%3D%3D"
				>and with friends</a
			>
			I am not one for fuss.
		</p>
		<Dinkus />
		<h3>Summary</h3>
		<p>
			While this site isn't complicated at all, it does have some neat tricks, and It's got the
			ground work I need for some future teaching I have lined up. What was great about coding this
			site, was that once i had the definitive idea of what I wanted, it felt like the site sprang
			to life, nearly fully formed. But going back over the git history, you can see that it was <a
				href="https://github.com/gambo/tf2/commits/main/">anything but</a
			>
			That's when I realized, I was just actually having fun, and the time seemed to fly by.
		</p>
	{/snippet}
	{#snippet footnotes()}{/snippet}
</Article>
