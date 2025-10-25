<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	function openModal() {
		dispatch('openModal');
	}
</script>

<footer class="dark-section">
	<div class="container-custom section-padding">
		<div class="grid md:grid-cols-3 gap-8">
			<div>
				<div class="flex items-center space-x-3 mb-4">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: #0b362a;">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white">Glamping Micmanice</h3>
				</div>
				<p class="text-white/90 mb-4">
					Magické momenty v srdci Jižní Moravy. Romantika, klid a nezapomenutelné zážitky v krásné vinařské krajině.
				</p>
				<div class="flex space-x-4">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded-lg" aria-label="Facebook">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
						</svg>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded-lg" aria-label="Instagram">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
						</svg>
					</a>
					<a href="mailto:info@glamping-micmanice.cz" class="text-gray-500 hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded-lg" aria-label="E-mail">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
						</svg>
					</a>
				</div>
			</div>
			
			<div>
				<h3 class="text-xl font-bold mb-4 text-white">Kontakt</h3>
				<div class="space-y-3 text-white/90">
					<div class="flex items-center space-x-3">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
						<span>Micmanice, Jižní Morava</span>
					</div>
					<div class="flex items-center space-x-3">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
						</svg>
						<span>+420 123 456 789</span>
					</div>
					<div class="flex items-center space-x-3">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
						</svg>
						<span>info@glamping-micmanice.cz</span>
					</div>
				</div>
			</div>
			
			<div>
				<h3 class="text-xl font-bold mb-4 text-white">Speciální nabídka</h3>
				<div class="text-white p-4 rounded-xl mb-4" style="background-color: #0b362a;">
					<div class="flex items-center space-x-2 mb-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
						</svg>
						<span class="font-bold">20% sleva na první pobyt!</span>
					</div>
					<p class="text-white/80 text-sm">Zaregistrujte se nyní a získejte slevu</p>
				</div>
				<button 
					class="btn-primary w-full"
					on:click={openModal}
				>
					Mám zájem
				</button>
			</div>
		</div>
		
		<div class="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
			<p>&copy; 2024 Glamping Micmanice. Všechna práva vyhrazena.</p>
		</div>
	</div>
</footer>
