<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { catalogue } from '$lib/data/catalogue.js';
  import CatalogueCard from '$lib/components/CatalogueCard.svelte';

  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  function getRandomTombstones(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const featured = getRandomTombstones(catalogue, 3);
</script>

<svelte:head>
  <title>Khanyisa Tombstones</title>
  <meta name="description" content="High-quality tombstones and memorial products to celebrate lives." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-black text-white text-center py-20 px-6" data-aos="fade-down">
  <h1 class="text-4xl md:text-5xl font-bold text-red-600 glow-animate">Preserve Memories, Honour Legacy</h1>
  <p class="mt-4 text-lg text-yellow-400 glow-animate">High-quality tombstones and memorial products to celebrate lives.</p>
  <a href="/catalogue" class="mt-6 inline-block bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
    Shop Now
  </a>
</section>

<!-- Two-Column Section -->
<section class="container mx-auto py-16 px-6" data-aos="fade-up">
  <div class="flex flex-col md:flex-row items-center gap-10">
    <div class="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
      <img src="/images/khanyisa-logo.jpg" alt="Khanyisa Tombstones" class="rounded-lg shadow-lg w-3/4 md:w-full max-w-sm h-auto object-cover" />
    </div>
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
<!-- <section class="container mx-auto py-16 px-6" data-aos="fade-up">
  <h2 class="text-2xl font-bold text-center text-red-600 mb-10">Featured Tombstones</h2>
  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {#each featured as product}
      <a href={`/catalogue/${product.id}`} class="block hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="100">
        <CatalogueCard {product} />
      </a>
    {/each}
  </div>
</section> -->

<section class="container mx-auto px-6 py-16">
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    
    <!-- Memorials Tile -->
    <a href="/memorial-wall" class="group block border-2 border-red-600 rounded-lg shadow-lg p-6 transition-all duration-300 hover:bg-red-600">
      <div class="flex justify-center mb-4">
        <svg class="w-12 h-12 text-red-600 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-white">MEMORIALS</h2>
      <p class="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">View Tributes</p>
    </a>

    <!-- Family Tree Tile -->
    <a href="/memorial/nomsa-dlamini" class="group block border-2 border-red-600 rounded-lg shadow-lg p-6 transition-all duration-300 hover:bg-red-600">
      <div class="flex justify-center mb-4">
        <svg class="w-12 h-12 text-gray-800 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-white">FAMILY TREE</h2>
      <p class="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">Family History</p>
    </a>

    <!-- Orders Tile -->
    <a href="/contact" class="group block border-2 border-red-600 rounded-lg shadow-lg p-6 transition-all duration-300 hover:bg-red-600">
      <div class="flex justify-center mb-4">
        <svg class="w-12 h-12 text-red-600 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v6H3v-6z"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-white">ORDER</h2>
      <p class="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white">Our Collection</p>
    </a>

  </div>
</section>



<!-- QR Code Section -->
<section class="bg-gray-50 py-16 px-6" data-aos="fade-up">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div class="md:w-1/2 flex justify-center" data-aos="fade-right">
      <img src="/images/qr-demo.jpg" alt="QR Code Memorial Demo" class="w-64 md:w-80 rounded-lg shadow-lg" />
    </div>
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

<!-- Pricing & Payment Plans Section -->
<section class="bg-red-600 text-white py-16 px-6" data-aos="fade-up">
  <div class="max-w-5xl mx-auto space-y-8 text-center">
    <h2 class="text-3xl font-bold mb-6">💳 Khanyisa Tombstones Pricing & Payment Plans</h2>
    <p class="text-lg">
      Choose the plan that best suits your family's needs and preserve memories for generations to come. We offer flexible options to make honoring your loved ones as easy as possible.
    </p>

<!-- Memorial Page Pricing -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-gray-800">

  <!-- Basic Plan -->
  <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
    <h3 class="text-xl font-bold text-red-600">Basic Plan</h3>
    <p>
      <span class="font-semibold text-red-600">R1,500</span> – Once-off
    </p>
    <ul class="list-disc ml-5 space-y-1">
      <li>QR Code Plaque</li>
      <li>Online Memorial Page</li>
      <li><span class="font-semibold">R200</span> per additional update</li>
    </ul>
  </div>

  <!-- Premium Plan -->
  <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
    <h3 class="text-xl font-bold text-red-600">Premium Plan</h3>
    <p>
      <span class="font-semibold text-red-600">R2,800</span> – Once-off + <span class="font-semibold text-red-600">R99/year</span>
    </p>
    <ul class="list-disc ml-5 space-y-1">
      <li>Unlimited updates</li>
      <li>Multiple photos & gallery</li>
      <li>Family tree integration</li>
      <li>QR Code Plaque included</li>
    </ul>
  </div>

</div>


    <!-- Detailed Payment Plans -->
    <div class="grid gap-8 md:grid-cols-2 mt-10 text-gray-800">

      <!-- Cash Payment -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
        <h3 class="text-xl font-bold text-red-600">1. Cash Payment 💰</h3>
        <p>Full payment upfront. Work begins immediately after confirmation. Enjoy a <strong>5–10% discount</strong> for upfront payment.</p>
        <p class="font-semibold">✅ Best for customers who want quick installation.</p>
      </div>

      <!-- Lay-by Plan -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
        <h3 class="text-xl font-bold text-red-600">2. Lay-by Plan 🗓️</h3>
        <p>Pay a minimum 30% deposit, then the remaining balance over 3–6 months. Installation occurs after full payment.</p>
        <p class="font-semibold">💡 Ideal for families planning ahead.</p>
        <p class="text-sm italic">
          Example: Tombstone costs R12,000 → Deposit: R3,600 → 6 monthly payments of R1,400
        </p>
      </div>

      <!-- Funeral Cover -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
        <h3 class="text-xl font-bold text-red-600">3. Funeral Cover / Policy Payout 📝</h3>
        <p>If the deceased has a funeral policy, we can coordinate the claim. Payment can be settled directly from the policy.</p>
        <p class="font-semibold">📄 Convenient for families using existing cover.</p>
      </div>

      <!-- 50/50 Payment Plan -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-3">
        <h3 class="text-xl font-bold text-red-600">4. 50/50 Payment Plan ⚡</h3>
        <p>Pay 50% deposit to start the order and the remaining 50% on or before installation day. Perfect for urgent cases.</p>
        <p class="text-sm italic">
          Example: Tombstone costs R10,000 → Deposit: R5,000 → Pay R5,000 before installation
        </p>
      </div>

      <!-- Corporate / Group Accounts -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-3 md:col-span-2">
        <h3 class="text-xl font-bold text-red-600">5. Corporate / Group / Church Accounts 🏢</h3>
        <p>For multiple tombstones, churches, societies, or funeral parlors. 30–60 day payment terms (approved credit) with discounted bulk pricing.</p>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="bg-yellow-100 text-gray-800 p-6 rounded-lg shadow-lg space-y-3 mt-8">
      <h3 class="text-xl font-bold text-red-600">Accepted Payment Methods 💳</h3>
      <ul class="list-disc list-inside">
        <li>EFT (Bank Transfer)</li>
        <li>Capitec Pay / Immediate Payment</li>
        <li>Cash (Office Only)</li>
        <li>PayFast / Ozow Online Payment (coming soon)</li>
      </ul>
      <p class="text-red-600 mt-2">
        ⚠ Important: Orders start production after deposit/first payment. Designs remain property of Khanyisa Tombstones until fully paid. Missed payments may cause delays or cancellations.
      </p>
    </div>
  </div>
</section>

