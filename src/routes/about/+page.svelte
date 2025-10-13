<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 1000, once: true });
  });
</script>

<section class="bg-gradient-to-b from-red-900 via-black to-black text-gray-100 py-16 px-6 md:px-20 min-h-screen">
  <div class="max-w-5xl mx-auto text-center mb-12" data-aos="fade-down">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">
      About Us: <span class="text-red-500">Preserving Legacies, Connecting Generations</span>
    </h1>
    <p class="text-lg text-gray-300 mt-2">
      Every life is a story worth telling - we help ensure it's never forgotten.
    </p>
  </div>

  <!-- Vision -->
  <div class="max-w-4xl mx-auto mb-16" data-aos="fade-up">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">Our Vision</h2>
    <p class="text-gray-200 leading-relaxed mb-4">
      At the core of our mission is a profound belief that every life is a unique story worth telling
      and preserving for future generations. We understand that a memorial is more than a marker of final
      rest - it is a lasting testament to a life lived, loved, and remembered.
    </p>
    <p class="text-gray-200 leading-relaxed">
      Our vision is to evolve the traditional monument into a timeless archive, merging the permanence of stone
      with the dynamic nature of digital memory.
    </p>
  </div>

  <!-- Innovation -->
  <div class="max-w-4xl mx-auto mb-16" data-aos="fade-up">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">
      The Innovation: Where Stone Meets Story
    </h2>
    <p class="text-gray-200 leading-relaxed mb-4">
      We specialize in creating bespoke, high-quality granite and marble memorials integrated with cutting-edge
      technology. Our signature offering is the <span class="font-semibold text-white">QR Code Memorial</span>.
      Each monument we craft features a meticulously engraved, durable QR barcode that, when scanned by any smartphone,
      instantly links to a dedicated, personalized online memorial page.
    </p>
    <p class="text-gray-200 leading-relaxed mb-4">
      This digital platform allows families to curate a rich, comprehensive narrative of their loved one's life,
      transforming a moment of remembrance into an enduring experience. The memorial page can host:
    </p>
    <ul class="list-disc ml-8 text-gray-200 space-y-2">
      <li>Life Stories and Biographies</li>
      <li>Photo Albums and Galleries</li>
      <li>Stories of Achievements (e.g., educational milestones, career highlights)</li>
      <li>Shared Memories (e.g., favorite vacation spots, personal anecdotes)</li>
    </ul>
  </div>

  <!-- Commitment -->
  <div class="max-w-4xl mx-auto mb-16" data-aos="fade-up">
    <h2 class="text-2xl font-semibold text-red-400 mb-4">
      Our Commitment to Craftsmanship and Memory
    </h2>
    <p class="text-gray-200 leading-relaxed mb-4">
      While our technology is forward-looking, our dedication to traditional craftsmanship remains absolute.
      We use only the finest materials, ensuring every headstone is a dignified, lasting piece of art.
    </p>
    <p class="text-gray-200 leading-relaxed mb-4">
      We are fundamentally a company dedicated to preserving memories. Our service is designed to ensure that
      the unique essence of an individual - their warmth, their passions, their journey - is never forgotten.
    </p>
    <p class="text-gray-200 leading-relaxed">
      By transforming the silent stone into a living history book, we create a powerful bridge between the past
      and the present, allowing those who visit to truly connect with the legacy of the deceased.
    </p>
  </div>

  <!-- Closing Line -->
  <div class="max-w-3xl mx-auto text-center" data-aos="zoom-in">
    <p class="text-xl text-red-400 font-medium italic">
      We are not just selling tombstones; we are selling the promise of eternal remembrance.
    </p>
  </div>
</section>

<style>
  section {
    scroll-behavior: smooth;
    background-attachment: fixed;
  }
</style>
