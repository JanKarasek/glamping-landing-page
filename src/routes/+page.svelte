<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InterestModal from '$lib/components/InterestModal.svelte';
    import type { PageData } from './$types';

	export let data: PageData;

	let {
		supabase
	} = data;
	$: ({
		supabase
	} = data);
	
	let showModal = false;
	
	function openModal() {
		showModal = true;
	}
	
	function closeModal() {
		showModal = false;
	}
	
	async function handleSubmit() {
		if (isSubmitting) return;
		isSubmitting = true;

		// Uložení do Supabase
		const { error } = await supabase.from('contacts').insert([{
			name: contactForm.name,
			email: contactForm.email,
			phone: contactForm.phone,
			message: contactForm.message
		}]);

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));

		submitted = true;
		isSubmitting = false;

		// Reset form after 3 seconds
		setTimeout(() => {
			submitted = false;
			contactForm = {
				name: '',
				email: '',
				phone: '',
				message: ''
			};
		}, 3000);
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