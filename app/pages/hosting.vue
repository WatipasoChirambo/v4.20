<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1581091012184-5c39f88448a0?w=1600" alt="Hosting Hero" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Fast, Secure & Reliable Hosting</h1>
        <p class="text-lg text-gray-200">Power your websites and applications with ComputeMore’s next‑generation hosting solutions.</p>
      </div>
    </div>

    <!-- About Section -->
    <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-3xl font-bold mb-4">About Our Hosting Services</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore provides enterprise-level hosting solutions designed for speed, security, and uptime. Our
          infrastructure supports businesses, developers, startups, and large enterprises — ensuring high performance
          and scalability for all digital platforms.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Whether you're hosting a small website or a mission-critical application, we deliver reliable hosting backed
          by modern infrastructure and 24/7 monitoring.
        </p>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1587202372775-98927f6a8ba6?w=1600" alt="About Hosting" class="rounded-xl shadow-lg w-full" />
      </div>
    </div>

    <!-- Hosting Types -->
    <div class="bg-gray-50 py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-14">Our Hosting Packages</h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <!-- Shared Hosting -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">Shared Hosting</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Ideal for small to medium websites with SSD storage, free SSL, daily backups, and one‑click installs.
          </p>
        </div>

        <!-- VPS Hosting -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">VPS Hosting</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Get full control with dedicated resources, scalable performance, and enterprise-level isolation.
          </p>
        </div>

        <!-- Cloud Hosting -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600" class="rounded-lg mb-4" />
          <h3 class="text-xl font-bold mb-2">Cloud Hosting</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Designed for modern apps with auto-scaling, high availability, and load balancing.
          </p>
        </div>
      </div>
    </div>

    <!-- Security Section -->
    <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1600" class="rounded-xl shadow-lg" />
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Industry‑Leading Security</h2>
        <p class="text-gray-700 leading-relaxed mb-2">Our servers are protected with advanced technologies including:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>DDoS protection</li>
          <li>Advanced firewalls</li>
          <li>Malware scanning</li>
          <li>24/7 monitoring</li>
          <li>SSL encryption</li>
        </ul>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="bg-gray-100 py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose ComputeMore?</h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 class="text-xl font-semibold mb-2">99.9% Uptime</h3>
          <p class="text-gray-600 text-sm">Reliable hosting infrastructure that keeps your platforms online.</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Fast Support</h3>
          <p class="text-gray-600 text-sm">Local and global team for urgent and technical assistance.</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Scalable Plans</h3>
          <p class="text-gray-600 text-sm">Hosting that grows with your business and system needs.</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Easy Migration</h3>
          <p class="text-gray-600 text-sm">We migrate your website or app with zero downtime.</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Launch Your Project With Us</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Ready to go live? Choose the hosting plan that fits your business and get started instantly.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
</style>
