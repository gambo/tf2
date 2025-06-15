<script lang="ts">
	import type { Snippet } from 'svelte';
	import { code } from './attachments.svelte';
	import type { BuiltinLanguage } from 'shiki';

	type Props = {
		lang: BuiltinLanguage;
		children: Snippet;
	};
	let { lang, children }: Props = $props();
</script>

<div
	class="relative left-1/2 my-8 w-min -translate-x-1/2 overflow-clip rounded-md bg-slate-900 shadow-2xl"
>
	<div class="flex items-center gap-2 border-b border-b-neutral-900/70 px-3 py-2">
		<div class="flex gap-2">
			<span class="aspect-square w-3 rounded-full bg-[#ff5f56]"></span>
			<span class="aspect-square w-3 rounded-full bg-[#ffbf55]"></span>
			<span class="aspect-square w-3 rounded-full bg-[#27c274]"></span>
		</div>
		<div class="ml-2 font-mono text-sm text-neutral-400">{lang}</div>
	</div>
	<div data-lang={lang} {@attach code} class="w-min">
		{@render children()}
	</div>
</div>

<style lang="postcss">
	:global(.shiki) {
		padding: 1rex 2rch;
	}
</style>
