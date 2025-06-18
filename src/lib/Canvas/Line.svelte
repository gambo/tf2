<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		'--color'?: string;
		'--origin'?: string;
		'--rotation'?: `${string}deg`;
		'--thickness'?: string;
		'--type'?: string;
		'--y'?: string;
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
		border-top: var(--thickness) var(--type) var(--color);
		left: 0;
		position: absolute;
		rotate: var(--rotation);
		top: var(--y);
		transform-origin: var(--origin, 75% 50%);
        translate: -100vw;
        width: 200vw;
	}
</style>
