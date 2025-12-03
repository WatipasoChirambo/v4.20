<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" alt="Computers & Devices" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Premium Computers & Devices</h1>
        <p class="text-lg text-gray-200">Discover high-performance tech devices tailored for work, business, and innovation.</p>
      </div>
    </div>

    <!-- About Section -->
    <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-3xl font-bold mb-4">Your Trusted Technology Supplier</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore supplies a wide range of premium computers and electronic devices — ideal for personal use,
          organizations, schools, tech hubs, and enterprises. We ensure reliable products backed by guarantees and
          top-tier technical support.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Whether you're equipping a modern office or upgrading your personal workstation, we provide the best options
          in performance, durability, and value.
        </p>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600" alt="Devices" class="rounded-xl shadow-lg w-full" />
      </div>
    </div>

    <!-- Product Categories -->
    <div class="bg-gray-50 py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-14">Our Device Categories</h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <!-- Laptops -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">Laptops & Ultrabooks</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            High-performance laptops ideal for developers, students, creatives, and enterprise users.
          </p>
        </div>

        <!-- Desktops -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">Desktop Computers</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Reliable workstations for offices, gaming setups, and high-power computational tasks.
          </p>
        </div>

        <!-- Accessories -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">Computer Accessories</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Keyboards, mice, monitors, docking stations, and all essential tech accessories.
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Services -->
    <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09c1?w=1600" class="rounded-xl shadow-lg" />
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Device Installation & Configuration</h2>
        <p class="text-gray-700 leading-relaxed mb-2">
          We don’t just supply devices — we help you set them up, optimize performance, and integrate them into your
          existing systems.
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Office computer setup</li>
          <li>Software installation</li>
          <li>Network & printer configuration</li>
          <li>Cloud & account setup</li>
          <li>IT onboarding solutions</li>
        </ul>
      </div>
    </div>

    <!-- Why Choose ComputeMore -->
    <div class="bg-gray-100 py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Why Buy From ComputeMore?</h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 class="text-xl font-semibold mb-2">Genuine Products</h3>
          <p class="text-gray-600 text-sm">We supply original, certified devices only.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Local Warranty</h3>
          <p class="text-gray-600 text-sm">All devices come with warranty & replacement guarantees.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p class="text-gray-600 text-sm">Best value packages for individuals and organizations.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Tech Support</h3>
          <p class="text-gray-600 text-sm">Get reliable assistance from our technical team.</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Upgrade Your Tech Today</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Get the best devices for work, school, and business — delivered and supported by ComputeMore.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Contact Us</NuxtLink>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
</style>