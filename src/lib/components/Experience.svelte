<script lang="ts">
	import { experience } from '$lib/data/resume';

	let sectionEl = $state<HTMLElement | null>(null);
	let visibleCount = $state(0);

	$effect(() => {
		if (!sectionEl) return;
		const items = sectionEl.querySelectorAll<HTMLElement>('[data-reveal]');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const idx = Number((entry.target as HTMLElement).dataset.index);
						visibleCount = Math.max(visibleCount, idx + 1);
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.2 }
		);
		items.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<section
	id="experience"
	bind:this={sectionEl}
	class="max-w-6xl mx-auto px-6 py-24 scroll-mt-20"
>
	<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
		Experience
	</p>
	<h2 class="text-3xl md:text-4xl font-bold mb-12">Where I've worked</h2>

	<ol class="relative border-l border-[var(--color-border)] ml-3">
		{#each experience as job, i}
			<li
				data-reveal
				data-index={i}
				class="reveal relative pl-8 pb-12 last:pb-0"
				class:visible={visibleCount > i}
			>
				<span
					class="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]"
				></span>

				<h3 class="text-xl md:text-2xl font-semibold text-[var(--color-text)]">
					{job.company}
				</h3>
				<p class="mt-1 text-sm text-[var(--color-accent)] font-medium">
					{job.role} · {job.start} – {job.end}
				</p>
				<p class="text-sm text-[var(--color-text-muted)]">{job.location}</p>

				<ul class="mt-4 space-y-2">
					{#each job.bullets as bullet}
						<li class="flex gap-3 text-[var(--color-text-muted)]">
							<span
								class="mt-[0.65rem] h-px w-3 flex-shrink-0 bg-[var(--color-accent)]"
								aria-hidden="true"
							></span>
							<span>{bullet}</span>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ol>
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
