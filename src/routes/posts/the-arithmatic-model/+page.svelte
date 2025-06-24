<script module lang="ts">
	import image from './titleimage.jpg';
	export const meta: SiteMeta = {
		ident: 'arithmatic',
		title: 'Simple math leads to big wins if you go far enough',
		date: new Date('12 June 2025'),
		tags: ['development', 'programming'],
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
	import Code from '$lib/Code.svelte';
	import type { SiteMeta } from '../types';

	interface User {
		username: string;
		password: string;
	}
	interface Customer {
		bankName: string;
		bankAccountNumber: number;
	}

	const addCustomerDetails = <T extends User>(u: T, details: Customer) => {
		return { ...u, ...details };
	};

	const user: User = { username: 'Shaun', password: 'hashme' };
	const a = addCustomerDetails(user, { bankAccountNumber: 123, bankName: 'Standard' });
</script>

<div
	class="absolute top-1/4 right-0 bottom-1/4 left-0 bg-[url(/math.svg)] [background-size:20px]"
></div>
<Article {...meta}>
	{#snippet figcaption()}
		The image is intuitive for most of us. Take a smiley face, add a sad face, and you get a neutral
		face.
	{/snippet}
	{#snippet bodytext()}
		<p class="cap">
			Given the title image above, we have actually absorbed the intent of the plus and minus
			symbols on a deeper level. We don't actually know how to perform addition on faces. What we
			have internalized is perhaps <em>composition</em> of one element to another in a certain context.
			The faces could be the mood of a person. If they are happy in the morning, and sad at night, we
			could say they had an average day. Or perhaps it's two people in a room and we are remarking on
			the disposition of the room on average. This is the the reason I feel the haskell guys over the
			hedge get so passionate about Functional programming, Is because there is a kind of abstract beauty
			in some of the concepts. Let's explore it a bit further in this example of an Address book
		</p>
		<Code lang="haskell">
			<pre>
{`

let book = AddressBook [("Alice", "123 Street")]
let updated = book + ("Bob", "456 Lane")
`.trim()}
			</pre>
		</Code>
		<p>
			This is really pretty straight forward to understand. If I have an addressbook, and I add an
			address to it, I will get an address book back with the new address added. Thats not what we
			are actually doing under the hood
		</p>
		<p>
			But I'm not particularly interested in whats going on under the hood, but more about the
			mental model. If we can boil down our mental model of pushing something onto an array as
			addition, we can do that with other things as well. In my little world, I think that if I can
			pursue this path further than most people would.. what can I learn?
		</p>
		<Dinkus />
		<p>
			We are building a small Loan finance engine. We have a User interface that would be a standard
			User using our app. We can have different types of Users. Customers would be users that
			actually would have a loan, an Employer could register on your site, as they would like to
			garnish a Customer's paycheck. We can setup some interface's to start
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
interface Employer {
	employerId: number
}

		`.trim()}
</pre>
		</Code>
		<p>
			If I wanted the intuition of <code class="inline">User + CustomerDetails = Customer</code>, I
			could map out some functions to handle the composition. For example, you might want a function
			to add employer details to a user, just like we did for customers. This approach lets you
			compose new types from existing ones in a predictable way, mirroring how addition works in
			math. By abstracting these operations, you make your code more reusable and expressive,
			allowing you to build up complex objects from simple building blocks. Crucially, a Customer
			could also be an Employer, so our principled approach has allowed this flexibility.
		</p>
		<Code lang="typescript">
			<pre>
{`
const addCustomerDetails = <T extends User>(u:T, details:Customer) {
  return {...u, ...details}
}
const addEmployerDetails = <T extends User>(u:T, details:Employer) {
  return {...u, ...details}
}
const user = {username: 'Shaun', password: 'hashme'}
const customer = addCustomerDetails(user, {bankName: 'ANZ', backAccountNumber: 123123123})
const employerCustomer = addEmployerDetails(customer, {employerId: 123})
		`.trim()}
</pre>
		</Code>
		<p>
			Now we would like to provide the Customer with a credit facility. Following our guardrails we
			can write it in Math's form first. <code class="inline whitespace-pre"
				>Customer + Facility = CustomerWithFacility</code
			>. The Math form makes it clear here, we can only add a Credit Facility to a Customer role
			because the Customer role is the only role that can have loans, so we enforce it in the type.
		</p>
		<Code lang="typescript">
			<pre>
{`
interface Facility {
	income: number
	expenses: number
}
const addFacility = <T extends customer>(u:T, details:Facility) {
  return {...u, ...details}
}
`.trim()}
</pre>
		</Code>
		<p>
			Suppose a user has all the correct information and now wants to apply for a loan, we need to
			remember that a Customer can have many loans if their facility can handle it.
		</p>
		<Code lang="typescript">
			<pre>
{`
const addFacility = <T extends customer>(u:T, details:Facility) {
  return {...u, ...details}
}
`.trim()}
</pre>
		</Code>
	{/snippet}
	{#snippet footnotes()}
		<Footnote id="1">Em dash has been placed by me intentionally.</Footnote>
	{/snippet}
</Article>
