<script lang="ts">
	import { skills } from '$lib/data/resume';

	const groups = [
		{ label: 'Languages', items: skills.languages },
		{ label: 'Frontend', items: skills.frontend },
		{ label: 'Backend', items: skills.backend },
		{ label: 'Databases', items: skills.databases },
		{ label: 'Tools', items: skills.tools }
	];
</script>

<section id="skills" class="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
	<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
		Skills
	</p>
	<h2 class="text-3xl md:text-4xl font-bold mb-12">What I work with</h2>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each groups as group}
			<div>
				<h3
					class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
				>
					{group.label}
				</h3>
				<ul class="flex flex-wrap gap-2">
					{#each group.items as skill}
						<li>
							<span class="skill-pill">{skill}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.skill-pill {
		display: inline-block;
		font-size: 0.875rem;
		padding: 0.375rem 0.875rem;
		border-radius: 9999px;
		border: 1px solid var(--color-border);
		color: var(--color-text);
		background-color: transparent;
		transition:
			background-color 250ms ease,
			color 250ms ease,
			border-color 250ms ease,
			transform 250ms ease;
	}
	.skill-pill:hover {
		background-color: var(--color-accent);
		color: var(--color-bg);
		border-color: var(--color-accent);
		transform: translateY(-1px);
	}
</style>
