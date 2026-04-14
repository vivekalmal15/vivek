<script lang="ts">
	import { onMount } from 'svelte';
	import { personal } from '$lib/data/resume';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
>
	<div class="bg-grid" aria-hidden="true"></div>
	<div class="bg-glow" aria-hidden="true"></div>

	<div class="relative z-10 max-w-3xl text-center hero-fade" class:mounted>
		<h1
			class="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-text)]"
		>
			{personal.name}
		</h1>
		<p class="mt-4 text-xl md:text-2xl text-[var(--color-accent)] font-medium">
			Full Stack Developer
		</p>
		<p class="mt-6 text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
			From civil engineering blueprints to production-grade APIs — I build things that work.
		</p>

		<div class="mt-10 flex items-center justify-center gap-4 flex-wrap">
			<a
				href="#projects"
				class="px-6 py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
			>
				View My Work
			</a>
			<a
				href="#contact"
				class="px-6 py-3 rounded-md border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
			>
				Get in touch
			</a>
		</div>
	</div>
</section>

<style>
	.bg-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 48px 48px;
		mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
		-webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
	}

	.bg-glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at 50% 40%,
			rgba(45, 212, 191, 0.12),
			transparent 60%
		);
		animation: drift 14s ease-in-out infinite alternate;
	}

	@keyframes drift {
		0% {
			transform: translate(-3%, -2%) scale(1);
			opacity: 0.8;
		}
		100% {
			transform: translate(3%, 2%) scale(1.08);
			opacity: 1;
		}
	}

	.hero-fade {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hero-fade.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.bg-glow {
			animation: none;
		}
		.hero-fade {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
