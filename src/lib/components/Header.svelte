<script lang="ts">
  import { locale, setLocale, t } from "$lib/i18n";
  import { Facebook, Twitter, Instagram, Menu, X } from "lucide-svelte";
  import { fade } from "svelte/transition";
  export let openModal: (() => void) | undefined;

  let isMenuOpen = false;

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header
  class="absolute top-0 left-0 w-full z-50 py-6 px-6 sm:px-10 md:px-16 text-white"
>
  <div class="flex justify-between items-center w-full">
    <a href="/" class="text-3xl font-bold z-50">Glamping</a>

    <!-- Desktop Menu -->
    <nav class="hidden md:block absolute left-1/2 -translate-x-1/2">
      <ul class="flex items-center gap-8">
        <li>
          <a
            href="/"
            class="hover:text-brand-light text-brand-light font-semibold transition-colors"
            >{$t('header.home')}</a
          >
        </li>
        <li>
          <a href="#about" class="hover:text-brand-light transition-colors"
            >{$t('header.why')}</a
          >
        </li>
        <li>
          <a href="#magic" class="hover:text-brand-light transition-colors"
            >{$t('header.moments')}</a
          >
        </li>
        <li>
          <a
            href="#"
            class="hover:text-brand-light transition-colors"
            on:click={() => {
              if (typeof openModal === "function") openModal();
            }}>{$t('header.interest')}</a
          >
        </li>
      </ul>
    </nav>

    <!-- Desktop Right Side -->
    <div class="hidden md:flex items-center gap-6">
      <div class="flex items-center gap-2 text-sm">
        <button
          on:click={() => setLocale("cs")}
          class:font-bold={$locale === "cs"}
          class="hover:text-brand-light transition-colors">CS</button
        >
        <span>/</span>
        <button
          on:click={() => setLocale("de")}
          class:font-bold={$locale === "de"}
          class="hover:text-brand-light transition-colors">DE</button
        >
      </div>
      <a
        href="#facebook"
        aria-label="Facebook"
        class="hover:text-brand-light transition-colors"
      >
        <Facebook size={20} />
      </a>
      <a
        href="#twitter"
        aria-label="Twitter"
        class="hover:text-brand-light transition-colors"
      >
        <Twitter size={20} />
      </a>
      <a
        href="#instagram"
        aria-label="Instagram"
        class="hover:text-brand-light transition-colors"
      >
        <Instagram size={20} />
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden z-50"
      on:click={() => (isMenuOpen = !isMenuOpen)}
      aria-label={$t(isMenuOpen ? 'header.closeMenu' : 'header.openMenu')}
    >
      {#if isMenuOpen}
        <X size={28} />
      {:else}
        <Menu size={28} />
      {/if}
    </button>
  </div>
</header>

<!-- Mobile Menu Panel -->
{#if isMenuOpen}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center md:hidden"
  >
    <nav>
      <ul class="flex flex-col items-center gap-8 text-white text-2xl">
        <li>
          <a href="/" on:click={closeMenu}>{$t('header.home')}</a>
        </li>
        <li>
          <a href="#about" on:click={closeMenu}>{$t('header.why')}</a>
        </li>
        <li>
          <a href="#magic" on:click={closeMenu}>{$t('header.moments')}</a>
        </li>
        <li>
          <a
            href="#"
            on:click={() => {
              if (typeof openModal === "function") openModal();
              closeMenu();
            }}>{$t('header.interest')}</a
          >
        </li>
      </ul>
    </nav>
    <div class="mt-12 flex items-center gap-4 text-white text-lg">
      <button
        on:click={() => setLocale("cs")}
        class:font-bold={$locale === "cs"}
        class="hover:text-brand-light transition-colors">CS</button
      >
      <span>/</span>
      <button
        on:click={() => setLocale("de")}
        class:font-bold={$locale === "de"}
        class="hover:text-brand-light transition-colors">DE</button
      >
    </div>
  </div>
{/if}
