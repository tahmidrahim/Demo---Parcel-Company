<script lang="ts"></script>

<section class="bg-[#c7d4d9] text-[#004D76] py-20 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
    <!-- Left: Contact Info -->
    <div class="space-y-8">
      <div>
        <h3 class="text-2xl font-bold mb-2">Address</h3>
        <p>123 Logistics Avenue<br />Shipping District<br />Deliveryville, LP 54321</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-2">Phone</h3>
        <p>Customer Service: +1 (555) 123-4567<br />Business Inquiries: +1 (555) 987-6543</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-2">Email</h3>
        <p>Support: <a href="mailto:support@logisparcel.com" class="underline">support@logisparcel.com</a><br />
        Business: <a href="mailto:business@logisparcel.com" class="underline">business@logisparcel.com</a></p>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-2">Business Hours</h3>
        <p>
          Monday - Friday: 8:00 AM - 6:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Closed
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-2">Follow Us</h3>
        <div class="flex gap-4">
          <a href="#" class="hover:text-gray-200 underline">Facebook</a>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a href="#" class="hover:text-gray-200 underline">Twitter</a>
          <a href="#" class="hover:text-gray-200 underline">LinkedIn</a>
        </div>
      </div>
    </div>

    <!-- Right: Contact Form -->
    <div class="bg-white text-black p-8 rounded-xl shadow-md w-full">
      <h2 class="text-3xl font-bold mb-6 text-[#004D76]">Get in Touch</h2>
      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D76]" placeholder="Your Name" />
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D76]" placeholder="you@example.com" />
        </div>

        <div>
          <label for="message" class="block text-sm font-semibold mb-2">Message</label>
          <textarea id="message" rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D76]" placeholder="How can we help you?"></textarea>
        </div>

        <button type="submit" class="bg-[#004D76] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003254] transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
    
  </div>
</section>
