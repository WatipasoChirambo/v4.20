<template>
  <!-- Hero Section -->
  <section
    class="w-full relative text-white py-28 mb-20 shadow-lg rounded-b-[40px] overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-90"
      style="background-image: url('/team_headers.jpg')"
    ></div>

    <!-- Subtle Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-blue-700/60"
    ></div>

    <!-- Hero Content -->
    <div class="relative max-w-4xl mx-auto text-center px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Meet the People Behind Our Success
      </h1>
      <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
        A diverse and passionate team dedicated to building exceptional digital
        experiences for clients around the world.
      </p>
      <UButton
        size="lg"
        color="white"
        class="text-blue-800 font-semibold shadow-md hover:scale-[1.03] transition-all"
      >
        Learn More
      </UButton>
    </div>
  </section>

  <!-- Team Grid -->
  <div class="min-h-screen hero-adjust bg-gradient-to-b from-gray-50 to-gray-100 pb-16">
    <section class="max-w-7xl mx-auto px-6 mb-8">
      <h1
        class="text-4xl md:text-5xl font-bold mb-14 text-center text-gray-800"
      >
        Our Global Team
      </h1>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
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

          <div>
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
      </div>
    </section>

    <!-- Sliding Side Panel -->
    <Transition name="slide-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50"
        @click.self="closePanel"
      >
        <div
          class="w-full sm:w-[420px] bg-white h-full p-10 shadow-2xl overflow-y-auto relative border-l border-gray-200"
        >
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
            @click="closePanel"
          >
            &times;
          </button>

          <!-- Content -->
          <div>
            <img
              :src="currentMember.image"
              class="w-full rounded-xl mb-8 shadow-md"
            />

            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              {{ currentMember.name }}
            </h2>
            <p class="text-gray-600 text-lg mb-6">{{ currentMember.role }}</p>

            <p class="text-gray-700 leading-relaxed text-[15px] mb-8">
              {{ currentMember.bio }}
            </p>

            <!-- Social Icons -->
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

            <!-- Navigation Buttons -->
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
import { ref, computed } from "vue";
import NewsLetter from "~/components/App/NewsLetter.vue";

const team = [
    {
    name: "Thanthwe Kalonga",
    role: "General Manager",
    image: "https://via.placeholder.com/320x280",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  },
    {
    name: "Dr Emma Malonda",
    role: "Software Architecture Manager",
    image: "/team/emma.jpeg",
    bio: "Daniel builds scalable and secure backend cloud systems.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  },
  {
    name: "Christina Namalomba",
    role: "Projects Manager",
    image: "/team/tina.jpeg",
    bio: "Alice leads global strategy and corporate vision with 15+ years in enterprise digital transformation.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: null }
  },
  {
    name: "Dr Gift Chimangeni",
    role: "Data Science Manager",
    image: "/team/gift.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  },
  {
    name: "Dr Paul Namalomba",
    role: "Platform Engineering Manager",
    image: "/team/paul.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  },
  {
    name: "Andy Kewo",
    role: "Legal Manager",
    image: "https://via.placeholder.com/300x350",
    bio: "Alice leads global strategy and corporate vision with 15+ years in enterprise digital transformation.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: null }
  },
  {
    name: "Diana Nguluwe",
    role: "Digital Marketing Manager / Administration",
    image: "https://via.placeholder.com/280x340",
    bio: "Sophia drives product usability and innovative experience design.",
    social: { twitter: null, linkedin: "https://linkedin.com/", github: null }
  },
  {
    name: "Watipaso Chirambo",
    role: "Lead Backend Architect",
    image: "https://via.placeholder.com/310x300",
    bio: "Daniel builds scalable and secure backend cloud systems.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  }
];

const isOpen = ref(false);
const currentIndex = ref(0);

const currentMember = computed(() => team[currentIndex.value]);

function openPanel(index) {
  currentIndex.value = index;
  isOpen.value = true;
}

function closePanel() {
  isOpen.value = false;
}

function nextMember() {
  if (currentIndex.value < team.length - 1) currentIndex.value++;
}

function prevMember() {
  if (currentIndex.value > 0) currentIndex.value--;
}
</script>

<style scoped>
/* Smooth Professional Slide Animation */
.slide-fade-enter-active {
  animation: slideIn 0.32s ease-out;
}
.slide-fade-leave-active {
  animation: slideOut 0.28s ease-in forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(120px);
    opacity: 0;
  }
}
</style>
