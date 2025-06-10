<script lang="ts">
	import type { Snippet } from 'svelte';
	import Metainfo from './Metainfo.svelte';

	type Props = {
		style: string;
		url: string;
		meta: SiteMeta;
	};
	let { url, style, meta }: Props = $props();
</script>

<a href={url} {style}>
	<div class="border border-slate-300 bg-white p-4 shadow-2xl">
		<img src={meta.image} alt={meta.alt} class="rounded-sm" />
		<h2>{meta.title}</h2>
		<Metainfo {...meta} />
	</div>
</a>

<style lang="postcss">
</style>
