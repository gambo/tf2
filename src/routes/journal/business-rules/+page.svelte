<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import src from './titleimage.png';
	import TitleImage from '$lib/TitleImage.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/Back.svelte';
	import Signed from '$lib/Signed.svelte';
	import Footlink from '$lib/Footlink.svelte';
	import Footnotes from '$lib/Footnotes.svelte';
	import Footnote from '$lib/Footnote.svelte';
</script>

<article>
	<JournalTitle text="Please tell us what our business rules are." />
	<Metainfo date={new Date('07 June 2025')} tags={['personal']}></Metainfo>
	<TitleImage
		{src}
		alt="A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance."
	>
		A still from the beautiful short film
		<Dquote>
			<a href="https://www.youtube.com/watch?v=efH6AP0lWa4">
				Aotearoa &mdash; Land of the long white cloud
			</a>
		</Dquote> by <cite><a href="https://www.youtube.com/@BenMikha">Ben Mikha</a></cite>
	</TitleImage>
	<p class="cap">
		Not too long ago, my typical day would be to review a list of logs that had been submitted by
		clients. These logs fell into three categories: It was either a BugFix; a new project with
		feature requests; or a clarification on how the client&CloseCurlyQuote;s business rules were
		applied in a given workflow.
	</p>
	<Dinkus />
	<p>
		It's been many year's since I've had the space to journal online. I have quite a few posts I
		would like to write, and quite a few interviews I would like to publish. I am going to focus on
		expanding my software development and managerial skillset as well as exploring things in related
		and unrelated fields, while I find a good fit for my next long term role. The people I have met
		so far in New Zealand are whip-smart; seemingly confident down to their bones. It's time to
		surround myself with people like this&mdash;and like a fruit tree, maybe get a little sun.
	</p>
	<Signed />
	<Footnotes>
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	</Footnotes>
</article>
