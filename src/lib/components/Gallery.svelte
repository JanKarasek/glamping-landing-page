<script lang="ts">
	import { t } from "$lib/i18n";

	export let openModal: (() => void) | undefined;

	let currentSlide = 0;

	const images = [
		{
			src: "glamping_2.jpg",
			alt: "Luxusní glamping interiér",
			title: "Luxusní interiér",
		},
		{
			src: "glamping_3.jpg",
			alt: "Romantická snídaně v glampingu",
			title: "Snídaně v přírodě",
		},
		{
			src: "glamping_4.jpg",
			alt: "Večer u ohně v glampingu",
			title: "Večery u ohně",
		},
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % images.length;
	}

	function prevSlide() {
		currentSlide =
			currentSlide === 0 ? images.length - 1 : currentSlide - 1;
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}
</script>

<section id="magic" class="section-padding bg-white">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2
				class="text-3xl sm:text-4xl font-bold mb-4"
				style="color: #0b362a;"
			>
				{$t("gallery.galleryTitle")}
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				{$t("gallery.description")}
			</p>
		</div>
		<!-- Carousel -->
		<div class="relative max-w-4xl mx-auto">
			<div class="relative overflow-hidden rounded-2xl glass h-80">
				{#if images.length > 0}
					<img
						src={images[currentSlide].src}
						alt={images[currentSlide].alt}
						class="w-full h-80 object-cover"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
					>
						<h3 class="text-xl font-semibold text-white mb-2">
							{images[currentSlide].title}
						</h3>
						<p class="text-white/90 text-sm">
							{$t("gallery.slideDescription")}
						</p>
					</div>
				{/if}
				<!-- Navigation buttons -->
				<button
					on:click={prevSlide}
					class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
					aria-label="Předchozí obrázek"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
				</button>
				<button
					on:click={nextSlide}
					class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
					aria-label="Další obrázek"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</button>
			</div>
			<!-- Dots indicator -->
			<div class="flex justify-center mt-6 space-x-2">
				{#each images as _, index}
					<button
						on:click={() => goToSlide(index)}
						class="w-3 h-3 rounded-full transition-all duration-200 {currentSlide ===
						index
							? 'bg-brand'
							: 'bg-gray-300 hover:bg-brand-light'}"
						aria-label="Přejít na obrázek {index + 1}"
					></button>
				{/each}
			</div>
		</div>
		<div class="text-center mt-12">
			<p class="text-lg text-gray-600 mb-6">
				{$t("gallery.ctaText")}
			</p>
			<button
				class="btn-primary text-lg px-8 py-3"
				on:click={() => {
					if (typeof openModal === "function") openModal();
				}}
			>
				{$t("gallery.cta")}
			</button>
		</div>
	</div>
</section>
