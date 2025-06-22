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
			?.querySelectorAll(':is(h2,h3,h4,h5,.toc)');
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

<aside class="font-inter-tight sticky top-10 float-left -ml-60 w-55 text-right">
	<p class="text-xs tracking-wide text-slate-500 uppercase">Table of Contents</p>
	<ul {@attach populate}></ul>
</aside>
