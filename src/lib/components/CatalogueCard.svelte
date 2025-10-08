<script>
  export let product;
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden border hover:scale-105 transition">
  <img 
    src={product.image} 
    alt={product.name} 
    class="w-full h-auto object-contain rounded-t-lg bg-gray-100"
  />
  <div class="p-4">
    <h3 class="text-xl font-semibold text-red-600">{product.name}</h3>
    <p class="text-gray-700 text-sm mt-2">{product.description}</p>
    <p class="text-lg font-bold mt-3">R{product.price}</p>
    <a href={`/catalogue/${product.id}`} 
       class="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition">
      View Details
    </a>
  </div>
</div>
