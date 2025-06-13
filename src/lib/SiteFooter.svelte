<script lang="ts">
	// import '@fontsource-variable/source-serif-4';
	// import '@fontsource/source-sans-pro';
	// import '@fontsource-variable/inter-tight';
	// import '@fontsource/fjalla-one';
	// import '@fontsource-variable/merriweather';
	// import '@fontsource-variable/geist-mono';
	import Logo from '$lib/Logo.svelte';
</script>

<footer class="font-inter-tight mx-auto mt-60 w-[65rch] p-2">
	<div class="mx-auto flex items-end justify-between gap-2">
		<a href="/" class="flex items-center gap-1">
			<Logo />
			<div class="font-inter-tight text-front grid gap-[3px] text-sm tracking-wider uppercase">
				<span class="trim">Shaun</span>
				<span class="trim">Richardson</span>
			</div>
		</a>
		<span style="font-size: 12px;">
			Copyright © 1999–{new Date().getFullYear()} Shaun Richardson. All rights reserved.
		</span>
	</div>
</footer>
