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
		<Summary>
			<li>Svelte/Kit is my goto</li>
			<li>I document a few advanced CSS tips used in the site</li>
		</Summary>
		<h2>The beginning is never easy</h2>
		<p class="cap">
			It's been some time since I've had the time to build my own site. My last 2 roles weren't
			particularly forgiving and free time was quite precious. I was a bit lost for design ideas. I
			tried about a dozen designs, and nothing I came up with felt fresh. I definitely wanted
			something with an edge. I always use Svelte/Kit because it is <a href="/">quality</a>
		</p>
		<p></p>
		<Dinkus />
		<h3>A magazine for inspiration</h3>
		<p>
			I picked up a magazine while cleaning, on a random page, what struck me how I had almost
			forgotten the vibrant designs one usually gets in magazines. A graphic designer basically had
			unlimited freedom <em>inside</em> a pretty limiting medium. Its an A4 page, 2 or more if you are
			doing a spread; you mostly don't have access to special inks; and you still have to be faithful
			to the identity of the brand. This push-pull conundrum really seems to bring out the best in designers.
			I wanted to bring some of that magazine layout magic along with me. I wanted color, and most importantly,
			I wanted to be a bit cheeky with my grid by breaking out of it
		</p>
		<h3>Choosing Fonts and Logo</h3>
		<p>
			I started with content first. I wanted good sans-serif fonts, and roped it into some great
			legibility measurements. 65 characters for line length, 1.4 leading, a very traditional type
			scale. I was already liking the break from sans-serif. I chose Merriweather and Fjalla as the
			workhorses, and fell back to Inter Tight Variable for certain UI elements. The logo was
			actually the first thing I designed. I played with my initials in Figma, and came up with a
			logomark I quite liked. It was the only element I kept, looking back now it's remarkable how
			much I threw away
		</p>
		<Dinkus />
		<h3>The Splash</h3>
		<p>
			I wanted a light texture on the color splashes, and I wanted the colors to be homogenous.
			Tailwind is pretty great with a range of color scales that blend well together. Not many
			people comment on how good you have it with default colors out the box. The textured-paper
			background on the splash is just a simple repeating linear gradient. I used relative colors to
			make a second color with a slight offset. to get the angle I used clip-path. Im a big fan. Im
			looking forward to a day where borders will respect a clip path
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
		<h3>The layout</h3>
		<p>
			The layout isn't overly complex, but I did add dashed lines on the edges of the main column to
			highlight when I broke out
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
