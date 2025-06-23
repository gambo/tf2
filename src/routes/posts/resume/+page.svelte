<script module>
	import image from './titleimage.png';
	export const meta: SiteMeta = {
		ident: 'resume',
		title: 'Resume',
		date: new Date('24 June 2025'),
		tags: ['personal'],
		image,
		alt: 'A snippet of an open code editor with the code of the current website.',
	};
</script>

<script lang="ts">
	import Toc from '$lib/TOC.svelte';
	import type { SiteMeta } from '../types';
</script>

<main>
	<article>
		<Toc />
		<h3>Professional Summary</h3>

		<p>
			Senior software developer with full-stack background, specializing in UI, TypeScript, and
			enterprise systems. Strong in problem-solving and delivering clean, maintainable code.
			Effective team player with clear communication, equally comfortable with technical detail and
			business needs to build fast and well-crafted products.
		</p>

		<p>I have a valid, unrestricted Work Visa and References available on request</p>
		<h2>Work Experience</h2>

		<h3>Product Manager</h3>
		<div class="flex justify-between">
			<b>Xpertek Loan Finance</b>
			<span>2021 - 2025</span>
		</div>
		<ul>
			<li>
				Designed and developed a Software Development Kit in TypeScript to allow a rapid rewrite of
				the flagship Enterprise loan application on a short timeline.
			</li>
			<li>Designed and developed a Component Library for rapid UI Form Development</li>
			<li>
				Created a self-scaffolding UI platform that dynamically generated type-safe frontends from
				OpenAPI documents, automating the development of 800 endpoints. This reduced form creation
				time from days to minutes, enhanced data accuracy, and ensured seamless API communication.
			</li>
			<li>
				Created application middleware in NodeJS & Typescript to integrate with C#/MSSQL backend.
			</li>
			<li>Weekly Updates to Executive staff and management of Project Deliverables and timeline</li>
			<li>Mentoring and management of 6 junior staff across teams</li>
			<li>Developed and Maintained CI/CD pipeline and docker artifact management.</li>
			<li>Senior Software Engineer</li>
		</ul>

		<h3>Senior Software Engineer</h3>
		<div class="flex justify-between">
			<b>Xpertek Loan Finance</b>
			<span>2021 - 2025</span>
		</div>

		<ul>
			<li>Ticket Tracking System Overhaul.</li>
			<li>
				I maintained and later facilitated a move from an internal bug tracking system into a
				cloud-based service with no downtime or data loss. This reduced maintenance costs by 90%
			</li>
			<li>Preventing Accidental Bank Debits.</li>
			<li>
				Designed a Typescript/Nodejs microservice to block accidental transactions in test
				environments, preventing a large amount of financial losses and customer dissatisfaction.
			</li>
			<li>Database Migration Optimization.</li>
			<li>
				Reduced the export time of a single database conversion from 12 hours to 4 minutes,
				accelerating the rewrite of the flagship accounting platform.
			</li>
		</ul>

		<h3>Multotec Group (Contract)</h3>
		<div class="flex justify-between">
			<b>Xpertek Loan Finance</b>
			<span>2013 - 2018</span>
		</div>
		<p>
			Customer Relationship Management (CRM) System. Built a secure, role-based CRM for sales teams,
			supporting 5,000+ users while ensuring data security. Multotec Group Website. Designed and
			developed the consumer facing website, implementing customer login and CRM integration.
		</p>

		<h3>Mediasource Studios</h3>
		<div class="flex justify-between">
			<b>Mediasource Studios</b>
			<span>2007 - 2013</span>
		</div>
		<ul>
			<li>Developed the company's website and internal tools, leading to ongoing contract work.</li>
			<li>
				The Perfect Wave (Film, 2013). Designed and developed promotional materials, which helped
				secure funding for production. The film was successfully produced, starring Scott Eastwood.
			</li>
			<li>Christian Family Church Network.</li>
			<li>Built multiple internal and external websites, including a curriculum platform.</li>
			<li>Soccer World Cup 2010 (Alcom).</li>
			<li>Developed an inventory tracking system for telecommunications equipment.</li>
		</ul>
	</article>
</main>

<style>
	main {
		grid-area: main;
	}
</style>
