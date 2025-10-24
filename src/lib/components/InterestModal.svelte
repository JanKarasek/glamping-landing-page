<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let show = false;
	
	let formData = {
		name: '',
		email: '',
		phone: '',
		priceRange: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitted = false;
	
	function closeModal() {
		show = false;
		dispatch('close');
	}
	
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
			formData = {
				name: '',
				email: '',
				phone: '',
				priceRange: '',
				message: ''
			};
		}, 3000);
	}
	
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
</script>

{#if show}
	<!-- Modal backdrop -->
	<div 
		class="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
		on:click={handleBackdropClick}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="modal-content">
			{#if !submitted}
				<!-- Header -->
				<div class="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-3">
							<div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
								</svg>
							</div>
							<div>
								<h2 class="text-2xl font-bold text-gray-900">Děkujeme za váš zájem!</h2>
								<p class="text-green-700 font-medium">Speciální nabídka pro vás</p>
							</div>
						</div>
						<button 
							on:click={closeModal}
							class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
							aria-label="Zavřít modal"
						>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div class="mt-4 p-4 bg-green-600 text-white rounded-lg">
						<div class="flex items-center space-x-2">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
							</svg>
							<span class="font-bold">Získejte 20% slevu na první pobyt!</span>
						</div>
						<p class="text-green-100 text-sm mt-1">Sleva bude platná po otevření glampingu</p>
					</div>
				</div>
				
				<!-- Form -->
				<form on:submit|preventDefault={handleSubmit} class="p-6 space-y-4">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení *</label>
						<input 
							type="text" 
							id="name" 
							bind:value={formData.name}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
						/>
					</div>
					
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
						<input 
							type="email" 
							id="email" 
							bind:value={formData.email}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
						/>
					</div>
					
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
						<input 
							type="tel" 
							id="phone" 
							bind:value={formData.phone}
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
						/>
					</div>
					
					<div>
						<label for="priceRange" class="block text-sm font-medium text-gray-700 mb-1">Kolik byste byli ochotni zaplatit za noc? *</label>
						<select 
							id="priceRange" 
							bind:value={formData.priceRange}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
						>
							<option value="">Vyberte cenovou kategorii</option>
							<option value="1000-1500">1 000 - 1 500 Kč</option>
							<option value="1500-2000">1 500 - 2 000 Kč</option>
							<option value="2000-2500">2 000 - 2 500 Kč</option>
							<option value="2500-3000">2 500 - 3 000 Kč</option>
							<option value="3000+">3 000+ Kč</option>
						</select>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Poznámka</label>
						<textarea 
							id="message" 
							bind:value={formData.message}
							rows="3"
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
							placeholder="Co vás na glampingu nejvíce láká?"
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
							Odeslat zájem
						{/if}
					</button>
				</form>
			{:else}
				<!-- Success message -->
				<div class="p-6 text-center">
					<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Děkujeme!</h3>
					<p class="text-gray-600 mb-4">
						Vaše informace byly úspěšně odeslány. Brzy vás budeme kontaktovat s dalšími informacemi o našem glampingu.
					</p>
					<p class="text-sm text-green-600 font-semibold">
						Pamatujte si: máte nárok na 20% slevu na první pobyt!
					</p>
					<button 
						on:click={closeModal}
						class="mt-4 btn-primary"
					>
						Zavřít
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
