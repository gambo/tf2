<script lang="ts">
</script>

<div class="pointer-events-none my-12 grid">
	<h1 class="trim sm:text-xs">Hi, I'm Shaun</h1>
	<div class="pile">
		<div class="splash -mx-[1000rem]"></div>
		<enhanced:img
			src="./me.png"
			class="transition-all"
			alt="Shaun, dressed smartly, sitting at a table and smiling"
		/>
		<h2 class="trim">Senior Software Developer</h2>
		<h3 class="trim">Full Stack Guy:</h3>
	</div>
	<h4 class="trim">From Cloud & DB, to interface & User</h4>
</div>

<style lang="postcss">
	:root {
		--font-size: 7rem;
		--white: rgb(255 255 255);
		--texture-length: 4px;
		--rotation: 3deg;
	}
	h1,
	h2,
	h3,
	h4 {
		text-align: right;
		color: #242424;
	}
	h1 {
		font-family: var(--font-merriweather);
		font-size: var(--font-size);
		margin-left: -15rem;
	}
	h2 {
		font-size: calc(var(--font-size) / 2);
		font-family: var(--font-inter-tight);
		font-weight: 900;
		color: var(--white);
		margin-left: -15rem;
		letter-spacing: 0.02rem;
	}
	h3,
	h4 {
		text-align: left;
	}
	h3 {
		align-self: flex-end;
		font-size: calc(var(--font-size) / 2);
		font-family: var(--font-inter-tight);
		font-weight: 900;
		color: var(--white);
		text-shadow: 1px 1px black;
	}
	h4 {
		font-size: calc(var(--font-size) / 3);
		font-family: var(--font-merriweather);
		margin-right: -20rem;
		text-transform: uppercase;
	}
	.splash {
		--color1: hsl(16, 100%, 40%);
		--color2: hsl(from var(--color1) h calc(s + 10) calc(l + 10));
		--background: repeating-linear-gradient(
			calc(87deg),
			var(--color1) 0px,
			var(--color2) var(--texture-length, 20px),
			transparent var(--texture-length, 20px)
		);
		background: var(--background);
	}
	@media (width <= 1050px) {
		h1 {
			font-size: 5rem;
			margin: 0;
		}
		h2 {
			font-size: 2rem;
			margin: 0;
		}
		h3 {
			font-size: 2rem;
		}
		h4 {
			font-size: 1.2rem;
		}
	}
	@media (width <= 600px) {
		h1 {
			font-size: 4rem;
		}
	}
	@media (width <= 470px) {
		h1 {
			font-size: 2rem;
			margin-right: 3rem;
		}
		h2 {
			font-size: 1.2rem;
			margin-right: 2rem;
		}
		h3 {
			font-size: 1.3rem;
			margin-left: 2rem;
		}
		h4 {
			font-size: 1rem;
			margin-left: 2rem;
		}
	}
	@media (width >= 1100px) {
		.grid {
			rotate: 3deg;
		}
	}
</style>
