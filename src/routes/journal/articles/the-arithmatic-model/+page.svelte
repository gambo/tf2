<script module lang="ts">
	import image from './titleimage.jpg';
	export const meta: SiteMeta = {
		ident: 'arithmatic',
		title: 'Simple math leads to big wins if you go far enough',
		date: new Date('12 June 2025'),
		tags: ['code'],
		image,
		alt: "A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance.",
	};

	interface User {
		username: string;
		password: string;
	}
	interface Customer {
		bankName: string;
		bankAccountNumber: number;
	}
	interface Employer {
		employerName: string;
		salaryDeductionPercentage: number;
	}
	interface Financials {
		income: number;
	}

	const add = <T, U>(a: T, b: U) => {
		return { ...a, ...b };
	};
	const user = { username: 'hello', password: 'pass' };
	const customer = { bankAccountNumber: 123, bankName: 'Satandard' };
	const c = add<User, Customer>(user, customer);
</script>

<script lang="ts">
	import Dquote from '$lib/Dquote.svelte';
	import Dinkus from '$lib/Dinkus.svelte';
	import Back from '$lib/icons/Back.svelte';
	import Footnote from '$lib/Footnote.svelte';
	import Article from '$lib/Article.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Article {...meta}>
	{#snippet figcaption()}
		The image is intuitive for most of us. Take a smiley face, add a sad face, and you get a neutral
		face. We have absorbed the intent of the plus an minus symbols on a deeplevel, and this is the
		point I want to touch on
	{/snippet}
	{#snippet bodytext()}
		<p>
			The reason I feel the haskell guys over the hedge get so passionate about Functional
			programming, Is because there is a kind of abstract beauty in some of the concepts. Take the
			folowing example of an Address book
		</p>
		<Code lang="haskell">
			<pre>
let book = AddressBook [("Alice", "123 Street")]
let updated = book + ("Bob", "456 Lane")
			</pre>
		</Code>
		<p>
			This is really pretty straight forward to understand. Specifying both the book, and an
			addition to the book boils down to this very simple concept of addition. Thats not what we are
			actually doing under the hood, here you would need a Custom Type to overload the "+" symbol to
			concatenate two arrays of the same type together. That will also mean a helper function
		</p>
		<p>
			But I'm not particularly interested in whats going on under the hood, but more about the
			mental model. If we can boil down our mental model of pushing something onto an array as
			addition, we can do that with other things as well. In my little world, I think that if I can
			pursue this path further than most people would.. what can I learn?
		</p>
		<Code lang="typescript">
			<pre>{`
interface User {
	username: string
	password: string
}
interface Customer {
	bankName: string
	bankAccountNumber: number
}

const addCustomerDetails = (u:User, details:Customer) {

}
		`.trim()}
</pre>
		</Code>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">
			Em dash has been placed by me intentionally.
			<span class="footnote-meta"><a href="#footlink1"><Back /></a></span>
		</Footnote>
	{/snippet}
</Article>
