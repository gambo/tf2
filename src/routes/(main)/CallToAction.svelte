<script lang="ts">
	import Linkdin from '$lib/icons/Linkdin.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import Resume from '$lib/icons/Resume.svelte';
	import Mail from '$lib/icons/Mail.svelte';
</script>

<article>
	<h3>Working with me</h3>
	<p>
		I am based in Tauranga, New Zealand. I am primarily looking for my next long-term role in and
		around the Bay of Plenty Region, but Iv'e never been one to turn down a great opportunity.
	</p>
	<Dinkus />
	<div class="actionlinks mt-4 grid grid-cols-3 gap-[1rex]">
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="https://www.linkedin.com/in/shaun-richardson-993149165/"
		>
			<Linkdin />
			<span>Connect on LinkedIn</span>
		</a>
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="/Resume_shaun.pdf"
		>
			<Resume />
			<span>View my Resume</span>
		</a>
		<a
			class="rainbow flex aspect-[2/1] flex-col items-end justify-between gap-1 p-2 text-right"
			href="mailto:srconstruct@gmail.com"
		>
			<Mail />
			<span>Send me an Email</span>
		</a>
	</div>
	<h3>About me</h3>
	<p>
		I build high-quality web applications. I've worked across the full stack for years, using
		various languages in highly regulated industries. I've modernized legacy code, led skilled
		teams, and mentored junior developers. I aim to make the backend as efficient as the frontend is
		useful.
	</p>
	<h3>Quickstart</h3>
	<p>
		You can read about my new <a href="/posts/kia-ora">Home</a> or a breakdown of how i built
		<a href="/posts/site-breakdown">this site</a>. I write about
		<a href="/posts?tag=design">Design</a>, <a href="/posts?tag=development">Development</a> &
		<a href="/posts?tag=programming">Programming</a>, and back it up with
		<a href="https://github.com/gambo">code you can read online</a>. I also like to
		<a href="/posts?tag=interview">interview</a> colleagues and collaborators I respect.
	</p>
	<h3>What people say about me</h3>
	<div class="grid grid-cols-1 gap-8">
		<Blockquote
			--color="var(--color-accent)"
			--background-color="#ededed"
			cite="Eugene L - Senior Software developer, Xpertek Loan finance"
		>
			I've had the pleasure of working with Shaun, a highly talented software developer. Shaun
			brings a rare blend of technical expertise, creativity, and reliability to every project. His
			problem-solving skills and commitment to quality make him an invaluable collaborator.
		</Blockquote>
		<Blockquote
			--color="var(--color-amber-900)"
			--background-color="var(--color-amber-50)"
			cite="Steven J - Specialist Project Manager, Xpertek Loan finance"
		>
			I have had the pleasure of working with Shaun for over 20 years across multiple projects
			involving a wide range of objectives. Throughout our collaboration, Shaun has consistently
			demonstrated professionalism, focus, and a commitment to delivering work of the highest
			quality. His attention to detail and ability to exceed expectations make him a reliable and
			valued partner. I would welcome the opportunity to work with him again on any future project.
		</Blockquote>
	</div>
	<h3>Svelte/Kit Expert</h3>
	<p>
		I can give a talk to your employee's about my favourite tool Svelte/Kit and why it is the <a
			href="https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/">most-loved&ast;</a
		> framework
	</p>
	<Dinkus />
	<h3>Network?</h3>
	In general, I am always looking to spend time with people and connect on a deeper level, If you want
	to talk about any of the above, and you happen to be in the Tauranga area, why don't we grab a coffee?
</article>

<style>
	.actionlinks a {
		--linear-color: hsl(from var(--color-accent) h s l / 10%);
		background-color: white;
		background-image: linear-gradient(45deg, var(--linear-color) 2px, transparent 2px);
		background-size: 5px 5px;
		border: 1px dashed;
		font-family: var(--font-inter-tight);
		font-weight: 600;
		padding: 1rem;
		text-decoration: none;
		transition: 0.25s all ease-in-out;
		&:hover {
			background-color: var(--color-accent);
			color: white;
			scale: 1.05;
		}
	}
</style>
