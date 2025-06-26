<script module>
	import image from './titleimage.png';
	export const meta: SiteMeta = {
		ident: 'setup-your-editor',
		title: 'Setting up your editor',
		date: new Date('07 June 2025'),
		tags: ['development'],
		image,
		alt: 'A code editor with a dark theme, showing a code snippet in the center. The code is written in TypeScript, with syntax highlighting for keywords, strings, and comments. The editor has a clean and modern interface, with a sidebar on the left displaying file names and a terminal at the bottom.',
	};
</script>

<script lang="ts">
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
	import type { SiteMeta } from '../types';
	import Code from '$lib/Code.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Footlink from '$lib/Footlink.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
</script>

<div class="splash absolute inset-[30%_0_20%_0] [background-size:400px]"></div>
<Article {...meta}>
	{#snippet figcaption()}
		A default install of vscode is a great place to start, 90% of the features you need for 0.1%
		effort.
	{/snippet}
	{#snippet bodytext()}
		<h2>What makes me happy with my editor</h2>
		<p>
			I was recently asked by a <a href="https://www.linkedin.com/in/steven-joubert/"
				>good friend and long-time collaborator</a
			>, if I wouldn't mind sharing how I setup my editor. If you had asked me 10 years ago, I would
			have had a very different and incredibly detailed answer. I had highly customized Vim and
			Emacs settings with a set of dotfiles that I nursed.
		</p>
		<p>
			Over time though, I have got greater and more satisfying tool usage by cutting features and
			looking to narrow down my virtual luggage weight, youll find below my very minimal setup using
			Visual Studio Code below, and a few targeted extensions selected to mostly make me think less.
		</p>
		<Dinkus />
		<h3>GitHub Pull Requests and Issues</h3>

		<Code lang="powershell"
			><pre>{`
code --install-extension github.vscode-pull-request-github
		`.trim()}</pre></Code
		>
		<p>
			I do not want to leave my editor to manage pull requests and issues. Even though I still find
			myself on github quite a bit, when I am in the editor, in general. I want to stay there
		</p>

		<h3>Live Share</h3>
		<Code lang="powershell"
			><pre>{`
code --install-extension ms-vsliveshare.vsliveshare
		`.trim()}</pre></Code
		>
		<p>
			Live Share enables real-time collaborative editing and debugging. A really great extension
			that just cuts down so much noise when helping someone through an issue, pair programming or
			training.
		</p>

		<h3>Prettier, Code Formatter</h3>
		<Code lang="powershell">
			<pre>{`
		code --install-extension esbenp.prettier-vscode
		`.trim()}</pre></Code
		>
		<p>
			This is again, another extension that means I dont need to think. I don't want to think about
			formatting. Just do it. Do it reasonably well, so I can get going with minimal fuss.
		</p>

		<h3>Pretty TypeScript Errors</h3>
		<Code lang="powershell">
			<pre>{`
code --install-extension yoavbls.pretty-ts-errors
`.trim()}</pre></Code
		>
		<p>
			If Im going to make errors louder and more attention grabbing, I want them to look a bit
			nicer. But By no means is this an essential extension
		</p>

		<h3>Neovim Integration</h3>
		<Code lang="powershell">
			<pre>{`
		code --install-extension asvetliakov.vscode-neovim
		`.trim()}</pre></Code
		>
		<p>
			Unfortunately, for me, this extension is required. The Vim keybindings are so burned into my
			muscle memory, that its almost become a burden. If I have to type in an environemnt without
			Vim<Footlink id={1}></Footlink>, I feel like I am typing at half speed. This is the best Vim
			integration I have found for VSCode. It allows you to use Neovim as vim engine which leads to
			a snappier experience (at least to me)
		</p>

		<h3>Error Lens</h3>
		<Code lang="powershell"
			><pre>{`
code --install-extension usernamehw.errorlens
		`.trim()}</pre></Code
		>
		<p>
			I think that a secret of better development is to make sure errors are loud and clear. The
			more the editor is shouting at me due to the guidelines I lay down, then the less thinking I
			need to do.
		</p>
		<h3>Conclusion</h3>
		<p>
			And that is mostly it. I install language specific linters as I need them, and make sure the
			errors are shown loud and proud. I get use opinionated formatting so I dont need to think
			about it. If <em>tinkering</em> is the act of configuring your editor to your taste, I guess
			what I do is called <em>squeezing</em>. I get the most out of whats there and move on.
			Sometimes if you are spolied for choice, the quickest way forward is to eliminate it entirely.
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id={1}>
			<a href="https://stackoverflow.com/questions/11828270/how-do-i-exit-vim"
				>A famous question on Stack overflow asked how to exit VIM</a
			>. To those that know, it is a humourous take on the initial impenetrable wall of VIM, where
			even something as simple as exiting the program can feel archaic and mystical. I spent a lot
			of time learning Vim and now, I'm not entirely convinced that it was time well spent, but I
			would like to think it was.
		</Footnote>
	{/snippet}
</Article>
