<script module>
	import image from './titleimage.webp';
	export const meta: SiteMeta = {
		ident: 'big-forms',
		title: 'The Not-So-Little problems with Big forms',
		date: new Date('11 June 2025'),
		tags: ['programming'],
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
	import type { SiteMeta } from '../types';
</script>

<Article {...meta}>
	{#snippet figcaption()}
		A Form Builder prototype designed by <a href="https://dribbble.com/shots/15131388-Form-Builder"
			>Raghunath RV</a
		>, based in New York. Forms have long been an area of <em>intense</em> focus in my career
	{/snippet}
	{#snippet bodytext()}
		<p class="cap">
			UK government style guides emphasize keeping forms simple with minimal design. This approach
			is important, especially in complex cases like medical service applications or government
			assistance, where simplicity reduces user burden.
		</p>
		<p>
			Big forms often overwhelm users with too many fields, causing confusion and errors. On mobile,
			large forms are hard to navigate. Performance can suffer as the browser handles complex DOMs.
			Validation becomes complicated, increasing chances of mistakes and frustrating users.
		</p>
		<Dinkus />
		<p class="cap">
			Behind the scenes, sending large amounts of data can create "state explosion" issues on the
			backend. For example, conflicting account details can cause errors, showing a mismatch between
			frontend complexity and backend processing. Both frontend and backend aim to simplify the
			process.
		</p>
		<p>
			In specialized fields like mining, forms collect varied, detailed data—business interests,
			hardware reports, scientific measurements—balancing thoroughness with ease of use is tough.
		</p>
		<p>
			Tools exist to enforce data correctness in databases and ensure type safety on the frontend.
			However, frontend form design often does not match backend data structures. Changing designs
			to fit backend needs can be costly and constrained by accessibility standards.
		</p>
		<Dinkus />
		<p class="cap">
			UI libraries like React JSON Schema Form and FormKit help but don’t fully solve the
			complexity. Projects generating hundreds of typed forms show this is a difficult space.
		</p>
		<p>
			If we can type data with JSON Schema and OpenAPI on the backend, ideally the frontend form
			should reflect that type discipline. Libraries like Filament show promise by combining
			flexibility with strict data handling.
		</p>
		<p class="cap">
			In summary, big forms suffer from cognitive overload, poor mobile UX, validation and
			performance issues, and backend complexity. Simplifying forms through steps, conditional
			fields, and better integration between frontend and backend types can improve usability and
			maintainability.
		</p>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
