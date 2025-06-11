<script lang="ts">
	import { fly } from 'svelte/transition';
	import Terminal from './Terminal.svelte';
	let output = `
HTTP/1.1 200 OK
Content-Length:
Content-Type: text/plain; charset=utf-8

Name     : <b>Shaun Richardson</b>
Job Title: <b>Senior Full-stack Engineer</b>
Interests: <b>Programming & Technology</b>
		   <b>Overly detailed "About Me" pages.</b>
`;
</script>

<div in:fly={{ x: 30, delay: 2000 }}>
	<Terminal
		title="Bio"
		typingSpeed={30}
		delay={2000}
		command="curl -i https://shaun.im/bio.txt"
		{output}
	/>
</div>
