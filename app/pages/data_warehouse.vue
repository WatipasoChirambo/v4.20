<template>
  <div class="computemore-data-warehouse-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-5 text-center relative">
      <img src="https://via.placeholder.com/1500x500" 
           alt="Data warehouse" 
           class="absolute inset-0 w-full h-full object-cover opacity-20">

      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Data Warehouse</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Centralize, organize, and optimize your business data for analytics, reporting, and strategic insights.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100">
          Book a Free Assessment
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/600x400" 
               alt="Data warehouse architecture" 
               class="rounded shadow">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">What is a Data Warehouse?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            A data warehouse is the central hub of your organization’s analytics ecosystem. It stores clean, structured information from multiple systems, enabling fast reporting, business intelligence, and data-driven decision making.
          </p>
          <p class="text-gray-700 leading-relaxed">
            ComputeMore builds robust, scalable, and secure data warehouses tailored to your business needs — whether cloud-based, on-premise, or hybrid.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Data Warehouse Services</h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Warehouse Design</h3>
            <p class="text-gray-700">
              We create scalable warehouse architectures optimized for performance and growth.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">ETL / ELT Pipelines</h3>
            <p class="text-gray-700">
              Build automated pipelines to extract, clean, transform, and load your data seamlessly.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Cloud Warehouse Setup</h3>
            <p class="text-gray-700">
              Deploy on modern platforms like Azure, AWS, or Google Cloud for scalability and speed.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Integration</h3>
            <p class="text-gray-700">
              Combine data from ERP, CRM, POS, websites, banking, HR, and external systems.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Modelling</h3>
            <p class="text-gray-700">
              Create star schemas, fact tables, dimensions, and business-focused data structures.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Warehouse Maintenance</h3>
            <p class="text-gray-700">
              Continuous updating, monitoring, scaling, optimization, and quality checks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore</h2>

        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">High Performance</h3>
            <p class="text-gray-700">Fast queries, optimized storage, and smooth dashboards.</p>
          </div>

          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Scalable Architecture</h3>
            <p class="text-gray-700">Grow your warehouse as your business expands.</p>
          </div>

          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-4">
            <h3 class="text-xl font-semibold mb-3">Secure by Design</h3>
            <p class="text-gray-700">Enterprise-grade encryption, access policies, and monitoring.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta bg-indigo-700 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Build a Strong Data Foundation</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Let ComputeMore design and manage your enterprise data warehouse for powerful analytics and insights.
      </p>
      <button class="px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100">
        Start Your Data Warehouse Project
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDataWarehousePage",
};
</script>

<style scoped>
.computemore-data-warehouse-page {
  font-family: 'Inter', sans-serif;
}
.service-card {
  background-color: #ffffff;
}
</style>
