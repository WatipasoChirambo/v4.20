<template>
  <div class="computemore-analysis-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-5 text-center relative">
      <img src="https://via.placeholder.com/1500x400" alt="Data analysis hero" class="absolute inset-0 w-full h-full object-cover opacity-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Data Analysis</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Turn raw data into actionable insights with analytics, reporting, and predictive models.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
          Schedule a Consultation
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Data analytics" class="rounded shadow">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold mb-6">About ComputeMore Data Analysis</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ComputeMore Data Analysis helps businesses understand patterns, trends, and opportunities in their data. We use advanced analytics tools to transform data into actionable insights for better decision-making.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our services cover data preparation, statistical analysis, predictive modeling, and reporting to ensure organizations can make data-driven decisions with confidence.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Data Analysis Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Data cleaning icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Data Cleaning & Preparation</h3>
            <p class="text-gray-700">
              Organize and clean your data for accurate and reliable analysis.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Statistical icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Statistical Analysis</h3>
            <p class="text-gray-700">
              Apply statistical techniques to identify patterns, correlations, and anomalies in your data.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Predictive icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Predictive Modeling</h3>
            <p class="text-gray-700">
              Build models to forecast future trends, behaviors, and business outcomes.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Reporting icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Custom Reporting</h3>
            <p class="text-gray-700">
              Create tailored reports and dashboards to visualize insights and track KPIs.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Decision icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Decision Support Analytics</h3>
            <p class="text-gray-700">
              Provide actionable insights to help executives make informed strategic decisions.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/80" alt="Consulting icon" class="mb-4">
            <h3 class="text-xl font-semibold mb-3">Analytics Consulting</h3>
            <p class="text-gray-700">
              Guide organizations on how to implement analytics processes and leverage data effectively.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore Data Analysis</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Accuracy icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Accurate Insights</h3>
            <p class="text-gray-700">Our team ensures your data analysis is precise, reliable, and actionable.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Expert team icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Expert Analysts</h3>
            <p class="text-gray-700">Experienced analysts with deep technical and domain knowledge.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/60" alt="Action icon" class="mb-3">
            <h3 class="text-xl font-semibold mb-3">Actionable Recommendations</h3>
            <p class="text-gray-700">We provide insights that lead to practical business actions and improved outcomes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-green-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Maximize the Value of Your Data</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact ComputeMore today to analyze your data and gain insights that empower your business decisions.
      </p>
      <button class="px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
        Get Started
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreAnalysisPage",
};
</script>

<style scoped>
.computemore-analysis-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
