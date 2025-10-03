<script>
  export let product;
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden border hover:scale-105 transition">
  <img src={product.image} alt={product.name} class="w-full h-56 object-cover" />
  <div class="p-4">
    <h3 class="text-xl font-semibold text-primary">{product.name}</h3>
    <p class="text-gray-700 text-sm mt-2">{product.description}</p>
    <p class="text-lg font-bold mt-3">R{product.price}</p>
    <a href={`/products/${product.id}`} 
       class="mt-4 inline-block bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition">
      View Details
    </a>
  </div>
</div>
