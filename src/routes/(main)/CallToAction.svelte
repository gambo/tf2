<script lang="ts">
	import Linkdin from '$lib/icons/Linkdin.svelte';
	import Close from '$lib/icons/Close.svelte';
</script>

<article>
	<p>
		I make high quality applications for the web. I have worked across the full stack for many years
		in a variety of languages. You can read about my new <a href="/#">Home</a>. I write about
		<a href="/">Design</a>, <a href="/">Development</a> &
		<a href="/">Programming</a>. You can read my <a href="/">code</a> and
		<a href="/">Experiments</a> I also like to <a href="/">interview</a> colleagues and collaborators
		I respect.
	</p>
	<div class="cta my-8 flex justify-center">
		<button
			class="inline-flex items-center gap-1 pr-4 text-sm"
			commandfor="contact"
			command="show-modal"
			type="button"
		>
			<span class="rounded-full bg-slate-600 p-1 text-white"><Linkdin class="" /></span>
			Contact me
		</button>
	</div>
	<p>
		If you will let me, I will give a talk to your employee's about my favourite tool Svelte/Kit and
		<a href="/">why</a> it is the <a href="/">most-loved&ast;</a> framework
	</p>
</article>

<dialog id="contact" class="fixed h-1/2 w-1/2 translate-x-1/2 translate-y-1/2">
	<button class="absolute top-4 right-4" commandfor="contact" command="close"
		><Close class="text-slate-700" /></button
	>
	<article>
		<h2>I am available to work.</h2>
	</article>
</dialog>

<style>
	dialog {
		/* Exit Stage To */
		transform: translateY(-20px);

		&,
		&::backdrop {
			transition:
				display 0.25s allow-discrete,
				overlay 0.25s allow-discrete,
				opacity 0.25s ease,
				transform 0.25s ease;

			/* Exit Stage To */
			opacity: 0;
		}

		/* On Stage */
		&[open] {
			opacity: 1;
			transform: translateY(0px);

			&::backdrop {
				opacity: 0.8;
			}
		}

		/* Enter Stage From */
		@starting-style {
			&[open],
			&[open]::backdrop {
				opacity: 0;
			}

			&[open] {
				transform: translateY(20px);
			}
		}
	}
	.cta button {
		background: #242424;
		border-radius: 100rem;
		color: rgb(255 255 255 / 90%);
		font-family: var(--font-inter-tight);
		padding: 0.5rex 0.5rch;
		padding-right: 2rch;
		position: relative;
		text-box-edge: cap alphabetic;
		text-box-trim: trim-both;
		transition: 1s all ease-in-out;

		&:before {
			content: ' ';
			position: absolute;
			inset: 0;
			filter: blur(40px);
			border-radius: inherit;
			z-index: -1;
		}
		&:hover:before {
			animation-direction: normal;
			animation-duration: 3s;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
			animation-name: rotate-color;
			background: linear-gradient(var(--color-degree) in oklch longer hue, violet 0% 100%);
		}
	}
	@property --color-degree {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	@keyframes rotate-color {
		to {
			--color-degree: 360deg;
		}
	}
</style>
