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
	import SiteFooter from '$lib/SiteFooter.svelte';
	import MainLayout from '$lib/layouts/MainLayout.svelte';
	import Splash from '$lib/Canvas/Splash.svelte';

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

<MainLayout>
	<SiteHeader />
	{@render children()}
	<SiteFooter />
</MainLayout>

<style>
</style>
