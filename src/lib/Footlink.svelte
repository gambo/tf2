<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string | number;
	};
	let { id }: Props = $props();
</script>

<sup><a href="#footnote{id}" id="footlink{id}">[{id}]</a></sup>
