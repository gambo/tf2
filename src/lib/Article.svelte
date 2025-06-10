<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import TitleImage from '$lib/TitleImage.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Signed from '$lib/Signed.svelte';
	import Footlink from '$lib/Footlink.svelte';
	import Footnotes from '$lib/Footnotes.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';
	type Props = {
		figcaption: Snippet;
		bodytext: Snippet;
		footnotes: Snippet;
	} & SiteMeta;

	let { ident, alt, bodytext, footnotes, figcaption, image, date, tags, title }: Props = $props();
</script>

<article>
	<div class="relative z-10">
		<JournalTitle text={title} {ident} />
		<Metainfo {ident} {date} {tags}></Metainfo>
		<TitleImage src={image} {alt} {ident}>
			{@render figcaption()}
		</TitleImage>
	</div>
	<Splash />
	{@render bodytext()}
	<Signed />
	<Footnotes>
		{@render footnotes()}
	</Footnotes>
</article>
