<script>
	import Line from './Line.svelte';
	import VLine from './VLine.svelte';
</script>

<div class="text-slate-900/10">
	<Line
		--color="rgb(10 10 10 / 10%)"
		--type="solid"
		--rotation="-2deg"
		--thickness="1px"
		--y="10%"
	/>
	<Line
		--color="rgb(10 10 10 / 10%)"
		--type="solid"
		--rotation="-6deg"
		--thickness="1px"
		--origin="50%"
		--y="40%"
	/>
	<Line
		--color="rgb(10 10 10 / 10%)"
		--type="solid"
		--rotation="6deg"
		--thickness="1px"
		--y="40%"
	/>
	<VLine
		--color="rgb(10 10 10 / 20%)"
		--type="dashed"
		--thickness="1px"
		--x="calc(calc(100vw-66rch/2)+22rch)"
	/>
	<VLine --color="rgb(10 10 10 / 20%)" --type="dashed" --thickness="1px" --x="80%" />
</div>
