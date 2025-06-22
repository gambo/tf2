<script lang="ts">
	let menu: { title: string; link: string }[] = [
		{ title: 'Home', link: '/' },
		{ title: 'Posts', link: '/posts' },
	];
</script>

<menu>
	<div class="pile">
		<div class="float-bg"></div>
		<ol class="relative flex gap-1">
			{#each menu as { title, link }, i}
				{@const leading_number = String(i + 1).padStart(2, '0')}
				<li>
					<a
						class="hover:bg-accent text-accent grid px-3 py-2 transition-all hover:text-white"
						href={link}
					>
						<span class="text-right text-xs text-[8px]">{leading_number}</span>
						<span>{title}</span>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</menu>

<style>
	a {
		outline: none;
		&:focus {
			outline: 1px solid var(--color-accent);
		}
	}
</style>
