<template>
  <div class="computemore-development-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-5 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Development Services</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Building innovative software, mobile applications, and web solutions to accelerate your business growth.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
        Request a Consultation
      </button>
    </section>

    <!-- About Development Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">About ComputeMore Development</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore Development focuses on delivering end-to-end software solutions tailored to your business needs. We specialize in web, mobile, and enterprise application development with scalable and secure architectures.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Our expert development team ensures your applications are user-friendly, reliable, and optimized for performance. From ideation to deployment, we follow best practices and agile methodologies to deliver quality results.
        </p>
      </div>
    </section>

    <!-- Development Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Development Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Web Application Development</h3>
            <p class="text-gray-700">
              We build responsive and scalable web applications with modern frameworks and technologies to deliver seamless user experiences.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Mobile App Development</h3>
            <p class="text-gray-700">
              Native and cross-platform mobile apps designed for iOS and Android, focusing on performance, usability, and business value.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Enterprise Software Solutions</h3>
            <p class="text-gray-700">
              Custom ERP, CRM, and workflow systems to optimize operations, improve productivity, and support business growth.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">E-commerce Development</h3>
            <p class="text-gray-700">
              Secure and scalable e-commerce platforms to boost online sales, integrated with payment systems, inventory, and analytics.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">API & System Integration</h3>
            <p class="text-gray-700">
              Seamlessly connect software systems, third-party services, and internal tools to streamline operations and data flow.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p class="text-gray-700">
              Craft intuitive, user-friendly, and visually appealing interfaces to enhance engagement and satisfaction across all platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why ComputeMore Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore for Development</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 class="text-xl font-semibold mb-3">Agile Development</h3>
            <p class="text-gray-700">We follow agile methodologies to deliver high-quality software quickly and adapt to evolving requirements.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Cutting-edge Technologies</h3>
            <p class="text-gray-700">We use the latest frameworks, programming languages, and tools to build modern and maintainable applications.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Full Lifecycle Support</h3>
            <p class="text-gray-700">From planning and design to development, deployment, and maintenance, we support your project end-to-end.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-green-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Start Your Development Project Today</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact ComputeMore Development experts to turn your ideas into reliable, scalable, and high-performance software solutions.
      </p>
      <button class="px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
        Get in Touch
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDevelopmentPage",
};
</script>

<style scoped>
.computemore-development-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
