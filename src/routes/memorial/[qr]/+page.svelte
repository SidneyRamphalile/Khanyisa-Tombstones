<script>
  import { page } from '$app/stores';
  import FamilyTree from '$lib/components/FamilyTree.svelte';

  // Grab the QR code parameter
  const { qr } = $page.params;

  // Placeholder data for demo
  let memorial = {
    name: "John Doe",
    birth: "01 Jan 1950",
    death: "15 Aug 2025",
    photo: "/images/products/classic.jpg",
    family: [
      { name: "Jane Doe", relation: "Spouse" },
      { name: "Sam Doe", relation: "Child" }
    ]
  };

  // In real implementation, fetch memorial data from backend using QR code
</script>

<section class="container mx-auto px-6 py-16">
  <div class="text-center">
    <img src={memorial.photo} alt={memorial.name} class="w-64 h-64 mx-auto rounded-full object-cover shadow-lg" />
    <h1 class="text-3xl font-bold text-red-600 mt-4">{memorial.name}</h1>
    <p class="text-gray-700 mt-2">{memorial.birth} - {memorial.death}</p>
  </div>

  <FamilyTree family={memorial.family} />
</section>
