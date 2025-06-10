<script lang="ts">
	import SiteHeader from '$lib/SiteHeader.svelte';
	// import '@fontsource-variable/source-serif-4';
	// import '@fontsource/source-sans-pro';
	import '@fontsource-variable/inter-tight';
	import '@fontsource/fjalla-one';
	import '@fontsource-variable/merriweather';
	import '@fontsource-variable/geist-mono';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();
	let menu: { title: string; link: string }[] = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Journal', link: '/journal' },
	];

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

<div class="pointer-events-none fixed inset-0 bg-[url('/noise.png')] opacity-[0.04]"></div>
<SiteHeader />
{@render children()}
