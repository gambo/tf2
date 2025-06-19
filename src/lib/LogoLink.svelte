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
	class="focus:outline-accent group flex items-center gap-1 pl-2 outline-offset-4 transition-all outline-none {classes}"
>
	<Logo class="transition-all group-hover:-rotate-90" />
	<div class="font-inter-tight text-front grid gap-[3px] text-sm tracking-wider uppercase">
		<span class="trim">Shaun</span>
		<span class="trim">Richardson</span>
	</div>
</a>
