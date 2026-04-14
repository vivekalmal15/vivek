<script lang="ts">
	import { personal } from '$lib/data/resume';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 10;
	}

	function closeMenu() {
		menuOpen = false;
	}

	$effect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	class:scrolled
>
	<nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
		<a href="#top" class="text-lg font-semibold tracking-tight hover:text-[var(--color-accent)] transition-colors">
			{personal.name}
		</a>

		<ul class="hidden md:flex items-center gap-8 text-sm text-[var(--color-text-muted)]">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="hover:text-[var(--color-accent)] transition-colors"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<button
			class="md:hidden flex flex-col gap-1.5 p-2"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span
				class="block w-6 h-0.5 bg-current transition-transform duration-200"
				class:rotate-45={menuOpen}
				class:translate-y-2={menuOpen}
			></span>
			<span
				class="block w-6 h-0.5 bg-current transition-opacity duration-200"
				class:opacity-0={menuOpen}
			></span>
			<span
				class="block w-6 h-0.5 bg-current transition-transform duration-200"
				class:-rotate-45={menuOpen}
				class:-translate-y-2={menuOpen}
			></span>
		</button>
	</nav>

	{#if menuOpen}
		<div class="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
			<ul class="flex flex-col px-6 py-4 gap-4 text-sm text-[var(--color-text-muted)]">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={closeMenu}
							class="block hover:text-[var(--color-accent)] transition-colors"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>

<style>
	.scrolled {
		background-color: color-mix(in srgb, var(--color-bg) 75%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}
</style>
