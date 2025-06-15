<script lang="ts">
	import { slugify } from '$lib';
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';
	type Props = {
		figcaption: Snippet;
		bodytext: Snippet;
		footnotes: Snippet;
	} & SiteMeta;

	const populate: Attachment<HTMLElement> = (node) => {
		const headings: NodeListOf<HTMLHeadingElement> | undefined = node
			.closest('article')
			?.querySelectorAll(':is(h1,h2,h3,h4,h5)');
		if (!headings) return;
		for (const heading of headings) {
			let li = document.createElement('li');
			let slug = slugify(heading.innerText);
			heading.id = slug;
			let a = document.createElement('a');
			a.href = `#${slug}`;
			a.append(heading.innerText);
			li.append(a);
			node.appendChild(li);
		}
	};
</script>

<aside class="font-inter-tight absolute -ml-70 flex h-full w-60 flex-col text-right">
	<div class="sticky top-10">
		<p class="text-xs tracking-wide text-slate-500 uppercase">Table of Contents</p>
		<ul {@attach populate}></ul>
	</div>
</aside>
