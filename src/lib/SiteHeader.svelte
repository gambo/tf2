<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/geist-mono';
	import '@fontsource-variable/inter-tight';
	import '@fontsource-variable/merriweather';
	import '@fontsource/fjalla-one';
	import LogoLink from './LogoLink.svelte';
	import Menu from './Menu.svelte';
	import Socials from './Socials.svelte';

	let {} = $props();
</script>

<header class="flex grid-cols-subgrid items-center justify-between">
	<LogoLink />
	<Socials />
	<Menu />
</header>

<style>
	header {
		grid-area: main;
		font-family: var(--font-inter-tight);
	}
</style>
