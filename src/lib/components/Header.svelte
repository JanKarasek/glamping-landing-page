<script lang="ts">
  import { Facebook, Twitter, Instagram, Menu } from 'lucide-svelte';
</script>

<header class="absolute top-0 left-0 w-full z-50 py-6 px-10 md:px-16 text-white">
  <div class="flex justify-between items-center w-full">
    
    <a href="/" class="text-3xl font-bold">AMITY</a>

    <nav class="hidden md:block absolute left-1/2 -translate-x-1/2">
      <ul class="flex items-center gap-8">
        <li><a href="/" class="font-semibold text-brand-light">Home</a></li>
        <li><a href="/about" class="hover:text-brand-light transition-colors">About Us</a></li>
        <li><a href="/cottages" class="hover:text-brand-light transition-colors">Cottages</a></li>
        <li><a href="/activities" class="hover:text-brand-light transition-colors">Activities</a></li>
        <li><a href="/blog" class="hover:text-brand-light transition-colors">Blog</a></li>
        <li><a href="/contact" class="hover:text-brand-light transition-colors">Contact Us</a></li>
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