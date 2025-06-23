<script lang="ts">
	import type { SiteDate, SiteTags } from '../routes/posts/types';
	import Calendar from './icons/Calendar.svelte';
	import Tags from './icons/Tags.svelte';

	type Props = {
		date: SiteDate;
		tags: SiteTags[];
		ident: string;
	};
	let { date, tags, ident }: Props = $props();
</script>

<div class="meta" style="view-transition-name:{ident}">
	<span class="text-front flex items-center gap-1">
		<Calendar />
		<date class="trim font-inter-tight">{date.toDateString()}</date>
	</span>
	<span class="text-front flex items-center gap-1">
		<Tags />
		<ul class="flex gap-1">
			{#each tags as tag}
				<li data-tag={tag}>#{tag}</li>
			{/each}
		</ul>
	</span>
</div>

<style>
	.meta {
		font-family: var(--font-merriweather);
		align-items: center;
		color: #777;
		display: grid;
		font-size: 0.7rem;
		gap: 1rch;
		margin-block: 4rex 1rex;
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
			&[data-tag='code'] {
				background: var(--color-orange-100);
				color: var(--color-orange-900);
			}
		}
	}
</style>
