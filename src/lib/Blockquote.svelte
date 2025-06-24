<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		cite: string;
		children: Snippet;
	};
	let { cite, children }: Props = $props();
</script>

<blockquote>
	{@render children()}
	<cite>{cite}</cite>
</blockquote>

<style>
	blockquote {
		animation-name: in;
		animation-timeline: view(block 60% 10%);
		animation-name: in;
		animation-fill-mode: both;
		animation-duration: 0.25s;
		animation-timing-function: ease-out;
		&:before {
			bottom: -2rem;
			color: var(--color-accent);
			content: '“';
			display: block;
			font-family: var(--font-geist-mono);
			font-size: 7rem;
			left: -1.5rem;
			position: relative;
			text-box-edge: cap alphabetic;
			text-box-trim: trim-both;
		}
		font-size: 0.8rem;
		position: relative;
		padding-left: 1rem;
		font-style: italic;
		padding: 2rex 2rch;
		border: 1px dashed;
		border-left: 8px solid var(--color-accent);
		--diag-color: hsl(from #777 h s l / 10%);
		background: repeating-linear-gradient(
			45deg,
			var(--diag-color) 0px,
			var(--diag-color) 2px,
			transparent 2px,
			transparent 8px
		);
		backdrop-filter: blur(5rem);
	}

	blockquote cite {
		display: block;
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 900;
	}

	@keyframes in {
		from {
			opacity: 0;
			transform: translateX(2rem);
		}
		to {
			opacity: 1;
		}
	}
</style>
