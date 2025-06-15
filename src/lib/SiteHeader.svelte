<script lang="ts">
	// import '@fontsource-variable/source-serif-4';
	// import '@fontsource/source-sans-pro';
	import '@fontsource-variable/inter-tight';
	import '@fontsource/fjalla-one';
	import '@fontsource-variable/merriweather';
	import '@fontsource-variable/geist-mono';
	import Logo from '$lib/Logo.svelte';
	import '../app.css';
	import Socials from './Socials.svelte';

	let {} = $props();
	let menu: { title: string; link: string }[] = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Journal', link: '/journal' },
		{ title: 'Code', link: '/code' },
	];
</script>

<header class="font-inter-tight mx-auto w-[65rch] p-2">
	<div class="mx-auto flex items-center justify-between gap-2">
		<a href="/" class="flex items-center gap-1 transition-all hover:scale-105">
			<Logo />
			<div class="font-inter-tight text-front grid gap-[3px] text-sm tracking-wider uppercase">
				<span class="trim">Shaun</span>
				<span class="trim">Richardson</span>
			</div>
		</a>
		<menu>
			<ol class="relative flex gap-1">
				{#each menu as { title, link }, i}
					{@const leading_number = String(i + 1).padStart(2, '0')}
					<li>
						<a
							class="text-accent hover:bg-accent grid px-3 py-2 transition-all hover:text-white"
							href={link}
						>
							<span class="text-right text-xs text-[8px] transition-all">{leading_number}</span>
							<span>{title}</span>
						</a>
					</li>
				{/each}
				<li class="absolute top-[0.8rem] left-85"><Socials></Socials></li>
			</ol>
		</menu>
	</div>
</header>
