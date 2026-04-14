<script lang="ts">
	import { education } from '$lib/data/resume';

	const notes: Record<string, string> = {
		'CMR Institute of Technology':
			'Foundation in systems thinking and analytical problem-solving'
	};
</script>

<section class="max-w-6xl mx-auto px-6 pb-24 scroll-mt-20">
	<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
		Education
	</p>
	<h2 class="text-3xl md:text-4xl font-bold mb-12">How I got here</h2>

	<div class="grid md:grid-cols-2 gap-6">
		{#each education as edu}
			<div
				class="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 flex flex-col gap-2"
			>
				<div class="flex items-start justify-between gap-4">
					<h3 class="text-lg md:text-xl font-semibold text-[var(--color-text)]">
						{edu.school}
					</h3>
					{#if edu.gpa}
						<span
							class="inline-block text-xs font-medium px-2 py-1 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] whitespace-nowrap"
						>
							GPA {edu.gpa}
						</span>
					{/if}
				</div>
				<p class="text-sm text-[var(--color-accent)] font-medium">
					{edu.degree}
				</p>
				<p class="text-sm text-[var(--color-text-muted)]">
					{edu.location} · {edu.graduated}
				</p>
				{#if notes[edu.school]}
					<p class="mt-3 text-sm italic text-[var(--color-text-muted)]">
						{notes[edu.school]}
					</p>
				{/if}
			</div>
		{/each}
	</div>
</section>
