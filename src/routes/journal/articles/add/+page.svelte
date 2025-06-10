<script module>
	import image from './titleimage.jpg';
	export const meta: SiteMeta = {
		ident: 'add',
		title: 'Anxiety-driven Development',
		date: new Date('11 June 2025'),
		tags: ['career'],
		image,
		alt: 'A splash of water, with a dark tone giving a sinister, drowning feeling.',
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
		Photo by <cite
			><a href="https://unsplash.com/photos/sea-waves-3GceEFB7UBI">Lauren McConachie</a></cite
		>
	{/snippet}
	{#snippet bodytext()}
		<p class="cap">
			Anxiety-driven development is not an official term. I'm using it to describe a pattern I’ve
			seen over and over. It starts with fake deadlines. These fake deadlines create pressure. That
			pressure creates anxiety. And too much anxiety makes bad software.
		</p>
		<p>
			When I say <q>fake</q> deadlines, Im usually referring to an arbitrary deadline used to push progress
			forward or to light a fire under what is percieved to be a non-performing team.
		</p>
		<Dinkus />
		<p>
			A lot of managers and teams will feel forced to fake deadlines to make things feel urgent.
			These dates aren’t tied to real needs or actual customer goals. They’re just there to track
			work and measure how fast people move. When this happens, developers start focusing on getting
			something done by the deadline&mdash;anything. Doesn’t matter if it’s the right thing. Doesn’t
			matter if it’s good. It just needs to be finished. So they build the smallest possible version
			that checks the box.
		</p>
		<p>
			Teams end up showing progress on paper, even when nothing important is being solved. This kind
			of stress breaks down the kind of work that needs thinking. Hard problems need time. You need
			to try different ideas, question the assumptions, and figure out what’s actually going on. You
			can’t do that if your mind is stuck on the clock. Without any slack, people default to
			reactive work. They don’t explore better options. They skip code cleanup. They avoid asking if
			the thing even makes sense. Over time, you get a mess of a system that’s hard to change and
			harder to understand.
		</p>
		<Dinkus />
		<p>
			Working slower doesn’t mean working worse. Sometimes stepping back, rethinking a decision, or
			admitting a design doesn’t work is the most useful thing you can do. If you want a system that
			can grow and improve, you can’t build it on panic.
		</p>
		<h3>How have you solved this then?</h3>
		<p>
			Well, I haven't really. It's a difficult road to navigate especially if you are in a position
			of management. Lukily though, I have stumbled across a quesiton that does seem to present a
			better platform to proceed. <b>“Do we know how to solve this right now?”</b> The honest answer
			is often “Not yet.” That’s normal. Real software problems are rarely clear right away. At the start,
			you don’t always know what the change will affect, or how it fits with everything else. People
			try their best. They work extra hours. They don’t want to look bad. But even the most experienced
			developers hit roadblocks. Sometimes the work just doesn’t split cleanly &mdash; and sometimes,
			one problem is the whole mountain.
		</p>
		<p>
			And it takes time. That’s when developers and managers need to stop and say, “Yes, this is a
			hard one. Let’s figure it out.” Maybe that means getting help. Maybe it means changing
			direction. But ignoring the difficulty doesn’t make it go away. Not all work fits into neat
			chunks. Some tasks are hard to estimate. Some move slowly no matter how much you push. These
			suffer most when deadlines are forced. Instead of clarity, you get avoidance. The better path
			is to leave space for thinking. Treat hard work like discovery, not just delivery. Progress
			might look slow, but what you get in the end is usually better.
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
