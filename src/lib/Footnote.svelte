<script lang="ts">
	import type { Snippet } from 'svelte';
	import Back from './Back.svelte';

	type Props = {
		id: string | number;
		children: Snippet;
	};
	let { id, children }: Props = $props();
</script>

<li class="footnote" id="footnote{id}">
	{@render children()}
	<span class="footnote-meta"><a href="#footlink{id}"><Back /></a></span>
</li>
