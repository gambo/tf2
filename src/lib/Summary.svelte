<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<aside class="color-slate-900 border border-l-8 bg-slate-200">
	<p class="-rotate-90 text-lg font-semibold">Summary</p>
	<ul>
		{@render children()}
	</ul>
</aside>
