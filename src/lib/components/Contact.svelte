<script lang="ts">
	import { personal, social } from '$lib/data/resume';

	const showGithub = $derived(social.github.trim() !== '');
	const showLinkedin = $derived(social.linkedin.trim() !== '');
</script>

<section
	id="contact"
	class="max-w-3xl mx-auto px-6 py-24 text-center scroll-mt-20"
>
	<p class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
		Contact
	</p>
	<h2 class="text-3xl md:text-5xl font-bold mb-4">Let's work together</h2>
	<p class="text-[var(--color-text-muted)] text-base md:text-lg mb-10 max-w-xl mx-auto">
		I'm open to full-time roles and interesting projects. Reach out anytime.
	</p>

	<a
		href="mailto:{personal.email}"
		class="inline-block px-8 py-4 rounded-md bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold text-base md:text-lg hover:opacity-90 transition-opacity"
	>
		Get in Touch
	</a>

	<div class="mt-6 flex flex-col gap-1 text-[var(--color-text-muted)]">
		<p>{personal.location}</p>
	</div>

	{#if showGithub || showLinkedin}
		<div class="mt-10 flex items-center justify-center gap-4">
			{#if showGithub}
				<a
					href={social.github}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="GitHub"
					class="icon-btn"
				>
					GitHub
				</a>
			{/if}
			{#if showLinkedin}
				<a
					href={social.linkedin}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="LinkedIn"
					class="icon-btn"
				>
					LinkedIn
				</a>
			{/if}
		</div>
	{/if}
</section>

<style>
	.icon-btn {
		padding: 0.5rem 1.25rem;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border);
		color: var(--color-text);
		transition:
			color 200ms ease,
			border-color 200ms ease;
	}
	.icon-btn:hover {
		color: var(--color-accent);
		border-color: var(--color-accent);
	}
</style>
