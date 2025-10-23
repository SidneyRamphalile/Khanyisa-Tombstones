<script>
  import { Facebook, Instagram } from 'lucide-svelte';
  let menuOpen = false;
</script>

<nav class="bg-black text-white px-6 py-4 flex items-center justify-between relative z-50">
  <!-- Logo / Brand -->
  <a href="/" class="text-lg md:text-xl font-bold text-red-600">
    Khanyisa Tombstones & Granite
  </a>

  <!-- Desktop Nav Links + Button -->
  <div class="hidden md:flex flex-1 items-center justify-center space-x-8">
    <a href="/" class="hover:text-red-400">Home</a>
    <a href="/about" class="hover:text-red-400">About Us</a>
    <a href="/catalogue" class="hover:text-red-600">Catalogue</a>
    <a href="/gallery" class="hover:text-red-400">Gallery</a>
    <a href="/services" class="hover:text-red-400">Services</a>
    <a href="/contact" class="hover:text-red-400">Contact Us</a>

    <!-- "Request a Quote" Button -->
    <a 
      href="/contact" 
      class="ml-6 bg-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105 glow-button"
    >
      Request a Quote
    </a>

    <!-- Memorial Wall Link (after Request a Quote) -->
    <a 
      href="/memorial-wall" 
      class="ml-4 text-red-500 font-semibold hover:text-red-400 transition"
    >
      Memorial Wall
    </a>
  </div>

  <!-- Social Icons (Desktop) -->
  <div class="hidden md:flex space-x-4">
    <a href="https://www.facebook.com/profile.php?id=61561812031687" target="_blank" class="hover:text-red-600" aria-label="Facebook">
      <Facebook class="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" class="hover:text-red-600" aria-label="Instagram">
      <Instagram class="w-5 h-5" />
    </a>
  </div>

  <!-- Hamburger Icon (Mobile) -->
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

  <!-- Mobile Menu -->
  <div
    class="md:hidden absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-500 ease-in-out z-40"
    style="max-height: {menuOpen ? '600px' : '0'}"
  >
    <div class="flex flex-col items-center py-6 space-y-4">
      <a href="/" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Home</a>
      <a href="/about" class="hover:text-red-400" on:click={() => (menuOpen = false)}>About Us</a>
      <a href="/catalogue" class="hover:text-red-600" on:click={() => (menuOpen = false)}>Catalogue</a>
      <a href="/gallery" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Gallery</a>
      <a href="/services" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Services</a>
      <a href="/contact" class="hover:text-red-400" on:click={() => (menuOpen = false)}>Contact Us</a>

      <!-- "Request a Quote" Button (Mobile) -->
      <a 
        href="/contact" 
        class="bg-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105 glow-button"
        on:click={() => (menuOpen = false)}
      >
        Request a Quote
      </a>

      <!-- Memorial Wall Link (Mobile) -->
      <a 
        href="/memorial-wall" 
        class="text-red-500 font-semibold hover:text-red-400 transition"
        on:click={() => (menuOpen = false)}
      >
        Memorial Wall
      </a>

      <!-- Mobile Social Icons -->
      <div class="flex space-x-6 pt-4">
        <a href="https://www.facebook.com/profile.php?id=61561812031687" target="_blank" class="hover:text-red-600" aria-label="Facebook">
          <Facebook class="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="hover:text-red-600" aria-label="Instagram">
          <Instagram class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  /* Glowing effect for the "Request a Quote" button */
  .glow-button {
    box-shadow: 0 0 8px #ff0000, 0 0 16px #ff0000, 0 0 24px #ff4d4d;
    animation: glowPulse 2s infinite alternate;
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 8px #ff0000, 0 0 16px #ff0000, 0 0 24px #ff4d4d;
    }
    100% {
      box-shadow: 0 0 12px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff4d4d;
    }
  }
</style>
