<script setup lang="ts">
import { ref } from 'vue'

// Dynamic services data
interface Service {
  title: string
  description: string
  icon: string
}

const services = ref<Service[]>([
  {
    title: 'Point of Sale (POS)',
    description: 'Modern POS systems for retail and restaurants with inventory management and real-time reporting.',
    icon: 'https://via.placeholder.com/80',
  },
  {
    title: 'Online Payments',
    description: 'Accept payments from anywhere with secure online payment gateways and e-commerce integrations.',
    icon: 'https://via.placeholder.com/80',
  },
  {
    title: 'Mobile Payments',
    description: 'Enable your customers to pay via mobile apps, QR codes, and NFC solutions.',
    icon: 'https://via.placeholder.com/80',
  },
])

// Dynamic Why Choose ComputeMore data
interface Reason {
  title: string
  description: string
  icon: string
}

const reasons = ref<Reason[]>([
  {
    title: 'Fast Processing',
    description: 'Lightning-fast transaction processing with instant settlement options.',
    icon: 'https://via.placeholder.com/60',
  },
  {
    title: 'Bank-Grade Security',
    description: 'PCI-DSS compliant systems with end-to-end encryption for all transactions.',
    icon: 'https://via.placeholder.com/60',
  },
  {
    title: 'Easy Integration',
    description: 'Simple APIs and plugins that integrate seamlessly with your existing systems.',
    icon: 'https://via.placeholder.com/60',
  },
])
</script>

<template>
  <div class="computemore-payment-solutions-page font-sans">

    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-5 text-center relative">
      <img 
        src="https://via.placeholder.com/1500x400" 
        alt="Payment solutions hero" 
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Payment Solutions</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Secure, fast, and reliable payment processing solutions for your business growth.
        </p>
        <UButton class="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded hover:bg-gray-100 transition">
          Request a Demo
        </UButton>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Payment processing" class="rounded shadow" />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">About ComputeMore Payment Solutions</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ComputeMore provides comprehensive payment processing solutions designed to help businesses accept payments seamlessly across multiple channels. From online transactions to point-of-sale systems, we ensure secure and efficient payment handling.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our payment solutions support multiple currencies, payment methods, and integrate easily with your existing business systems, providing a complete end-to-end payment experience.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Payment Solutions</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center bg-white"
          >
            <img :src="service.icon" :alt="service.title + ' icon'" class="mb-4 h-20 w-20 object-contain" />
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-gray-700">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore Payment Solutions</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div
            v-for="(reason, index) in reasons"
            :key="index"
            class="flex flex-col items-center"
          >
            <img :src="reason.icon" :alt="reason.title + ' icon'" class="mb-3 h-16 w-16 object-contain" />
            <h3 class="text-xl font-semibold mb-3">{{ reason.title }}</h3>
            <p class="text-gray-700">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-blue-800 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Payment Processing?</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact ComputeMore today to start accepting payments with our secure and efficient payment solutions.
      </p>
      <UButton class="px-6 py-3 bg-white text-blue-800 font-semibold rounded hover:bg-gray-100 transition">
        Get Started Today
      </UButton>
    </section>

  </div>
</template>

<style scoped>
.service-card {
  background-color: #ffffff;
}
</style>
