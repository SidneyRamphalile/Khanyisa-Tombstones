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
    <img src={item.image} alt={item.name} class="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-red-600">{item.name}</h1>
      <p class="mt-4 text-gray-700">{item.description}</p>
      <p class="mt-4 text-xl font-bold">R{item.price}</p>
      <button class="mt-6 bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
        Enquire Now
      </button>

      <a href="/catalogue" class="block mt-4 text-red-600 hover:text-red-800 underline text-sm">
        ← Back to Catalogue
      </a>
    </div>
  </div>
</section>
{:else}
<p class="text-center text-xl mt-10 text-gray-600">Tombstone not found.</p>
{/if}
