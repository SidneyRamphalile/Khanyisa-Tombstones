<script>
  // Generate 26 tombstones dynamically
  const tombstones = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Tombstone ${i + 1}`,
    image: `/images/tombstones/tombstone${i + 1}.jpg`
  }));
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-center mb-8">Our Gallery</h1>

  <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each tombstones as tombstone}
      <div class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
        <div class="w-full h-96 flex items-center justify-center bg-gray-100">
          <img
            src={tombstone.image}
            alt={tombstone.name}
            class="h-full object-contain"
          />
        </div>
        <div class="p-4 text-center">
          <h2 class="text-xl font-semibold">{tombstone.name}</h2>
        </div>
      </div>
    {/each}
  </div>
</div>
