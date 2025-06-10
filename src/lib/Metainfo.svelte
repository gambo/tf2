<script lang="ts">
	import Calendar from './icons/Calendar.svelte';
	import Tags from './icons/Tags.svelte';

	type Props = {
		date: SiteDate;
		tags: SiteTags[];
	};
	let { date, tags }: Props = $props();
	let vtn = date.toString().slice(0, 15).replaceAll(' ', '');
</script>

<div class="meta" style="view-transition-name:{vtn}">
	<span class="flex items-center gap-1">
		<Calendar />
		<date class="trim">{date.toDateString()}</date>
	</span>
	<span class="flex items-center gap-1">
		<Tags />
		<ul>
			{#each tags as tag}
				<li data-tag={tag}>#{tag}</li>
			{/each}
		</ul>
	</span>
</div>

<style>
	.meta {
		align-items: center;
		color: #777;
		display: flex;
		font-size: 0.7rem;
		gap: 1rch;
		margin-bottom: 1rex;
		li {
			align-items: center;
			border-radius: 999rem;
			border: 1px solid;
			display: flex;
			font-family: var(--font-sans);
			font-size: 0.5rem;
			font-weight: 600;
			line-height: 0;
			padding: 1rex 0.5rch;
			text-transform: uppercase;
			&[data-tag='personal'] {
				background: var(--color-violet-100);
				color: var(--color-violet-900);
			}
			&[data-tag='career'] {
				background: var(--color-sky-100);
				color: var(--color-sky-900);
			}
		}
	}
</style>
