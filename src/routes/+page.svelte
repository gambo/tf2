<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>
