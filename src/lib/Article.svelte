<script lang="ts">
	import Footnotes from '$lib/Footnotes.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import Signed from '$lib/Signed.svelte';
	import TitleImage from '$lib/TitleImage.svelte';
	import TOC from './TOC.svelte';
	import type { SiteMeta } from '../routes/posts/types';
	import type { Snippet } from 'svelte';
	type Props = {
		bodytext: Snippet;
		figcaption: Snippet;
		footnotes: Snippet;
	} & SiteMeta;

	let { ident, alt, bodytext, footnotes, figcaption, image, date, tags, title }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:image" content={image} />
	<meta property="og:title" content={title} />
</svelte:head>

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
