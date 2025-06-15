<script lang="ts">
	import { scrollY } from 'svelte/reactivity/window';
	import Typewriter from './Typewriter.svelte';

	let { title = '', command = '', output = '', typingSpeed = 100, delay } = $props();
	let cursor = $state(true);
	let el: HTMLDivElement | undefined = $state();
	const scroll = () => {
		el?.scrollTo({ top: el.scrollHeight });
	};
</script>

<div class="terminal w-full">
	<div class="flex items-center gap-2 border-b border-b-neutral-900/70 px-3 py-2">
		<div class="flex gap-2">
			<span class="disc rounded-full bg-[#ff5f56]"></span>
			<span class="disc rounded-full bg-[#ffbf55]"></span>
			<span class="disc rounded-full bg-[#27c274]"></span>
		</div>
		<div class="ml-2 font-mono text-sm text-neutral-400">{title}</div>
	</div>
	<div class="body">
		<div class="grid">
			<div class="flex gap-2">
				<span class="prompt">$</span>
				<span class="command"
					><Typewriter
						delay={0}
						speed={typingSpeed}
						text={command}
						onstop={() => (cursor = false)}
					/></span
				>
				{#if cursor}
					<span class="cursor">█</span>
				{/if}
			</div>
			<div bind:this={el} class="output h-50 overflow-y-scroll">
				<Typewriter text={output} {delay} speed={10} onstop={scroll} />
			</div>
		</div>
	</div>
</div>

<style>
	/* .wrap {
		border-radius: 1rem;
		clip-path: border-box;
		box-shadow: 0 0px 10px rgb(0 0 0 / 20%);
		padding: 4rem 0 0 4rem;
		--black: rgb(0 0 0 / 8%);
		border: 1px solid rgb(from #242424 r g b / 50%);
		background:
			linear-gradient(0deg, var(--black) 1px, transparent 1px),
			linear-gradient(90deg, var(--black) 1px, transparent 1px),
			linear-gradient(180deg, var(--color-yellow-500), var(--color-yellow-700));
		background-size:
			10px 10px,
			10px 10px,
			100%;
	} */
	.terminal {
		width: 100%;
		border-radius: 0.5rem 0 0 0;
		background-color: #242424;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
		font-family: var(--font-geist-mono);
		overflow: hidden;
	}
	.disc {
		width: 12px;
		aspect-ratio: 1 / 1;
		border-radius: 100rem;
	}

	.body {
		padding: 1rem;
		color: #abb2bf;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.prompt {
		color: #98c379;
		font-weight: bold;
	}

	.command {
		color: #e5c07b;
	}

	.cursor {
		display: inline-block;
		animation: blink 1s step-end infinite;
		color: #abb2bf;
	}

	.output {
		margin-top: 0.5rem;
		color: #abb2bf;
		white-space: pre-wrap;
		scrollbar-width: thin;
		scrollbar-color: #8b8b8b transparent;
		overflow-anchor: auto;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
