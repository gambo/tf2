<script lang="ts">
	import Linkdin from '$lib/icons/Linkdin.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import Resume from '$lib/icons/Resume.svelte';
	import Mail from '$lib/icons/Mail.svelte';
</script>

<article>
	<h3>About me</h3>
	<p>
		I build high-quality web applications. I've worked across the full stack for years, using
		various languages in highly regulated industries. I've modernized legacy code, led skilled
		teams, and mentored junior developers. I aim to make the backend as efficient as the frontend is
		useful.
	</p>
	<h3>Quickstart</h3>
	<p>
		You can read about my new <a href="/posts/kia-ora">Home</a>. I write about
		<a href="/posts?tag=design">Design</a>, <a href="/posts?tag=development">Development</a> &
		<a href="/posts?tag=programming">Programming</a>, and back it up with
		<a href="https://github.com/gambo">code you can read online</a>. I also like to
		<a href="/posts?tag=interview">interview</a> colleagues and collaborators I respect.
	</p>
	<h3>What people say about me</h3>
	<Blockquote
		--color="var(--color-accent)"
		--background-color="#ededed"
		cite="Eugene L - Senior Software developer, Xpertek Loan finance"
	>
		I've had the pleasure of working with Shaun, a highly talented software developer. Shaun brings
		a rare blend of technical expertise, creativity, and reliability to every project. His
		problem-solving skills and commitment to quality make him an invaluable collaborator.
	</Blockquote>
	<Blockquote
		--color="var(--color-amber-900)"
		--background-color="var(--color-amber-50)"
		cite="Steven J - Specialist Project Manager, Xpertek Loan finance"
	>
		I've had the pleasure of working with Shaun, a highly talented software developer. Shaun brings
		a rare blend of technical expertise, creativity, and reliability to every project. His
		problem-solving skills and commitment to quality make him an invaluable collaborator.
	</Blockquote>
	<Blockquote
		--color="var(--color-emerald-900)"
		--background-color="var(--color-emerald-50)"
		cite="Steven J - Specialist Project Manager, Xpertek Loan finance"
	>
		I've had the pleasure of working with Shaun, a highly talented software developer. Shaun brings
		a rare blend of technical expertise, creativity, and reliability to every project. His
		problem-solving skills and commitment to quality make him an invaluable collaborator.
	</Blockquote>
	<h3>Working with me</h3>
	<p>
		I am based in Tauranga, New Zealand. I am primarily looking for my next long-term role in and
		around the Bay of Plenty Region, but Iv'e never been one to turn down a great opportunity.
	</p>
	<div class="actionlinks mt-2 grid grid-cols-3 gap-[1rex]">
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="/"
		>
			<Linkdin />
			<span>Connect on LinkedIn</span>
		</a>
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="/"
		>
			<Resume />
			<span>Download my Resume</span>
		</a>
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="/"
		>
			<Mail />
			<span>Send me an Email</span>
		</a>
	</div>
	<Dinkus />
	<h3>Network?</h3>
	<div class="flex gap-8">
		<a href="/">I chat on Bluesky a little, happy to connect</a>
	</div>
	<div class="cta my-8 flex">
		<a href="https://www.linkedin.com/in/shaun-richardson-993149165/" class="cta" type="button">
			<span class="rounded-full bg-slate-600 p-1 text-white"><Linkdin class="" /></span>
			Contact me
		</a>
	</div>
	<p>
		If you will let me, I will give a talk to your employee's about my favourite tool Svelte/Kit and
		<a href="/">why</a> it is the <a href="/">most-loved&ast;</a> framework
	</p>
</article>

<style>
	.cta a {
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
	.actionlinks a {
		font-family: var(--font-inter-tight);
		padding: 1rem;
		border: 1px dashed;
		transition: 0.25s all ease-in-out;
		--linear-color: hsl(from var(--color-accent) h s l / 10%);
		background: radial-gradient(
			var(--linear-color) 0px,
			var(--linear-color) 2px,
			transparent 2px,
			transparent 8px
		);
		background-size: 8px 8px;
		&:hover {
			background: var(--color-accent);
			color: white;
			scale: 1.05;
		}
	}
</style>
