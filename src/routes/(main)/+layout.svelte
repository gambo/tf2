<script lang="ts">
	// import '@fontsource-variable/source-serif-4';
	// import '@fontsource/source-sans-pro';
	import '@fontsource-variable/inter-tight';
	import '@fontsource/fjalla-one';
	import '@fontsource-variable/merriweather';
	import '@fontsource-variable/geist-mono';
	import '../../app.css';
	import MainLayout from '$lib/layouts/MainLayout.svelte';

	let { children } = $props();

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;
	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<svelte:head>
	<title>Shaun Richardson</title>
	<meta
		name="description"
		content="The personal website and Blog of Shaun Richardson, full stack developer"
	/>
</svelte:head>

<MainLayout>
	{@render children()}
</MainLayout>

<style>
</style>
