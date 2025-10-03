<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  let name = '';
  let email = '';
  let message = '';

  onMount(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been received.`);
    name = '';
    email = '';
    message = '';
  };
</script>

<section class="bg-black text-white text-center py-20 px-6" data-aos="fade-down">
  <h1 class="text-4xl md:text-5xl font-bold text-red-600 glow-animate">Get in Touch</h1>
  <p class="mt-4 text-lg text-yellow-400 glow-animate">We would love to hear from you!</p>
</section>

<section class="container mx-auto py-16 px-6" data-aos="fade-up">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

    <!-- Left: Contact Form -->
    <div class="bg-gray-50 text-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right">
      <h2 class="text-3xl font-bold text-red-600 mb-6">Send Us a Message</h2>
      <form on:submit={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block font-semibold mb-1">Name</label>
          <input id="name" type="text" bind:value={name} required placeholder="Your Name" class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <div>
          <label for="email" class="block font-semibold mb-1">Email</label>
          <input id="email" type="email" bind:value={email} required placeholder="you@example.com" class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <div>
          <label for="message" class="block font-semibold mb-1">Message</label>
          <textarea id="message" bind:value={message} required rows="5" placeholder="Your message..." class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
        </div>
        <button type="submit" class="mt-4 bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
          Send Message
        </button>
      </form>
    </div>

    <!-- Right: Contact Info -->
    <div class="space-y-6" data-aos="fade-left">
      <h2 class="text-3xl font-bold text-red-600">Contact Info</h2>
      <p class="text-gray-700 text-lg"><strong>Address:</strong> 63 Aliwal Street, Opposite VW, Shop 1 Inez Court, Bloemfontein, 9301</p>
      <p class="text-gray-700 text-lg"><strong>Phone:</strong> +27 123 456 7890</p>
      <p class="text-gray-700 text-lg"><strong>Email:</strong> info@khanyisatombstones.co.za</p>
      <p class="text-gray-700 text-lg">
        <strong>Follow us:</strong> 
        <a href="https://www.facebook.com/yourpage" target="_blank" class="text-blue-600 hover:underline">Facebook</a> | 
        <a href="https://www.instagram.com/yourpage" target="_blank" class="text-pink-500 hover:underline">Instagram</a>
      </p>

      <!-- Map Placeholder -->
      <div class="mt-6 w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
        Map Placeholder
      </div>
    </div>

  </div>
</section>
