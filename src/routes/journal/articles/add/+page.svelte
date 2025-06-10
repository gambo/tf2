<script module>
	import image from './titleimage.webp';
	export const meta: SiteMeta = {
		ident: 'add',
		title: 'Anxiety-driven Development',
		date: new Date('11 June 2025'),
		tags: ['career'],
		image,
		alt: "A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance.",
	};
</script>

<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/icons/Back.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
</script>

<Article {...meta}>
	{#snippet figcaption()}
		A Form Builder prototype designed by <a href="https://dribbble.com/shots/15131388-Form-Builder"
			>Raghunath RV</a
		>, based in New York. Forms have long been an area of <em>intense</em> focus in my career
	{/snippet}
	{#snippet bodytext()}
		'We had everything before us' The following blog post, is part one of a tale of two hats. One
		perspective is from the person with the programmer hat. The other perspective is from the person
		with the manager hat. Both hats need to deliver good software fast. It's not an official term.
		I'm using it to describe a pattern I’ve seen over and over. It starts with false deadlines.
		These fake deadlines create pressure. That pressure creates anxiety. And too much anxiety makes
		bad software. A lot of teams use fake deadlines to make things feel urgent. These dates aren’t
		tied to real needs or actual customer goals. They’re just there to track work and measure how
		fast people move. When this happens, developers start focusing on getting something done by the
		deadline. Doesn’t matter if it’s the right thing. Doesn’t matter if it’s good. It just needs to
		be finished. So they build the smallest possible version that checks the box. Teams end up
		showing progress on paper, even when nothing important is being solved. This kind of stress
		breaks down the kind of work that needs thinking. Hard problems need time. You need to try
		different ideas, question the assumptions, and figure out what’s actually going on. You can’t do
		that if your mind is stuck on the clock. Without any slack, people default to reactive work.
		They don’t explore better options. They skip code cleanup. They avoid asking if the thing even
		makes sense. Over time, you get a mess of a system that’s hard to change and harder to
		understand. Working slower doesn’t mean working worse. Sometimes stepping back, rethinking a
		decision, or admitting a design doesn’t work is the most useful thing you can do. If you want a
		system that can grow and improve, you can’t build it on panic. There’s one question that cuts
		through a lot of this: “Do we know how to solve this?” The honest answer is often “Not yet.”
		That’s normal. Real software problems are rarely clear right away. At the start, you don’t
		always know what the change will affect, or how it fits with everything else. People try their
		best. They work extra hours. They don’t want to look bad. But even the most experienced
		developers hit roadblocks. Sometimes the work just doesn’t split cleanly. Sometimes one problem
		is the whole mountain. And it takes time. That’s when developers and managers need to stop and
		say, “Yes, this is a hard one. Let’s figure it out.” Maybe that means getting help. Maybe it
		means changing direction. But ignoring the difficulty doesn’t make it go away. Not all work fits
		into neat chunks. Some tasks are hard to estimate. Some move slowly no matter how much you push.
		These suffer most when deadlines are forced. Instead of clarity, you get avoidance. The better
		path is to leave space for thinking. Treat hard work like discovery, not just delivery. Progress
		might look slow, but what you get in the end is usually better.
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
