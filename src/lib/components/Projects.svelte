<script lang="ts">
	import { projects, type Project } from '$lib/data/resume';

	let expanded = $state<Record<string, boolean>>({});

	function toggle(name: string) {
		expanded[name] = !expanded[name];
	}
</script>

{#snippet techBadges(tech: string[])}
	<ul class="flex flex-wrap gap-2">
		{#each tech as t}
			<li
				class="text-xs px-2.5 py-1 rounded-full border border-[var(--color-accent)]/60 text-[var(--color-accent)]"
			>
				{t}
			</li>
		{/each}
	</ul>
{/snippet}

{#snippet linkButtons(_project: Project)}
	<div class="flex gap-3 mt-5">
		<span
			class="px-4 py-2 text-sm rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-not-allowed"
			aria-disabled="true"
			title="Coming soon"
		>
			GitHub
		</span>
		<span
			class="px-4 py-2 text-sm rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-not-allowed"
			aria-disabled="true"
			title="Coming soon"
		>
			Live Demo
		</span>
	</div>
{/snippet}

<section id="projects" class="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
	<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
		Projects
	</p>
	<h2 class="text-3xl md:text-4xl font-bold mb-12">Things I've built</h2>

	<div class="grid md:grid-cols-2 gap-6 items-stretch">
		{#each projects as project}
			<article
				class="project-card relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 flex flex-col h-full"
			>
				{#if project.featured}
					<span
						class="absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold z-10"
					>
						Featured
					</span>
				{/if}

				<h3 class="text-xl font-semibold mb-2 pr-24">{project.name}</h3>
				<p class="text-sm text-[var(--color-text-muted)] mb-5">
					{project.description}
				</p>

				{@render techBadges(project.tech)}

				<button
					class="mt-5 text-xs text-[var(--color-accent)] hover:underline self-start"
					onclick={() => toggle(project.name)}
					aria-expanded={!!expanded[project.name]}
				>
					{expanded[project.name] ? 'Hide highlights' : 'Show highlights'}
				</button>

				{#if expanded[project.name]}
					<ul class="mt-3 space-y-2">
						{#each project.highlights as h}
							<li class="flex gap-3 text-sm text-[var(--color-text-muted)]">
								<span
									class="mt-[0.55rem] h-px w-3 flex-shrink-0 bg-[var(--color-accent)]"
									aria-hidden="true"
								></span>
								<span>{h}</span>
							</li>
						{/each}
					</ul>
				{/if}

				<div class="mt-auto">
					{@render linkButtons(project)}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.project-card {
		transition:
			transform 250ms ease,
			border-color 250ms ease,
			box-shadow 250ms ease;
	}
	.project-card:hover {
		transform: translateY(-3px);
		border-color: color-mix(in srgb, var(--color-accent) 60%, transparent);
		box-shadow: 0 10px 30px -12px rgba(45, 212, 191, 0.25);
	}
</style>
