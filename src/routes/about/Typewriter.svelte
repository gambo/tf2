<script lang="ts">
	import type { Snippet } from 'svelte';

	type Milliseconds = number;
	type Props = { delay: Milliseconds; speed: Milliseconds; text: string; onstop?: () => void };
	let { delay, speed, text, onstop }: Props = $props();
	let input = $derived(text);
	let current = $state(0);
	let output = $derived(input.slice(0, current));
	let intervalId: number = 0;

	const executeTimedAction = $derived(() => {
		if (current >= input.length) {
			clearInterval(intervalId);
			onstop?.();
		} else {
			current = current + 1;
		}
	});

	$effect(() => {
		setTimeout(() => {
			intervalId = setInterval(executeTimedAction, speed);
		}, delay);
	});
</script>

{output}
