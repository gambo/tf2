<script lang="ts">
	import Terminal from './Terminal.svelte';
</script>

<div class="">
	<Terminal
		delay={1600}
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
- Cloud services, Azure

    `}
	/>
</div>
