<script lang="ts">
	import { personal, social } from '$lib/data/resume';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--color-border)] mt-24">
	<div
		class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]"
	>
		<p>© {year} {personal.name}</p>

		<div class="flex items-center gap-6">
			<a
				href={social.github || '#'}
				target="_blank"
				rel="noreferrer noopener"
				class="hover:text-[var(--color-accent)] transition-colors"
			>
				GitHub
			</a>
			<a
				href={social.linkedin || '#'}
				target="_blank"
				rel="noreferrer noopener"
				class="hover:text-[var(--color-accent)] transition-colors"
			>
				LinkedIn
			</a>
			<a
				href={`mailto:${personal.email}`}
				class="hover:text-[var(--color-accent)] transition-colors"
			>
				Email
			</a>
		</div>
	</div>
</footer>
