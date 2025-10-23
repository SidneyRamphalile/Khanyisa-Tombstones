<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { memorials } from "$lib/memorials.js";

  let memorial;

  onMount(() => {
    const slug = $page.params.slug;
    memorial = memorials.find(m => m.slug === slug);
  });
</script>

{#if memorial}
<section class="bg-gradient-to-b from-red-900 via-black to-black text-gray-100 py-16 px-6 md:px-20 min-h-screen">
  <!-- Header -->
  <div class="max-w-4xl mx-auto text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-bold mb-2 text-white">🕊 In Loving Memory of</h1>
    <h2 class="text-3xl md:text-4xl font-semibold text-red-500 mb-4">{memorial.name} ({memorial.years})</h2>
    <p class="text-lg text-gray-300 italic">{memorial.description}</p>
  </div>

  <!-- Gallery -->
  <div class="max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">Gallery</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each memorial.photos as photo}
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img src={photo.src} alt={photo.alt} class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
          <p class="text-gray-200 text-center mt-2 p-2">{photo.alt}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Story -->
  <div class="max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">💬 Life Story</h2>
    <p class="text-gray-200 leading-relaxed whitespace-pre-line">{memorial.story}</p>
  </div>

  <!-- Family Tree -->
  <div class="max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">🌳 Family Tree</h2>
    <ul class="text-gray-200 leading-relaxed space-y-2 ml-4">
      <li><strong>Parents:</strong> {memorial.family.parents}</li>
      <li><strong>Spouse:</strong> {memorial.family.spouse}</li>
      <li><strong>Children:</strong> {memorial.family.children.join(", ")}</li>
      <li><strong>Grandchildren:</strong> {memorial.family.grandchildren.join(", ")}</li>
    </ul>
  </div>

  <!-- Tributes -->
  <div class="max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">💐 Tributes & Memories</h2>
    <div class="space-y-4 text-gray-200">
      {#each memorial.tributes as t}
        <p>{t}</p>
      {/each}
    </div>
  </div>

  <!-- Favourite Verse -->
  <div class="max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl font-semibold text-red-400 mb-2">📖 Favourite Verse</h2>
    <p class="text-gray-200 italic">{memorial.verse}</p>
  </div>

  <!-- Grave Location -->
  <div class="max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl font-semibold text-red-400 mb-2">📍 Grave Location</h2>
    <p class="text-gray-200 mb-2">{memorial.location}</p>
    <a href={memorial.map} target="_blank" class="text-red-500 font-medium hover:underline">View on Google Maps</a>
  </div>

  <!-- About this Memorial -->
  <div class="max-w-4xl mx-auto mb-16 text-center">
    <p class="text-gray-200">
      🧡 This digital memorial is part of the Khanyisa Tombstones & Granite family.
      Scan the QR code on the headstone to visit this page anytime, anywhere - to remember, reflect, and reconnect.
    </p>
  </div>
</section>
{:else}
<p class="text-center mt-20 text-gray-300 text-xl">Memorial not found.</p>
{/if}
