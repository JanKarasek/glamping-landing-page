<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let show = false;
	
	let formData = {
		email: '',
		priceRange: '',
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
				email: '',
				priceRange: '',
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
				<div class="p-6 border-b border-gray-200 bg-brand-light">
					<div class="flex flex-col gap-2">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-3">
								<div class="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
									</svg>
								</div>
								<div>
									<h2 class="text-2xl font-bold text-gray-900">Zadejte svůj e-mail</h2>
									<p class="text-brand-dark font-medium">Získáte 20% slevu na první pobyt</p>
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
						<p class="mt-2 text-sm text-zinc-100 rounded px-3 py-2">
							Moc děkujeme za Váš zájem, vážíme si jej! Projekt je zatím v <b>přípravné fázi</b>. Pokud nám necháte e-mail, ozveme se vám ihned, jak bude vše připraveno, a zašleme vám slevový kód na <b>20% na první pobyt</b>.
						</p>
					</div>
				</div>
				<!-- Form -->
				<form on:submit|preventDefault={handleSubmit} class="p-6 space-y-4">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
						<input 
							type="email" 
							id="email" 
							bind:value={formData.email}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
						/>
					</div>
					<div>
						<label for="priceRange" class="block text-sm font-medium text-gray-700 mb-1">Kolik byste byli ochotni zaplatit za noc? *</label>
						<select 
							id="priceRange" 
							bind:value={formData.priceRange}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
						>
							<option value="">Vyberte cenovou kategorii</option>
							<option value="1000-1500">1 000 - 1 500 Kč</option>
							<option value="1500-2000">1 500 - 2 000 Kč</option>
							<option value="2000-2500">2 000 - 2 500 Kč</option>
							<option value="2500-3000">2 500 - 3 000 Kč</option>
							<option value="3000+">3 000+ Kč</option>
						</select>
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
					<div class="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Děkujeme!</h3>
					<p class="text-gray-600 mb-4">
						Moc děkujeme za váš zájem o Glamping Micmanice! Projekt zatím připravujeme a jakmile bude vše hotové, ozveme se vám na e-mail. Pošleme vám také slevový kód na 20% na první pobyt.
					</p>
					<p class="text-sm text-brand font-semibold">
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
