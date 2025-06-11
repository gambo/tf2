<script lang="ts">
	import Terminal from './Terminal.svelte';
	let output = `
HTTP/1.1 200 OK
Content-Length:
Content-Type: text/plain; charset=utf-8

Name: Shaun Richardson
Job Title: Senior Full-stack Engineer

Interests: Programming & Technology
		   Overly flashy "About Me" pages.
`;
</script>

<div class="">
	<Terminal delay={3000} command="curl -i https://shaun.im/bio.txt" {output} />
</div>
