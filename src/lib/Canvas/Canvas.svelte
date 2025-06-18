<script lang="ts">
	import type { Snippet } from 'svelte';
	import Lines from './Lines.svelte';
	import Splash from './Splash.svelte';
	import Trims from './Trims.svelte';
	import Noise from './Noise.svelte';
</script>

<div class="pile pointer-events-none absolute inset-0 overflow-hidden">
	<!-- <Splash
		--height="20rem"
		--color="#336699"
		--rotation="-6deg"
		--texture-length="4px"
		--top="15rem"
	/> -->
	<Lines></Lines>
	<Noise></Noise>
</div>

<style lang="postcss">
</style>
