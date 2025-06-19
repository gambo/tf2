<script lang="ts">
	import Socials from './Socials.svelte';
	import LogoLink from './LogoLink.svelte';
</script>

<footer class="font-inter-tight mt-32 mb-8">
	<div class="mx-auto grid gap-2">
		<LogoLink class="text-[8px]" />
		<div class="grid">
			<p style="font-size: 12px;" class="pl-2">
				Copyright © 1999–{new Date().getFullYear()} Shaun Richardson. All rights reserved.
			</p>
			<Socials></Socials>
		</div>
	</div>
</footer>

<style>
	footer {
		grid-area: -1 / main;
	}
</style>
