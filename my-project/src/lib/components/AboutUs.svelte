<script lang="ts">
</script>


<section class="relative w-full h-screen overflow-hidden">
  <!-- Background Image -->
  <img
    src="/bg.jpg"
    alt="LogisParcel truck on bridge"
    class="absolute inset-0 w-full h-full object-cover z-0"
  />


  <!-- Overlay -->
  <div class="absolute inset-0 bg-black opacity-30 z-10"></div>


  <!-- Content -->
  <div class="relative z-20 flex items-center justify-start h-full px-6 md:px-12 text-white text-left">
    <div class="max-w-4xl">
      <!-- Headline with Gradient Text -->
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
        Welcome to LogisParcel
      </h1>


      <!-- Subheading -->
      <h3 class="text-2xl text-white font-semibold mb-6">
        Fast, Reliable Logistics Solutions
      </h3>


      <!-- Description Text -->
      <p class="text-lg md:text-xl mb-6">
        Your trusted partner for efficient and secure parcel delivery worldwide. Track, send, and receive with confidence.
      </p>


      <!-- Buttons -->
      <div class="flex justify-start gap-4 flex-wrap">
        <a href="/service" class="bg-gradient-to-r from-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-900 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
          Our Services
        </a>
        <a href="/tracking" class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 px-6 rounded-full hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-800 transition duration-300">
          Track your parcel
        </a>
      </div>
    </div>
  </div>
</section>
