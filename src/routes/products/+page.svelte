<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/data/products.js';
</script>

<section class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-4xl font-bold text-center mb-10 text-gray-800">
      Our Products
    </h1>

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {#each products as product}
        <!-- Use <a> for proper accessibility -->
        <a href={`/products/${product.id}`} class="block hover:scale-105 transition transform">
          <ProductCard {product} />
        </a>
      {/each}
    </div>
  </div>
</section>
