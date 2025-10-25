<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	function handleInterestClick() {
		dispatch('openModal');
	}
</script>

<section class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
			alt="Glamping ubytování na poli" 
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
	</div>
	
	<!-- Content -->
	<div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
		<h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
			<span class="block">Magické momenty</span>
			<span class="block text-green-200">v srdci Jižní Moravy</span>
		</h1>
	
		<p class="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
			Zažijte romantiku glampingu v krásné vinařské oblasti Micmanice. 
			Blízko rakouských hranic, historických bunkrů a nádherné přírody.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<button 
				on:click={handleInterestClick}
				class="btn-primary text-lg px-10 py-4"
			>
				Mám zájem o ubytování
			</button>
			<button 
				on:click={handleInterestClick}
				class="btn-secondary text-lg px-10 py-4"
			>
				Chci se ubytovat
			</button>
		</div>
	</div>
</section>
