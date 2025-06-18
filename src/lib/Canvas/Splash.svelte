<script lang="ts">
	import type { Redirect } from '@sveltejs/kit';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type CSSVars = {
		'--color'?: string;
		'--height'?: string;
		'--rotation'?: `${string}deg`;
		'--top'?: string;
		'--texture-length'?: `${string}px`;
	};

	type Props = {
		class?: ClassValue;
		children?: Snippet;
	} & CSSVars;

	let { class: classes, children, ...rest }: Props = $props();
</script>

<div class="splash">{@render children?.()}</div>

<style>
	.splash {
		--background: repeating-linear-gradient(
			calc(90deg - var(--rotation, 10deg)),
			var(--color1) 0px,
			var(--color2) var(--texture-length, 20px),
			transparent var(--texture-length, 20px)
		);
		--color1: var(--color, red);
		--color2: hsl(from var(--color1) h calc(s + 10) calc(l + 10));
		background: var(--background);
		height: var(--height);
		rotate: var(--rotation);
		translate: -25vw;
		width: 150vw;
	}
</style>
