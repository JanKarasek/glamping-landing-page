<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InterestModal from '$lib/components/InterestModal.svelte';
	
	let showModal = false;
	
	function openModal() {
		showModal = true;
	}
	
	function closeModal() {
		showModal = false;
	}
</script>

<svelte:head>
	<meta name="description" content="Zažijte romantiku glampingu v krásné vinařské oblasti Micmanice. Blízko rakouských hranic, historických bunkrů a nádherné přírody." />
</svelte:head>

<Header openModal={openModal} />

<main class="min-h-screen">
	<Hero openModal={openModal} />
	<About />
	<Gallery openModal={openModal} />
	<Contact openModal={openModal} />
	<Footer openModal={openModal} />
</main>

<InterestModal bind:show={showModal} on:close={closeModal} />