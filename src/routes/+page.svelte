<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { products } from '$lib/data/products.js';
  import ProductCard from '$lib/components/ProductCard.svelte';

  onMount(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animate once per scroll
    });
  });
</script>

<svelte:head>
  <title>Khanyisa Tombstones</title>
  <meta name="description" content="High-quality tombstones and memorial products to celebrate lives." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-black text-white text-center py-20 px-6" data-aos="fade-down">
  <h1 class="text-4xl md:text-5xl font-bold text-red-600 glow-animate">Preserve Memories, Honour Legacy</h1>
  <p class="mt-4 text-lg text-yellow-400 glow-animate">High-quality tombstones and memorial products to celebrate lives.</p>
  <a href="/products" class="mt-6 inline-block bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
    Shop Now
  </a>
</section>

<!-- Two-Column Section -->
<section class="container mx-auto py-16 px-6" data-aos="fade-up">
  <div class="flex flex-col md:flex-row items-center gap-10">
    <!-- Left: Image -->
    <div class="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
      <img 
        src="/images/khanyisa-logo.jpg" 
        alt="Khanyisa Tombstones" 
        class="rounded-lg shadow-lg w-3/4 md:w-full max-w-sm h-auto object-cover"
      />
    </div>
    <!-- Right: Text -->
    <div class="md:w-1/2 text-center md:text-left" data-aos="fade-left">
      <h2 class="text-3xl font-bold text-red-600 mb-4">Honouring Your Loved Ones</h2>
      <p class="text-gray-700">
        At Khanyisa Tombstones, we understand the importance of preserving memories and celebrating lives. 
        Each tombstone is crafted with care, quality, and attention to detail, ensuring a lasting tribute to your loved ones. 
        We also design custom tombstones tailored to your family's wishes, making every memorial truly unique.
      </p>
    </div>
  </div>
</section>

<!-- Featured Tombstones Section -->
<section class="container mx-auto py-16 px-6" data-aos="fade-up">
  <h2 class="text-2xl font-bold text-center text-red-600 mb-10">Featured Tombstones</h2>
  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {#each products.slice(0,3) as product}
      <a href={`/products/${product.id}`} class="block hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100">
        <ProductCard {product} />
      </a>
    {/each}
  </div>
</section>

<!-- QR Code Section -->
<section class="bg-gray-50 py-16 px-6" data-aos="fade-up">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Left: QR Image -->
    <div class="md:w-1/2 flex justify-center" data-aos="fade-right">
      <img src="/images/qr-demo.jpg" alt="QR Code Memorial Demo" class="w-64 md:w-80 rounded-lg shadow-lg" />
    </div>
    <!-- Right: Text & Info -->
    <div class="md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-left">
      <h2 class="text-3xl font-bold text-red-600">Preserve Memories Forever</h2>
      <p class="text-gray-700 text-lg">
        Losing a loved one is never easy. With Khanyisa Tombstones, memories don't have to fade. 
        Each tombstone can include a <strong>personal QR code</strong> that links to a dedicated page telling the life story of your loved one.
      </p>
      <p class="text-gray-700 text-lg">
        Simply pay for the memorial page, and we will generate a unique QR code for the tombstone. Family and friends can scan it anytime to relive precious memories, photos, and stories.
      </p>
      <a href="/contact" class="mt-6 inline-block bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
        Request Your QR Code
      </a>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="bg-red-600 text-white py-16 px-6" data-aos="fade-up">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <h2 class="text-3xl font-bold">Memorial Page Pricing</h2>
    <p class="text-lg">
      Choose the plan that best suits your family's needs and preserve memories for generations to come.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <div class="bg-white text-gray-800 p-6 rounded-lg shadow-lg space-y-2">
        <h3 class="text-xl font-bold">Basic Plan</h3>
        <p><span class="font-semibold text-red-600">R500</span> - One-time payment for one QR code & memorial page</p>
      </div>
      <div class="bg-white text-gray-800 p-6 rounded-lg shadow-lg space-y-2">
        <h3 class="text-xl font-bold">Premium Plan</h3>
        <p><span class="font-semibold text-red-600">R1200</span> - Unlimited updates, multiple photos, and family tree integration</p>
      </div>
    </div>
  </div>
</section>
