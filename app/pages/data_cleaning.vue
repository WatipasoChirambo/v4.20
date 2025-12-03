<template>
  <div class="computemore-data-cleaning-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-5 text-center relative">
      <img src="https://via.placeholder.com/1500x400" alt="Data cleaning hero" class="absolute inset-0 w-full h-full object-cover opacity-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Data Cleaning</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Ensure your data is accurate, consistent, and ready for analysis with our professional data cleaning services.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
          Request a Consultation
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Data cleaning process" class="rounded shadow">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">About ComputeMore Data Cleaning</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ComputeMore Data Cleaning services help organizations maintain high-quality data. We detect and correct errors, inconsistencies, duplicates, and missing information to ensure your datasets are accurate and reliable.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Clean data is essential for making informed business decisions, building analytics models, and improving reporting accuracy. We prepare your data so it’s ready for analysis, visualization, and machine learning applications.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Data Cleaning Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Data validation icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Validation</h3>
            <p class="text-gray-700">
              Check for data accuracy, completeness, and consistency across your datasets.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Duplicate removal icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Duplicate Removal</h3>
            <p class="text-gray-700">
              Identify and remove duplicate records to prevent data redundancy and errors.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Data standardization icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Standardization</h3>
            <p class="text-gray-700">
              Standardize formats, naming conventions, and units across your datasets for uniformity.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Missing data icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Handling Missing Data</h3>
            <p class="text-gray-700">
              Detect and address missing or incomplete values to ensure dataset integrity.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Error correction icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Error Detection & Correction</h3>
            <p class="text-gray-700">
              Identify and fix errors, inconsistencies, and anomalies in your datasets.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Data enrichment icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Enrichment</h3>
            <p class="text-gray-700">
              Enhance your datasets by integrating additional relevant information to improve quality and depth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore Data Cleaning</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Accuracy icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Accurate Data</h3>
            <p class="text-gray-700">Ensure all your datasets are accurate, reliable, and ready for analysis.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Consistency icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Consistency</h3>
            <p class="text-gray-700">Maintain standardized formats and conventions across your data for uniformity.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Efficiency icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Efficient Processes</h3>
            <p class="text-gray-700">Streamline data cleaning workflows to save time and reduce errors.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-blue-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Prepare Your Data for Success</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact ComputeMore today to clean and prepare your data for analytics, visualization, and decision-making.
      </p>
      <button class="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Get Started
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDataCleaningPage",
};
</script>

<style scoped>
.computemore-data-cleaning-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
