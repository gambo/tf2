<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		'--color'?: string;
		'--type'?: string;
		'--thickness'?: string;
		'--rotation'?: `${string}deg`;
		'--x'?: string;
	};

	let props: Props = $props();
</script>

<div></div>

<style lang="postcss">
	:root {
		@property --color {
			syntax: '<color>';
			inherits: false;
			initial-value: red;
		}
		--type: solid;
        @property --thickness {
            syntax: '<length>'
            initial-value: 2px
        }
        @property --rotation {
           syntax: '<angle>' ;
           initial-value: 0deg;
        }
	}
	div {
		border-left: var(--thickness) var(--type) var(--color);
		left: var(--x);
		position: absolute;
		rotate: var(--rotation);
		top: 0;
		transform-origin: center;
        height: 100vw;
		width: var(--thickness);
	}
</style>
