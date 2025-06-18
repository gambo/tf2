<script lang="ts">
	import Socials from './Socials.svelte';

	// import '@fontsource-variable/source-serif-4';
	// import '@fontsource/source-sans-pro';
	// import '@fontsource-variable/inter-tight';
	// import '@fontsource/fjalla-one';
	// import '@fontsource-variable/merriweather';
	// import '@fontsource-variable/geist-mono';
	import Logo from '$lib/Logo.svelte';
	import LogoLink from './LogoLink.svelte';
</script>

<footer class="font-inter-tight">
	<div class="mx-auto flex items-center justify-between gap-2">
		<LogoLink class="text-[8px]" />
		<Socials></Socials>
		<span style="font-size: 12px;">
			Copyright © 1999–{new Date().getFullYear()} Shaun Richardson. All rights reserved.
		</span>
	</div>
</footer>

<style>
	footer {
		grid-area: -1 / main;
	}
</style>
