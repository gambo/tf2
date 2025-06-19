<script lang="ts">
	import type { Snippet } from 'svelte';
	import Lines from './Lines.svelte';
	import Splash from './Splash.svelte';
	import Noise from './Noise.svelte';
</script>

<div class="pile pointer-events-none absolute inset-0 overflow-hidden">
	<Lines></Lines>
	<Noise></Noise>
</div>

<style lang="postcss">
</style>
