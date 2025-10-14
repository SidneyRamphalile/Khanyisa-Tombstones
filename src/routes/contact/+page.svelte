<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  let name = '';
  let email = '';
  let message = '';
  let submitting = false;

  // Environment variable for Web3Forms API key
  const API_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  onMount(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitting = true;

    const formData = {
      name,
      email,
      message,
      access_key: API_KEY
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert(`Thank you, ${name}! Your message has been received.`);
        name = '';
        email = '';
        message = '';
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    } finally {
      submitting = false;
    }
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
        <button type="submit" class="mt-4 bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition disabled:opacity-50" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>

    <!-- Right: Contact Info & Map -->
    <div class="space-y-6" data-aos="fade-left">
      <h2 class="text-3xl font-bold text-red-600">Contact Info</h2>
      <p class="text-gray-700 text-lg"><strong>Address:</strong> 63 Aliwal Street, Opposite VW, Shop 1 Inez Court, Bloemfontein, 9301</p>
      <p class="text-gray-700 text-lg"><strong>Phone:</strong> +27 69 668 4616</p>
      <p class="text-gray-700 text-lg"><strong>Email:</strong> info@khanyisatombstones.co.za</p>
      <p class="text-gray-700 text-lg">
        <strong>Follow us:</strong> 
        <a href="https://www.facebook.com/profile.php?id=61561812031687" target="_blank" class="text-blue-600 hover:underline">Facebook</a> | 
        <a href="https://www.instagram.com/" target="_blank" class="text-pink-500 hover:underline">Instagram</a>
      </p>

      <!-- Your Map with Responsive Styling & Gradient -->
      <div class="mt-6 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg relative group">
        <iframe
          class="w-full h-full transition-transform duration-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.16061575589!2d26.217999284642666!3d-29.112285307286385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc561b09440bf%3A0xe36b223f1ff2442f!2sKhanyisa%20Tombstones!5e1!3m2!1sen!2sza!4v1760438958890!5m2!1sen!2sza"
          width="400"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-lg"></div>
        <div class="absolute inset-0 border-4 border-red-600 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>

  </div>
</section>
