<template>
  <div class="computemore-pos-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-5 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Online POS</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Modern online Point of Sale systems designed to streamline sales, inventory, and customer management for your business.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded hover:bg-gray-100">
        Request a Demo
      </button>
    </section>

    <!-- About POS Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">About ComputeMore POS</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore Online POS is designed to make retail, restaurant, and service operations seamless. Manage sales, track inventory, and engage customers—all in one cloud-based solution.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Our POS system is intuitive, fast, and reliable, helping businesses reduce errors, save time, and gain actionable insights to grow revenue.
        </p>
      </div>
    </section>

    <!-- POS Features Section -->
    <section class="features py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Sales Management</h3>
            <p class="text-gray-700">
              Process transactions quickly and accurately, accept multiple payment methods, and generate receipts instantly.
            </p>
          </div>
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Inventory Tracking</h3>
            <p class="text-gray-700">
              Keep track of stock in real-time, set alerts for low inventory, and manage products across multiple locations.
            </p>
          </div>
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Customer Insights</h3>
            <p class="text-gray-700">
              Collect customer data, monitor buying habits, and run promotions to increase loyalty and repeat purchases.
            </p>
          </div>
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Reports & Analytics</h3>
            <p class="text-gray-700">
              Generate detailed sales and performance reports to make data-driven business decisions quickly.
            </p>
          </div>
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Cloud-based & Secure</h3>
            <p class="text-gray-700">
              Access your POS system anywhere, anytime, with secure data encryption and automatic backups.
            </p>
          </div>
          <div class="feature-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Multi-device Support</h3>
            <p class="text-gray-700">
              Operate on tablets, smartphones, or desktop computers with a responsive interface that works for any business setup.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why POS Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore POS</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 class="text-xl font-semibold mb-3">Ease of Use</h3>
            <p class="text-gray-700">Our POS is simple to set up and operate, reducing training time for staff and increasing efficiency from day one.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Scalable for Growth</h3>
            <p class="text-gray-700">Whether you have one store or multiple branches, our POS grows with your business and adapts to your needs.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Reliable & Secure</h3>
            <p class="text-gray-700">Cloud-based and secure, ensuring your sales data is safe, backed up, and accessible anytime.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-purple-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Start Using ComputeMore POS Today</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Transform the way you sell, manage inventory, and understand your customers with our online POS solution. Request a demo and see it in action.
      </p>
      <button class="px-6 py-3 bg-white text-purple-600 font-semibold rounded hover:bg-gray-100">
        Request a Demo
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMorePOSPage",
};
</script>

<style scoped>
.computemore-pos-page {
  font-family: 'Inter', sans-serif;
}

.feature-card {
  background-color: #ffffff;
}
</style>
