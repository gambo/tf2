<script lang="ts">
	import type { Snippet } from 'svelte';
	import Metainfo from './Metainfo.svelte';
	import type { SiteMeta } from '../routes/posts/types';

	type Props = {
		style?: string;
		url: string;
		meta: SiteMeta;
	};
	let { url, style, meta }: Props = $props();
</script>

<a
	href={url}
	style="--image:url({meta.image}); {style}"
	class="rainbow group border border-slate-900/10 shadow-lg"
>
	<div class="flex flex-col gap-4 bg-white p-4">
		<div class="overflow-clip border">
			<div
				style="view-transition-name: image-{meta.ident}"
				class="tranition-all min-h-40 [background-image:var(--image)] bg-cover bg-center transition-all group-hover:scale-105"
			></div>
		</div>
		<div>
			<h2
				class="font-fjalla min-h-[5rem] text-2xl text-balance"
				style="view-transition-name: header-{meta.ident}"
			>
				{meta.title}
			</h2>
			<Metainfo {...meta} />
		</div>
	</div>
</a>

<style>
</style>
