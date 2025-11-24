<template>
  <!-- Hero Section -->
  <section
    class="w-full relative text-white py-28 mb-20 shadow-lg rounded-b-[40px] overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-cover bg-center opacity-90"
      style="background-image: url('/hero.png')"
    ></div>

    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-blue-700/60"
    ></div>

    <div class="relative max-w-4xl mx-auto text-center px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Empowering Businesses Through Innovation
      </h1>
      <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
        We deliver world-class digital solutions that accelerate growth,
        strengthen operational excellence, and inspire long-term success.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
        <UButton
          size="lg"
          color="white"
          class="text-blue-800 font-semibold shadow-md hover:scale-[1.03] transition-all"
        >
          Explore Our Services
        </UButton>

        <UButton
          size="lg"
          color="primary"
          variant="solid"
          class="font-semibold shadow-md hover:scale-[1.03] transition-all"
        >
          Get a Free Consultation
        </UButton>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          We are a global corporate entity dedicated to helping organizations
          transform, scale, and thrive in a rapidly changing world. Our teams
          combine strategy, technology, and design to deliver impactful
          solutions.
        </p>
        <p class="text-gray-600 leading-relaxed">
          With a presence in multiple regions and a diverse portfolio of
          clients, we take pride in being a trusted partner for digital
          transformation.
        </p>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="bg-gray-100 py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-14">Our Core Services</h2>

      <div class="grid md:grid-cols-3 gap-10">
        <div class="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Digital Strategy
          </h3>
          <p class="text-gray-600 text-sm">
            Aligning business goals with innovative digital pathways that
            deliver measurable growth.
          </p>
        </div>
        <div class="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Technology Solutions
          </h3>
          <p class="text-gray-600 text-sm">
            Building scalable systems, cloud solutions, and enterprise
            platforms tailored to your operations.
          </p>
        </div>
        <div class="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Experience Design
          </h3>
          <p class="text-gray-600 text-sm">
            Crafting intuitive and elegant interfaces that elevate customer
            engagement.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Clients Slider Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900">Trusted by Global Brands</h2>
      <p class="text-gray-600 mt-4">
        We collaborate with forward-thinking companies around the world.
      </p>
    </div>

    <div class="overflow-hidden relative">
      <div class="flex gap-16 animate-scroll whitespace-nowrap">
        <img
          v-for="logo in clientLogos"
          :key="logo"
          :src="logo"
          class="h-16 opacity-70 hover:opacity-100 transition"
        />
      </div>
    </div>
  </section>

  <!-- ⭐ NEW EXCITING NEWSLETTER SECTION ⭐ -->
  <section class="py-28 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
    <div class="max-w-3xl mx-auto px-6 text-center">
      
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
        Join 50,000+ Leaders Receiving Exclusive Insights
      </h2>

      <p class="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
        Get the latest strategies, industry trends, and expert analysis delivered 
        directly to your inbox. No fluff — just powerful insights to help you grow.
      </p>

      <form
        @submit.prevent="submitNewsletter"
        class="bg-white text-gray-700 rounded-3xl shadow-2xl p-10 border border-gray-200"
      >
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          
          <!-- Floating Label Input -->
          <div class="relative">
            <input
              v-model="newsletter.name"
              type="text"
              required
              class="peer w-full px-4 py-4 pt-6 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder=" "
            />
            <label
              class="absolute left-4 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Your Name
            </label>
          </div>

          <div class="relative">
            <input
              v-model="newsletter.email"
              type="email"
              required
              class="peer w-full px-4 py-4 pt-6 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder=" "
            />
            <label
              class="absolute left-4 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email Address
            </label>
          </div>
        </div>

        <UButton
          type="submit"
          color="primary"
          size="lg"
          class="w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:scale-[1.03] transition-all"
        >
          Subscribe Now — It’s Free
        </UButton>

        <p
          v-if="newsletterSuccess"
          class="text-green-600 mt-5 font-medium animate-fade-in"
        >
          🎉 You're subscribed! Welcome to the community.
        </p>
      </form>
    </div>
  </section>

  <!-- Team Section -->
  <div
    class="min-h-screen hero-adjust bg-gradient-to-b from-gray-50 to-gray-100 pb-16"
  >
    <section class="max-w-7xl mx-auto px-6 mb-8">
      <h1
        class="text-4xl md:text-5xl font-bold mb-14 text-center text-gray-800"
      >
        Meet Our Leadership Team
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in team"
          :key="member.name"
          class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full h-48 object-cover rounded-xl mb-5"
          />
          <h2 class="text-lg font-bold text-gray-900">{{ member.name }}</h2>
          <p class="text-gray-500 text-sm mb-5">{{ member.role }}</p>
          <UButton
            color="primary"
            variant="solid"
            class="w-full text-center"
            @click="openPanel(index)"
          >
            View Profile
          </UButton>
        </div>
      </div>
    </section>

    <!-- Slide Panel -->
    <Transition name="slide-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50"
        @click.self="closePanel"
      >
        <div
          class="w-full sm:w-[420px] bg-white h-full p-10 shadow-2xl overflow-y-auto relative border-l border-gray-200"
        >
          <button
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
            @click="closePanel"
          >
            &times;
          </button>

          <div>
            <img
              :src="currentMember.image"
              class="w-full rounded-xl mb-8 shadow-md"
            />

            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              {{ currentMember.name }}
            </h2>
            <p class="text-gray-600 text-lg mb-6">
              {{ currentMember.role }}
            </p>

            <p class="text-gray-700 leading-relaxed text-[15px] mb-8">
              {{ currentMember.bio }}
            </p>

            <div class="flex gap-6 justify-center my-8">
              <a
                v-if="currentMember.social.twitter"
                :href="currentMember.social.twitter"
                target="_blank"
                class="text-blue-500 hover:text-blue-600 transition text-2xl"
              >
                <i class="i-fa6-brands-twitter"></i>
              </a>
              <a
                v-if="currentMember.social.linkedin"
                :href="currentMember.social.linkedin"
                target="_blank"
                class="text-blue-700 hover:text-blue-800 transition text-2xl"
              >
                <i class="i-fa6-brands-linkedin"></i>
              </a>
              <a
                v-if="currentMember.social.github"
                :href="currentMember.social.github"
                target="_blank"
                class="text-gray-800 hover:text-black transition text-2xl"
              >
                <i class="i-fa6-brands-github"></i>
              </a>
            </div>

            <div class="flex justify-between mt-12">
              <UButton
                color="gray"
                variant="soft"
                @click="prevMember"
                :disabled="currentIndex === 0"
              >
                ← Previous
              </UButton>

              <UButton
                color="primary"
                variant="solid"
                @click="nextMember"
                :disabled="currentIndex === team.length - 1"
              >
                Next →
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* Client logos */
const clientLogos = [
  '/clients/google.png',
  '/clients/airbnb.png',
  '/clients/microsoft.png',
  '/clients/shopify.png',
  '/clients/stripe.png',
  '/clients/meta.png'
]

/* Newsletter */
const newsletter = ref({
  name: '',
  email: ''
})
const newsletterSuccess = ref(false)

const submitNewsletter = () => {
  newsletterSuccess.value = true
  setTimeout(() => (newsletterSuccess.value = false), 3000)
}

/* Team */
const team = ref([
  {
    name: 'John Doe',
    role: 'Chief Executive Officer',
    image: '/team/ceo.jpg',
    bio: 'Lorem ipsum dolor sit amet...',
    social: { twitter: '', linkedin: '', github: '' }
  }
])

const isOpen = ref(false)
const currentIndex = ref(0)

const currentMember = computed(() => team.value[currentIndex.value])

const openPanel = (index) => {
  currentIndex.value = index
  isOpen.value = true
}

const closePanel = () => {
  isOpen.value = false
}

const nextMember = () => {
  if (currentIndex.value < team.value.length - 1) currentIndex.value++
}

const prevMember = () => {
  if (currentIndex.value > 0) currentIndex.value--
}
</script>

<style scoped>
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-in-out;
}
</style>
