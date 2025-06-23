<script lang="ts">
	import Toc from '$lib/TOC.svelte';
	import CallToAction from './CallToAction.svelte';
	import IntroText from './IntroText.svelte';
</script>

<main>
	<IntroText />
	<article>
		<Toc />
		<CallToAction />
	</article>
</main>

<style>
	main {
		grid-area: main;
	}
</style>
