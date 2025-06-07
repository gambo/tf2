<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import src from './titleimage.png';
	import TitleImage from '$lib/TitleImage.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/Back.svelte';
</script>

<article>
	<JournalTitle text="Kia Ora, Aotearoa" />
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
		New Zealand is my new home! I have family here and many good friends, so it was really only a
		matter of time. Flying from South Africa, through Hong Kong and landing in Auckland was a
		journey I'll never forget. New Zealand is a truly beautiful place&mdash;<sup
			><a href="#footnote1" id="footlink1">[1]</a></sup
		>and the people within have a spirit to match. They are warm, humourous and genuinly open. These
		moments always promote self-reflection like pruning an overgrown fruit tree&mdash;tying wayward
		branches upright and eliminating weaker branches to divert growth to the preferred ones.
	</p>
	<h2>What's next?</h2>
	<p>
		It's been many year's since I've had the space to journal online. I have quite a few posts I
		would like to write, and quite a few interviews I would like to publish. I am going to focus on
		expanding my software development and managerial skillset as well as exploring things in related
		and unrelated fields, while I find a good fit for my next long term role. The people I have met
		so far in New Zealand are whip-smart; seemingly confident down to their bones. It's time to
		surround myself with people like this&mdash;and like a fruit tree, maybe get a little sun.
	</p>
	<Dinkus />
	<ol class="footnotes">
		<li class="footnote" id="footnote1">
			Unfortunately, The rise of LLM's and AI seems to have given the Em dash a <Dquote
				>smell</Dquote
			> of
			<em><Dquote>Ai slop</Dquote></em>. I feel the need to emphasize that on this site, there is
			<em>no</em>
			generative AI. Every design element and punctuation mark is a deliberate choice, hand-placed by
			me. There is no: copy-paste; pre-made theme; plugins or shortcut packages. I don't even use
			<a href="https://www.npmjs.com/package/smartypants">smartypants</a>
			to auto-convert my punctuation. Just me typing <code class="inline">&amp;mdash;</code> every
			time. I view this site as my personal garden, and take more joy in cultivating it. The effort,
			in this regard, is the reward.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</li>
		<li class="footnote" id="footnote2"></li>
	</ol>
</article>
