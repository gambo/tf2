<script lang="ts">
	import Bluesky from './icons/Bluesky.svelte';
	import Github from './icons/Github.svelte';
	import Linkdin from './icons/Linkdin.svelte';
</script>

<span class="flex items-center">
	<a href="https://github.com/gambo"><Github /></a>
	<a href="https://bsky.app/profile/shaun.click"><Bluesky /></a>
	<a href="https://www.linkedin.com/in/shaun-richardson-993149165/"><Linkdin /></a>
</span>

<style>
	a {
		--padding: 0.5rem;
		padding: var(--padding);
		transition: 0.15s all ease-in;
		&:hover {
			background-color: var(--color-accent);
			border-radius: 100rem;
			color: white;
			padding: var(--padding);
		}
	}
</style>
