<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';

	const description =
		'Full Stack Developer building production-grade APIs and React frontends. MS in Computer Science from Stevens Institute of Technology, based in Jersey City, NJ.';
	const title = 'Vivek Almal | Full Stack Developer';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<Hero />
<About />
<Experience />
<Education />
<Projects />
<Skills />
<Contact />
