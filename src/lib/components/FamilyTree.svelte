<script>
  export let family = [];
  function addMember() {
    family.push({ name: '', relation: '' });
  }
</script>

<div class="mt-6">
  <h2 class="text-2xl font-semibold text-secondary mb-4">Family Tree</h2>
  {#each family as member, i}
    <div class="flex gap-4 mb-2">
      <input type="text" placeholder="Name" bind:value={member.name} 
             class="border p-2 rounded w-1/2" />
      <input type="text" placeholder="Relation" bind:value={member.relation} 
             class="border p-2 rounded w-1/2" />
    </div>
  {/each}
  <button on:click={addMember} 
          class="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded mt-2">
    Add Member
  </button>
</div>
