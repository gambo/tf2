<script lang="ts">
	import Dinkus from '$lib/Dinkus.svelte';
	import Logo from '$lib/Logo.svelte';
	import Socials from '$lib/Socials.svelte';
	import Splash from '$lib/Splash.svelte';
</script>

<div class="pile">
	<article class="relative m-2.5 h-[900px] w-[430px] rounded-[100px] bg-white p-8 pt-16 shadow-2xl">
		<Splash color="wheat" />
		<div class="my-4 ml-15 flex scale-150 gap-2">
			<Logo />
			<div class="font-inter-tight text-front grid gap-[3px] text-sm tracking-wider uppercase">
				<span class="trim">Shaun</span>
				<span class="trim">Richardson</span>
			</div>
		</div>
		<div class="isolate">
			<Socials></Socials>
			<p class="cap isolate mt-2">
				I am a fun-loving addition to the team and I pride myself in being a rock-solid and
				dependable developer. I have spent over a decade building software in tightly regulated
				industries like fintech and mining, delivering under pressure and tight deadlines.
			</p>
			<p>
				I’ve worked across many different stacks based on client requirements and have always
				thrived because I push myself to learn fast and communicate clearly. My recent work spans
				Node.js, Typescript, React, Docker, SQL, SvelteJS and managing both Linux and Windows
				servers.
			</p>
			<p>
				I specialize in TypeScript and modern web platforms, with a strong focus on accessibility
				and user experience. I write test-driven code and work in agile teams with full CICD
				pipelines. I’ve led teams, managed projects, and thrive in collaborative environments.
			</p>
		</div>
	</article>
	<img
		src="/Iphone.png"
		alt="An iphone showing a pseudo wedpage of content"
		class="pointer-events-none relative"
	/>
</div>

<style lang="postcss">
</style>
