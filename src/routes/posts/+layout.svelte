<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../../app.css';
	import '@fontsource-variable/inter-tight';
	import '@fontsource/fjalla-one';
	import '@fontsource-variable/merriweather';
	import '@fontsource-variable/geist-mono';
	import MainLayout from '$lib/layouts/MainLayout.svelte';
	import { onNavigate } from '$app/navigation';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<MainLayout>
	<div class="m-auto my-8 w-[65rch]" data-theme="plastic">
		{@render children()}
	</div>
</MainLayout>

<style lang="postcss">
</style>
