<script>
  const services = [
    {
      title: "Custom Granite & Marble Memorials",
      description:
        "We craft bespoke, high-quality granite and marble headstones that reflect the individuality and dignity of every life remembered. Each piece is designed with precision and emotional depth."
    },
    {
      title: "QR Code Memorial Integration",
      description:
        "Our signature innovation — a scannable, weatherproof QR code engraved on each headstone — links directly to an online memorial page that tells the complete story of your loved one’s life."
    },
    {
      title: "Digital Memorial Pages",
      description:
        "Families can personalize their loved one's digital space with photos, videos, stories, and achievements — ensuring that their memory is preserved and shared for generations to come."
    },
    {
      title: "Restoration & Maintenance",
      description:
        "We offer professional restoration and maintenance services to keep every memorial pristine and dignified, preserving both the physical stone and its emotional legacy."
    },
    {
      title: "Consultation & Design Support",
      description:
        "Our compassionate design consultants guide families through every step — from concept to final installation — ensuring each memorial tells a story of life, love, and legacy."
    },
    {
      title: "Legacy Preservation Packages",
      description:
        "Our all-inclusive packages combine physical memorials and digital archives, offering a seamless way for families to celebrate, protect, and share their loved one’s heritage."
    }
  ];
</script>

<section class="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800">
  <div class="max-w-6xl mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4 text-gray-900">
      Our Services
    </h1>
    <p class="text-lg text-gray-600 mb-12">
      Honoring memories through artistry, innovation, and compassion.
    </p>
  </div>

  <!-- Services Grid -->
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {#each services as service}
      <div
        class="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md p-8 transition transform hover:-translate-y-2 hover:shadow-red-400/40 hover:border-red-500"
      >
        <h2 class="text-xl font-semibold mb-3 text-gray-900">{service.title}</h2>
        <p class="text-gray-700 text-base leading-relaxed">{service.description}</p>
      </div>
    {/each}
  </div>

  <!-- Closing Line -->
  <div class="text-center mt-16">
    <p class="text-gray-600 text-lg italic">
      “We are not just building monuments - we are preserving legacies that live forever.”
    </p>
  </div>
</section>
