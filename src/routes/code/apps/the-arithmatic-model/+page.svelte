<script module>
	import image from './titleimage.jpg';
	export const meta: SiteMeta = {
		ident: 'arithmatic',
		title: 'Simple math leads to big wins if you go far enough',
		date: new Date('12 June 2025'),
		tags: ['code'],
		image,
		alt: "A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance.",
	};
</script>

<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/icons/Back.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
import { codeToHtml } from 'shiki'

const code = 'const a = 1' // input code
const html = $derived(codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark'
}))

</script>

<Article {...meta}>
	{#snippet figcaption()}
	{/snippet}
	{#snippet bodytext()}
	{#await html then x}
	<pre><code>{@html x}</code></pre>
	{/await}
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>

<style>
	:global(.shiki) {
		padding: 1rem;
	}
</style>