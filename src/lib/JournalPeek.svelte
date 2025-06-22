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

<a href={url} style="--image:url({meta.image}); {style}" class="rainbow group">
	<div class="flex flex-col gap-4 bg-white p-4">
		<div class="overflow-clip border">
			<div
				style="view-transition-name: image-{meta.ident}"
				class="tranition-all min-h-40 [background-image:var(--image)] bg-cover bg-center transition-all group-hover:scale-105"
			></div>
		</div>
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

<style>
	.ok:hover {
		background-size: 200%;
	}
</style>
