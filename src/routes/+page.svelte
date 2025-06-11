<script lang="ts">
	import Splash from '$lib/Splash.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<Splash color="var(--color-orange-500)" />
