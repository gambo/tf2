<script lang="ts">
	import { fly } from 'svelte/transition';
	import Terminal from './Terminal.svelte';
	let output = `
> vite dev


  <span class="text-green-700 font-bold">VITE v6.3.5</span>  <span class="text-neutral-700">ready in</span> 1233 ms

  ➜  <b class="text-white">Local:</b>   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
`;
</script>

<div in:fly={{ x: 60, delay: 3000 }}>
	<Terminal
		title="Work with me"
		typingSpeed={30}
		delay={3000}
		command={`cd work && pnpm run dev`}
		{output}
	/>
</div>
