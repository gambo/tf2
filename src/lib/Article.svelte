<script lang="ts">
	import TOC from './TOC.svelte';

	import Dquote from '$lib/Dquote.svelte';
	import JournalTitle from '$lib/JournalTitle.svelte';
	import Metainfo from '$lib/Metainfo.svelte';
	import TitleImage from '$lib/TitleImage.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Signed from '$lib/Signed.svelte';
	import Footlink from '$lib/Footlink.svelte';
	import Footnotes from '$lib/Footnotes.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Splash from '$lib/Canvas/Splash.svelte';
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';
	type Props = {
		figcaption: Snippet;
		bodytext: Snippet;
		footnotes: Snippet;
	} & SiteMeta;

	let { ident, alt, bodytext, footnotes, figcaption, image, date, tags, title }: Props = $props();
	const populate: Attachment<HTMLElement> = (node) => {
		const headings: NodeListOf<HTMLHeadingElement> | undefined = node
			.closest('article')
			?.querySelectorAll(':is(h1,h2,h3,h4,h5)');
		if (!headings) return;
		for (const heading of headings) {
			let li = document.createElement('li');
			li.append(heading.innerText);
			node.appendChild(li);
		}
	};
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
