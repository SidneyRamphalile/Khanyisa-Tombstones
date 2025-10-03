<script>
  import { page } from '$app/stores';
  import { products } from '$lib/data/products.js';
  import { get } from 'svelte/store';

  // Get the id from the route
  const { id } = get(page).params;

  // Find the product by id
  const product = products.find(p => String(p.id) === String(id));
</script>

{#if product}
<section class="container mx-auto px-6 py-16">
  <div class="flex flex-col md:flex-row gap-10">
    <img src={product.image} alt={product.name} class="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-red-600">{product.name}</h1>
      <p class="mt-4 text-gray-700">{product.description}</p>
      <p class="mt-4 text-xl font-bold">R{product.price}</p>
      <button class="mt-6 bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition">
        Add to Cart
      </button>
    </div>
  </div>
</section>
{:else}
<p class="text-center text-xl mt-10">Product not found.</p>
{/if}
