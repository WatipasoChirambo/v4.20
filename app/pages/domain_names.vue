<template>
  <div class="computemore-domain-registration-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-5 text-center relative">
      <img src="https://via.placeholder.com/1500x400" alt="Domain registration hero" class="absolute inset-0 w-full h-full object-cover opacity-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Register Your Domain Name</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Secure your online identity with fast, reliable, and affordable domain name registration.
        </p>
        <div class="mt-6 flex flex-col md:flex-row justify-center gap-3 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter your domain name"
            class="flex-1 px-4 py-3 rounded text-gray-800"
          />
          <button class="px-6 py-3 bg-white text-purple-700 font-semibold rounded hover:bg-gray-100">
            Search Domain
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Domain management" class="rounded shadow">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">About Domain Name Registration</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            A domain name is your digital address. It represents your brand, business, or personal identity online.
            Registering the right domain ensures credibility, trust, and visibility.
          </p>
          <p class="text-gray-700 leading-relaxed">
            We make it easy to search, register, and manage domain names with full control, security, and renewal support.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Domain Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Domain search" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Domain Search</h3>
            <p class="text-gray-700">
              Instantly check domain availability across popular TLDs like .com, .net, and .org.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Domain registration" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Domain Registration</h3>
            <p class="text-gray-700">
              Register your domain securely with full ownership and transparent pricing.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="DNS management" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">DNS Management</h3>
            <p class="text-gray-700">
              Manage DNS records easily to connect your domain to websites, email, and apps.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Domain transfer" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Domain Transfer</h3>
            <p class="text-gray-700">
              Transfer your existing domains seamlessly with zero downtime.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Auto renewal" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Auto Renewals</h3>
            <p class="text-gray-700">
              Never lose your domain with automated renewal reminders and billing.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Privacy protection" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">WHOIS Privacy</h3>
            <p class="text-gray-700">
              Protect your personal information from public WHOIS records.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose Our Domain Platform</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Fast setup" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Fast Setup</h3>
            <p class="text-gray-700">Register and activate your domain within minutes.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Secure" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p class="text-gray-700">Industry-grade security and trusted registrars.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Support" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Expert Support</h3>
            <p class="text-gray-700">Get help with setup, transfers, and DNS anytime.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta bg-purple-700 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Find the Perfect Domain Today</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Start your online journey by registering a domain name that fits your brand.
      </p>
      <button class="px-6 py-3 bg-white text-purple-700 font-semibold rounded hover:bg-gray-100">
        Search Domains
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "DomainRegistrationPage",
};
</script>

<style scoped>
.computemore-domain-registration-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
