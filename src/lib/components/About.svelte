<script lang="ts">
	import { personal } from '$lib/data/resume';

	let sectionEl = $state<HTMLElement | null>(null);
	let visible = $state(false);

	$effect(() => {
		if (!sectionEl) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(sectionEl);
		return () => observer.disconnect();
	});

	const stats = [
		{ value: '~90%', label: 'Test Coverage in Production' },
		{ value: '2+', label: 'Years Professional Experience' },
		{ value: 'MS', label: 'Computer Science, Stevens Institute' }
	];
</script>

<section
	id="about"
	bind:this={sectionEl}
	class="max-w-6xl mx-auto px-6 py-24 scroll-mt-20"
>
	<div class="reveal" class:visible>
		<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
			About
		</p>
		<blockquote
			class="italic text-lg md:text-xl text-[var(--color-text-muted)] border-l-2 border-[var(--color-accent)] pl-4 mb-12 max-w-2xl"
		>
			"Not every developer started with code. Some started with blueprints."
		</blockquote>
	</div>

	<div class="grid md:grid-cols-2 gap-12 items-start">
		<div class="reveal" class:visible style="transition-delay: 100ms">
			<p class="text-base md:text-lg text-[var(--color-text)] leading-relaxed">
				{personal.bio}
			</p>
			<a
				href="/resume.pdf"
				download
				class="inline-block mt-8 px-6 py-3 rounded-md border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
			>
				Download Resume
			</a>
		</div>

		<div class="flex flex-col gap-6">
			{#each stats as stat, i}
				<div
					class="reveal rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
					class:visible
					style="transition-delay: {200 + i * 100}ms"
				>
					<div class="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">
						{stat.value}
					</div>
					<div class="mt-2 text-sm text-[var(--color-text-muted)]">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
	}
	.reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
	@media (prefers-reduced-motion: reduce) {
		.reveal {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
