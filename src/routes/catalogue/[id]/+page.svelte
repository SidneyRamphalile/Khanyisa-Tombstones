<script>
  import { page } from '$app/stores';
  import { catalogue } from '$lib/data/catalogue.js';
  import { get } from 'svelte/store';

  // Get the id from the route
  const { id } = get(page).params;

  // Find the item by id
  const item = catalogue.find(p => String(p.id) === String(id));
</script>

{#if item}
<section class="container mx-auto px-6 py-16">
  <div class="flex flex-col md:flex-row gap-10">
    <!-- Responsive image -->
    <img
      src={item.image}
      alt={item.name}
      class="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-lg bg-gray-50"
    />

    <!-- Item details -->
    <div class="flex-1 flex flex-col justify-center">
      <h1 class="text-3xl font-bold text-red-600">{item.name}</h1>
      <p class="mt-4 text-gray-700 leading-relaxed">{item.description}</p>
      <p class="mt-4 text-xl font-bold">R{item.price}</p>

      <!-- Compact Enquire Now button -->
      <a
        href="/contact"
        class="mt-6 inline-block bg-red-600 hover:bg-red-800 text-white px-5 py-2 rounded-md font-semibold transition w-fit"
      >
        Enquire Now
      </a>

      <!-- Back link -->
      <a
        href="/catalogue"
        class="block mt-4 text-red-600 hover:text-red-800 underline text-sm"
      >
        ← Back to Catalogue
      </a>
    </div>
  </div>
</section>
{:else}
<p class="text-center text-xl mt-10 text-gray-600">Tombstone not found.</p>
{/if}
