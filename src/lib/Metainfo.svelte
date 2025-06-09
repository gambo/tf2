<script lang="ts">
	type Props = {
		date: SiteDate;
		tags: SiteTags[];
	};
	let { date, tags }: Props = $props();
</script>

<div class="meta">
	<date class="trim">{date.toDateString()}</date>
	<ul>
		{#each tags as tag}
			<li data-tag={tag}>#{tag}</li>
		{/each}
	</ul>
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
		}
	}
</style>
