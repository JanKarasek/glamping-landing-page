<script lang="ts">
	// Obrázek bereme jako "prop", abychom ho mohli snadno změnit.
	// Výchozí hodnota odpovídá souboru v /static/hero-bg.jpg
	export let imageSrc: string = "/hero-bg.jpg";

	export let openModal: (() => void) | undefined;
</script>

<section
	class="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
	style="background-image: url({imageSrc})"
>
	<div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>

	<div class="relative z-10 p-4">
		<h1 class="text-5xl md:text-7xl font-bold tracking-tight">
			Glamping Micmanice
		</h1>
		<h2 class="text-3xl md:text-5xl font-light mt-2">
			Romantika, příroda, vinařství
		</h2>
		<p class="mt-6 text-lg max-w-2xl mx-auto">
			Zažijte jedinečné ubytování v srdci Jižní Moravy. Komfortní glamping
			v krajině vinic, blízko rakouských hranic a historických bunkrů.
			Vytvořte si nezapomenutelné zážitky v přírodě.
		</p>

		<button
			on:click={() => { if (typeof openModal === 'function') openModal(); }}
			class="inline-block mt-10 bg-brand hover:bg-brand-dark text-white font-bold py-3 px-10 rounded-full transition-colors text-lg"
		>
			Mám zájem o ubytování
		</button>
	</div>
</section>
