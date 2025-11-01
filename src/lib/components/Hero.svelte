<script lang="ts">
    import { t } from '$lib/i18n';
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
			{$t('hero.title')}
		</h1>
		<h2 class="text-3xl md:text-5xl font-light mt-2">
			{$t('hero.subtitle')}
		</h2>
		<p class="mt-6 text-lg max-w-2xl mx-auto">
			{$t('hero.description')}
		</p>

		<button
			on:click={() => { if (typeof openModal === 'function') openModal(); }}
			class="inline-block mt-10 bg-brand hover:bg-brand-dark text-white font-bold py-3 px-10 rounded-full transition-colors text-lg"
		>
			{$t('hero.cta')}
		</button>
	</div>
</section>
