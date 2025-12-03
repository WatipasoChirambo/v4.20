<template>
  <div class="computemore-data-center-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-5 text-center relative">
      <img src="https://via.placeholder.com/1500x400" alt="Data center hero" class="absolute inset-0 w-full h-full object-cover opacity-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Data Center Services</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Secure, reliable, and scalable data center solutions to power your business infrastructure.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100">
          Request a Consultation
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Data center" class="rounded shadow">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">About ComputeMore Data Center</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ComputeMore provides state-of-the-art data center services to ensure your business applications and data are secure, accessible, and scalable. We offer cloud hosting, on-premise solutions, and hybrid infrastructure management.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our data center services are designed to provide high availability, disaster recovery, and seamless integration with your existing IT systems.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Data Center Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Cloud hosting icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Cloud Hosting</h3>
            <p class="text-gray-700">
              Secure and scalable cloud hosting solutions to run your business applications reliably.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Storage icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Storage & Backup</h3>
            <p class="text-gray-700">
              Protect your critical data with high-performance storage and automated backup solutions.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Networking icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Networking & Security</h3>
            <p class="text-gray-700">
              Implement secure networks, firewalls, and monitoring to safeguard your infrastructure.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Hybrid icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Hybrid Infrastructure</h3>
            <p class="text-gray-700">
              Combine on-premise and cloud solutions for maximum flexibility and efficiency.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Disaster recovery icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Disaster Recovery</h3>
            <p class="text-gray-700">
              Ensure business continuity with robust disaster recovery and failover systems.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Monitoring icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">24/7 Monitoring & Support</h3>
            <p class="text-gray-700">
              Keep your infrastructure running smoothly with constant monitoring and professional support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore Data Center</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Reliability icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Reliable Infrastructure</h3>
            <p class="text-gray-700">High availability systems that keep your operations running 24/7.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Security icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Secure Operations</h3>
            <p class="text-gray-700">Advanced security measures to protect your data and applications.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Expert icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Expert Team</h3>
            <p class="text-gray-700">Professional engineers managing your infrastructure with expertise.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-gray-800 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Power Your Business Infrastructure</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact ComputeMore today to secure and manage your data center with our scalable and reliable solutions.
      </p>
      <button class="px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100">
        Get Started
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDataCenterPage",
};
</script>

<style scoped>
.computemore-data-center-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
