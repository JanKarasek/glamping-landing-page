<script lang="ts">
  import { Facebook, Twitter, Instagram, Menu } from 'lucide-svelte';
  export let openModal: (() => void) | undefined;
</script>

<header class="absolute top-0 left-0 w-full z-50 py-6 px-10 md:px-16 text-white">
  <div class="flex justify-between items-center w-full">
    
    <a href="/" class="text-3xl font-bold">Glamping </a>

    <nav class="hidden md:block absolute left-1/2 -translate-x-1/2">
      <ul class="flex items-center gap-8">
        <li><a href="/" class="hover:text-brand-light text-brand-light font-semibold transition-colors">Domů</a></li>
        <li><a href="#about" class="hover:text-brand-light transition-colors">Proč?</a></li>
        <li><a href="#magic" class="hover:text-brand-light transition-colors">Magické momenty</a></li>
        <li><a href="#" class="hover:text-brand-light transition-colors" on:click={() => { if (typeof openModal === 'function') openModal(); }}>Mám zájem</a></li>
      </ul>
    </nav>

    <div class="flex items-center gap-6">
      <div class="hidden md:flex items-center gap-5">
        <a href="#facebook" aria-label="Facebook" class="hover:text-brand-light transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#twitter" aria-label="Twitter" class="hover:text-brand-light transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#instagram" aria-label="Instagram" class="hover:text-brand-light transition-colors">
          <Instagram size={20} />
        </a>
      </div>
      
      <button class="md:hidden" aria-label="Open menu">
        <Menu size={28} />
      </button>
    </div>

  </div>
</header>