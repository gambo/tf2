<script lang="ts">
	import { fly } from 'svelte/transition';
	import Terminal from './Terminal.svelte';
</script>

<div in:fly={{ x: -30, delay: 300 }} class="">
	<Terminal
		typingSpeed={30}
		delay={300}
		title="Key Skills"
		command="cat ~/.profile"
		output={`
Key Skills
==========
- Typescript
- Client & Managerial experience
- Docker, Microservices
- Automated Testing, Continuous integration
- Design, CSS and JS interactivity
- API development
`}
	/>
</div>
