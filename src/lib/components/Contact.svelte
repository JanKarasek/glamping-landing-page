<script lang="ts">
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
					Máte <span class="text-gradient">otázky</span>?
				</h2>
				
				<p class="text-lg text-gray-600 mb-8">
					Rádi vám odpovíme na všechny vaše dotazy. Neváhejte nás kontaktovat!
				</p>
				
				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: #0b362a;">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">E-mail</h3>
							<p class="text-gray-600">info@glamping-micmanice.cz</p>
						</div>
					</div>
					
					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: #0b362a;">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Telefon</h3>
							<p class="text-gray-600">+420 123 456 789</p>
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
							<h3 class="font-semibold text-gray-900">Lokace</h3>
							<p class="text-gray-600">Micmanice, Jižní Morava</p>
						</div>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-green-600 text-white rounded-xl">
					<h3 class="text-xl font-bold mb-2">Speciální nabídka!</h3>
					<p class="mb-4">
						Zaregistrujte se nyní a získejte 20% slevu na první pobyt v našem glampingu.
					</p>
					<button 
						on:click={() => { if (typeof openModal === 'function') openModal(); }}
						class="bg-white text-green-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
					>
						Zaregistrovat zájem
					</button>
				</div>
			</div>
			
			<!-- Contact Form -->
			<div class="bg-white rounded-2xl shadow-xl p-8">
				{#if !submitted}
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Napište nám</h3>
					
					<form on:submit|preventDefault={handleSubmit} class="space-y-6">
						<div>
							<label for="contact-name" class="block text-sm font-medium text-gray-700 mb-2">Jméno a příjmení *</label>
							<input 
								type="text" 
								id="contact-name" 
								bind:value={contactForm.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-email" class="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
							<input 
								type="email" 
								id="contact-email" 
								bind:value={contactForm.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
							<input 
								type="tel" 
								id="contact-phone" 
								bind:value={contactForm.phone}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
							/>
						</div>
						
						<div>
							<label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">Zpráva *</label>
							<textarea 
								id="contact-message" 
								bind:value={contactForm.message}
								required
								rows="4"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
								placeholder="Co vás zajímá na našem glampingu?"
							></textarea>
						</div>
						
						<button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								Odesílám...
							{:else}
								Odeslat zprávu
							{/if}
						</button>
					</form>
				{:else}
					<div class="text-center">
						<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Děkujeme!</h3>
						<p class="text-gray-600">
							Vaše zpráva byla úspěšně odeslána. Brzy vás budeme kontaktovat.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
