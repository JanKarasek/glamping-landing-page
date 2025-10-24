<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	function openModal() {
		dispatch('openModal');
	}
</script>

<header class="header">
	<div class="container-custom">
		<nav class="flex items-center justify-between py-4">
			<!-- Logo -->
			<div class="flex items-center space-x-2">
				<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
					<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>
				</div>
				<span class="text-xl font-bold text-gray-900">Glamping Micmanice</span>
			</div>
			
			<!-- Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a href="#about" class="text-gray-700 hover:text-green-600 transition-colors">O nás</a>
				<a href="#gallery" class="text-gray-700 hover:text-green-600 transition-colors">Galerie</a>
				<a href="#contact" class="text-gray-700 hover:text-green-600 transition-colors">Kontakt</a>
			</div>
			
			<!-- CTA Button -->
			<button 
				on:click={openModal}
				class="btn-primary"
			>
				Mám zájem
			</button>
		</nav>
	</div>
</header>
