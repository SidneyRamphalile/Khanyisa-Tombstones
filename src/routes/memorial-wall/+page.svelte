<script>
  import { goto } from "$app/navigation";
  import { memorials } from "$lib/memorials.js";

  let query = "";
  let results = [];
  let searched = false;

  function search() {
    searched = true;
    const q = query.trim().toLowerCase();
    results = memorials.filter(m => m.name.toLowerCase().includes(q));
  }

  function openMemorial(slug) {
    goto(`/memorial/${slug}`);
  }
</script>

<section class="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-red-900 via-black to-black text-gray-100 px-6 py-16">
  <h1 class="text-4xl text-red-500 font-bold mb-4 text-center">Memorial Wall</h1>

  <p class="text-gray-300 mb-8 text-center max-w-xl">
    Type the name of a loved one in the search bar below to see their memorial page. For example, try typing <strong>"Nomsa Dlamini"</strong> to see how their life story, photos, and tributes will appear.
  </p>

  <!-- Search Bar -->
  <div class="w-full max-w-xl flex mb-8">
    <input
      type="text"
      placeholder="Search for a loved one..."
      bind:value={query}
      class="flex-1 p-4 rounded-l-lg text-black outline-none focus:ring-2 focus:ring-red-500"
      on:keydown={(e) => { if (e.key === "Enter") search(); }}
    />
    <button
      on:click={search}
      class="bg-red-500 p-4 rounded-r-lg hover:bg-red-600 transition font-semibold"
    >
      Search
    </button>
  </div>

  <!-- Search Results -->
  {#if searched}
    {#if results.length > 0}
      <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {#each results as r}
          <div
            on:click={() => openMemorial(r.slug)}
            class="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden w-full md:w-80 text-center"
          >
            <!-- Photo preview (object-top to keep head visible) -->
            {#if r.photos.length > 0}
              <img
                src={r.photos[0].src}
                alt={r.photos[0].alt}
                class="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            {/if}

            <div class="p-6">
              <h2 class="text-red-400 font-bold text-2xl mb-2">{r.name}</h2>
              <p class="text-gray-300 font-medium mb-4">{r.years}</p>
              <p class="text-gray-200 italic mb-4">{r.description}</p>
              <p class="text-gray-400 text-sm">
                Click this card to read their full life story & tributes
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-gray-300 mt-4">No results found for "{query}"</p>
    {/if}
  {/if}
</section>
