<script>
  import { Facebook, Instagram } from 'lucide-svelte';
  let menuOpen = false;
</script>

<nav class="bg-black text-white px-6 py-4 flex items-center justify-between relative z-50">
  <!-- Logo / Brand -->
  <a href="/" class="text-lg md:text-xl font-bold text-red-600">
    Khanyisa Tombstones & Granite
  </a>

  <!-- Hamburger Icon (visible only on mobile) -->
  <button
    class="md:hidden focus:outline-none"
    on:click={() => (menuOpen = !menuOpen)}
    aria-label="Toggle menu"
  >
    {#if menuOpen}
      <!-- Close icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    {:else}
      <!-- Hamburger icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    {/if}
  </button>

  <!-- Desktop Nav Links -->
  <div class="hidden md:flex flex-1 justify-center space-x-8">
    <a href="/about" class="hover:text-red-400">About</a>
    <a href="/catalogue" class="hover:text-red-600">Catalogue</a>
    <a href="/gallery" class="hover:text-red-400">Gallery</a>
    <a href="/services" class="hover:text-red-400">Services</a>
    <a href="/contact" class="hover:text-red-400">Contact</a>
  </div>

  <!-- Social Icons (Desktop) -->
  <div class="hidden md:flex space-x-4">
    <a href="https://www.facebook.com/yourpage" target="_blank" class="hover:text-red-600" aria-label="Facebook">
      <Facebook class="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/yourpage" target="_blank" class="hover:text-red-600" aria-label="Instagram">
      <Instagram class="w-5 h-5" />
    </a>
  </div>

  <!-- Mobile Menu -->
  <div
    class="md:hidden absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-500 ease-in-out z-40"
    style="max-height: {menuOpen ? '500px' : '0'}"
  >
    <div class="flex flex-col items-center py-6 space-y-4">
      <a href="/about" class="hover:text-red-400" on:click={() => (menuOpen = false)}>About</a>
      <a href="/catalogue" class="hover:text-red-600" on:click={() => (menuOpen = false)}>Catalogue</a>
      <a href="/gallery" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Gallery</a>
      <a href="/services" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Services</a>
      <a href="/contact" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Contact</a>

      <!-- Mobile Social Icons -->
      <div class="flex space-x-6 pt-4">
        <a href="https://www.facebook.com/yourpage" target="_blank" class="hover:text-red-600" aria-label="Facebook">
          <Facebook class="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" class="hover:text-red-600" aria-label="Instagram">
          <Instagram class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</nav>
