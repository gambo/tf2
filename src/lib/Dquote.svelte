<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

&OpenCurlyDoubleQuote;{@render children()}&CloseCurlyDoubleQuote;
