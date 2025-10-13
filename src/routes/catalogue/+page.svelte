<script>
  import { catalogue } from '$lib/data/catalogue.js';
</script>

<section class="container mx-auto px-6 py-16">
  <h1 class="text-4xl font-bold text-center text-red-600 mb-10">Our Catalogue</h1>
  <p class="text-center text-red-600 mb-10">Please click on each tombstone to view full description.</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {#each catalogue as item}
      <a href={`/catalogue/${item.id}`} class="block bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
        <img 
          src={item.image} 
          alt={item.name} 
          class="w-full h-auto object-contain rounded-t-lg bg-gray-100"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-900">{item.name}</h2>
          <p class="mt-2 text-gray-600 text-sm line-clamp-2">{item.description}</p>
          <p class="mt-3 text-lg font-bold text-red-600">R{item.price}</p>
        </div>
      </a>
    {/each}
  </div>
</section>
