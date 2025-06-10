<script module>
	import image from './titleimage.png';
	export const meta: SiteMeta = {
		title: 'What are our business rules?',
		date: new Date('10 June 2025'),
		tags: ['career'],
		image,
		alt: "A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance.",
	};
</script>

<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import src from './titleimage.png';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/icons/Back.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
</script>

<Article {...meta}>
	{#snippet figcaption()}
		this is a figure and a caption
	{/snippet}
	{#snippet bodytext()}
		<p class="cap">
			Not too long ago, my typical day would be to review a list of logs that had been submitted by
			clients. These logs fell into three categories: It was either a BugFix; a new project with
			feature requests; or a clarification on how the client&CloseCurlyQuote;s business rules were
			applied in a given workflow.
		</p>
		<Dinkus />
		<p>
			One day, the client asked me to provide the business rules for their product. That moment
			revealed something critical: they had no idea what their own business rules were. The rules
			had been layered over time by different people making minor tweaks. After 10+ years of product
			evolution, the logic was opaque. It followed compliance guidelines and passed audits, but
			there was no central documentation. No single source of truth.
		</p>
		<p>
			Was it our job to document their business logic? No. But the experience taught me something
			that’s stuck with me ever since: you need a source of truth for business rules. Simple facts
			about your business should be logged. Core types should be defined. Every derived rule in an
			application should trace back to these foundational definitions. A change in one place should
			cascade predictably.
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
