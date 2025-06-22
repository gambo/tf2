<script lang="ts">
	import Footnotes from '$lib/Footnotes.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import Signed from '$lib/Signed.svelte';
	import TitleImage from '$lib/TitleImage.svelte';
	import TOC from './TOC.svelte';
	import type { Snippet } from 'svelte';
	type Props = {
		figcaption: Snippet;
		bodytext: Snippet;
		footnotes: Snippet;
	} & SiteMeta;

	let { ident, alt, bodytext, footnotes, figcaption, image, date, tags, title }: Props = $props();
</script>

<article class="">
	<div class="relative z-10">
		<JournalTitle text={title} {ident} />
		<Metainfo {ident} {date} {tags}></Metainfo>
		<TitleImage src={image} {alt} {ident}>
			{@render figcaption()}
		</TitleImage>
	</div>
	<TOC />
	{@render bodytext()}
	<Signed />
	<Footnotes>
		{@render footnotes()}
	</Footnotes>
</article>

<style>
</style>
