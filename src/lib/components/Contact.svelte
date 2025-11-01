<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { t } from '$lib/i18n';
	export let openModal: (() => void) | undefined;

	let contactForm = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitted = false;
	
	async function handleSubmit() {
		if (isSubmitting) return;
		
		isSubmitting = true;

		// Uložení do Supabase
		const { error } = await supabase.from('contacts').insert([
			{
				name: contactForm.name,
				email: contactForm.email,
				phone: contactForm.phone,
				message: contactForm.message
			}
		]);

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

<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Info -->
			<div>
				<h2 class="text-3xl sm:text-4xl font-bold mb-6" style="color: #0b362a;">
					{$t('contact.title')}
				</h2>
				
				<p class="text-lg text-gray-600 mb-8">
					{$t('contact.description')}
				</p>
				
				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: #0b362a;">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">{$t('contact.emailTitle')}</h3>
							<p class="text-gray-600">info@glamping-micmanice.cz</p>
						</div>
					</div>
					
					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: #0b362a;">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">{$t('contact.locationTitle')}</h3>
							<p class="text-gray-600">{$t('contact.locationText')}</p>
						</div>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-brand text-white rounded-xl">
					<h3 class="text-xl font-bold mb-2">{$t('contact.offerTitle')}</h3>
					<p class="mb-4">
						{$t('contact.offerText')}
					</p>
					<button 
						on:click={() => { if (typeof openModal === 'function') openModal(); }}
						class="bg-white text-brand font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
					>
						{$t('contact.offerCta')}
					</button>
				</div>
			</div>
			
			<!-- Contact Form -->
			<div class="bg-white rounded-2xl shadow-xl p-8">
				{#if !submitted}
					<h3 class="text-2xl font-bold text-gray-900 mb-6">{$t('contact.formTitle')}</h3>
					
					<form on:submit|preventDefault={handleSubmit} class="space-y-6">
						<div>
							<label for="contact-name" class="block text-sm font-medium text-gray-700 mb-2">{$t('contact.formName')}</label>
							<input 
								type="text" 
								id="contact-name" 
								bind:value={contactForm.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-email" class="block text-sm font-medium text-gray-700 mb-2">{$t('contact.formEmail')}</label>
							<input 
								type="email" 
								id="contact-email" 
								bind:value={contactForm.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-phone" class="block text-sm font-medium text-gray-700 mb-2">{$t('contact.formPhone')}</label>
							<input 
								type="tel" 
								id="contact-phone" 
								bind:value={contactForm.phone}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">{$t('contact.formMessage')}</label>
							<textarea 
								id="contact-message" 
								bind:value={contactForm.message}
								required
								rows="4"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
								placeholder="{$t('contact.formPlaceholder')}"
							></textarea>
						</div>
						
						<button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								{$t('contact.formSubmitting')}
							{:else}
								{$t('contact.formSubmit')}
							{/if}
						</button>
					</form>
				{:else}
					<div class="text-center">
						<div class="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
							<svg class="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">{$t('contact.formSuccessTitle')}</h3>
						<p class="text-gray-600">
							{$t('contact.formSuccessText')}
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
