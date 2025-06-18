<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import type { ClassValue } from 'svelte/elements';
	type Props = {
		class?: ClassValue;
	};
	let { class: classes }: Props = $props();
</script>

<a
	href="/"
	class="focus:outline-accent flex items-center gap-1 outline-offset-4 transition-all outline-none {classes}"
>
	<Logo />
	<div class="font-inter-tight text-front grid gap-[3px] text-sm tracking-wider uppercase">
		<span class="trim">Shaun</span>
		<span class="trim">Richardson</span>
	</div>
</a>
