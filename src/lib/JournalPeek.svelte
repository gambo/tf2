<script lang="ts">
	import type { Snippet } from 'svelte';
	import Metainfo from './Metainfo.svelte';

	type Props = {
		style?: string;
		url: string;
		meta: SiteMeta;
	};
	let { url, style, meta }: Props = $props();
</script>

<a href={url} style="--image:url({meta.image}); {style}">
	<div class="flex flex-col gap-4 bg-white p-4">
		<div
			style="view-transition-name: image-{meta.ident}"
			class="min-h-40 rounded-sm border border-slate-900/30 [background-image:var(--image)] bg-cover"
		></div>
		<div>
			<h2
				class="font-fjalla min-h-[5rem] text-2xl"
				style="view-transition-name: header-{meta.ident}"
			>
				{meta.title}
			</h2>
			<Metainfo {...meta} />
		</div>
	</div>
</a>
