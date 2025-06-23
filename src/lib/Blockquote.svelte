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
		&:before {
			content: '"';
			font-size: 4rem;
			display: block;
			text-box-edge: cap alphabetic;
			text-box-trim: trim-both;
			position: relative;
			bottom: -1rem;
			color: var(--color-accent);
		}
		font-size: 0.8rem;
		position: relative;
		padding-left: 1rem;
		margin: 1rem 0;
		font-style: italic;
		padding: 2rex 2rch;
		border: 1px dashed;
		border-left: 8px solid var(--color-accent);
		--diag-color: hsl(from #777 h s l / 10%);
		background: repeating-linear-gradient(
			45deg,
			var(--diag-color) 0px,
			var(--diag-color) 6px,
			transparent 6px,
			transparent 8px
		);
	}

	blockquote cite {
		display: block;
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 900;
	}
</style>
