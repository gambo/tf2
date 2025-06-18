<script lang="ts">
	import IntroText from '$lib/IntroText.svelte';

	import Dinkus from '$lib/Dinkus.svelte';
	import MainLayout from '$lib/layouts/MainLayout.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<main></main>
