<template>
  <!-- Hero Section -->
  <div>
    <!-- HERO SECTION -->
    <div class="relative w-full">

  <section 
    class="relative text-white h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
    style="background-image: url('/hero.png');"
  >

    <!-- gradient background (bottom layer) -->
    <div class=""></div>

    <!-- noise overlay (middle layer) -->
    <div class="absolute inset-0 z-20 pointer-events-none opacity-20 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <!-- text (top layer) -->
    <div class="relative z-30 text-center max-w-5xl px-6">
      <h1 class="text-8xl font-bold mb-4 text-white bg-clip-text text-transparent">
  Innovating The Future of Corporate Technology
</h1>
      <h4 class="text-3xl opacity-80 mb-8">Enterprise solutions engineered for global scale, security, and performance.</h4>
      <NuxtLink to="/contact">
        <UButton size="xl" color="secondary">Contact us</UButton>
      </NuxtLink>
      
    </div>

  </section>

</div>







    <!-- ABOUT SECTION -->
    <section 
  class="py-24 relative bg-gradient-to-b from-blue-600/80 to-gray-50 dark:to-gray-800"
>
  <div class="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6">
    <div>
      <h2 class="text-4xl font-bold mb-4">Who We Are</h2>
      <p class="text-lg opacity-90 mb-6">
        We are a corporate technology powerhouse specializing in enterprise automation, cloud architecture, AI solutions, and next-gen infrastructure systems.
      </p>
      <UButton color="secondary">Learn More</UButton>
    </div>

    <div class="rounded-2xl overflow-hidden shadow-xl">
      <img src="/circuit.jpg" />
    </div>
  </div>
</section>



    <!-- SERVICES -->
    <section class="py-24 bg-white dark:bg-gray-900">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">Our Services</h2>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <UCard v-for="service in services" :key="service.title" class="p-6 text-center">
          <component :is="service.icon" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="opacity-70 text-sm">{{ service.description }}</p>
        </UCard>
      </div>
    </section>

    <!-- CLIENT SLIDER -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold">Trusted by Global Leaders</h2>
        <p class="opacity-70">Our technology powers world‑class organizations</p>
      </div>

      <div class="overflow-hidden whitespace-nowrap relative w-full">
  <div class="flex gap-16 animate-slide py-8">
    <div class="flex gap-16 animate-slide">
    <img 
      v-for="n in images" 
      :key="n" 
      :src="n" 
      class="h-24 w-30 opacity-70 hover:opacity-100 transition"
    />
  </div>
  </div>
</div>

    </section>

    <!-- TEAM SECTION -->
<section class="py-24 bg-gradient-to-br to-blue-600 via-blue-700 from-green-500 text-white">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold">Leadership Team</h2>
  </div>

  <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
    <div
      v-for="member in team"
      :key="member.name"
      class="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl"
    >
      <img :src="member.image" class="w-full rounded-xl shadow-lg mb-4" />
      <h3 class="text-xl font-semibold text-white">{{ member.name }}</h3>
      <p class="text-sm opacity-90 mb-2">{{ member.role }}</p>

      <div class="flex justify-center gap-4 text-gray-200">
        <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank" class="hover:text-white">Twitter</a>
        <a v-if="member.social.linkedin" :href="member.social.linkedin" target="_blank" class="hover:text-white">LinkedIn</a>
        <a v-if="member.social.github" :href="member.social.github" target="_blank" class="hover:text-white">GitHub</a>
      </div>
    </div>
  </div>
</section>


    <section class="w-full m-0">
      <NewsLetter/>
    </section>

  </div>
</template>

<script setup>
import { UButton, UCard } from "#components";
import { Cpu, Cloud, ShieldCheck, BarChart3, Layers, Database} from "lucide-vue-next";
import NewsLetter from "~/components/App/NewsLetter.vue";

const services = [
  {
    title: "AI Automation",
    description: "Transform operations with intelligent automation at enterprise scale.",
    icon: Cpu
  },
  {
    title: "Cloud Architecture",
    description: "Secure, scalable cloud-native infrastructure built for global deployment.",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Enterprise-grade protection, compliance, and risk mitigation.",
    icon: ShieldCheck
  },
  {
    title: "Business Intelligence",
    description:
      "Data-driven insights, dashboards, and reporting for strategic decision-making.",
    icon: BarChart3
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize systems, optimize workflows, and accelerate enterprise innovation.",
    icon: Layers
  },
  {
    title: "Data Engineering",
    description:
      "Build scalable pipelines, warehouses, and data platforms for enterprise analytics.",
    icon: Database
  }
];



const images = [
  '/ecoride.png',
  '/ictam.png',
  '/SRS.svg',
  '/yoco.jpg',
  '/ecoride.png',
  '/zoho.jpg',
  '/ictam.png',
  '/SRS.svg',
  '/yoco.jpg',
  '/ecoride.png',
  '/zoho.jpg',
  '/ictam.png',
  '/SRS.svg',
  '/yoco.jpg',
  '/ecoride.png',
  '/zoho.jpg',
  '/ictam.png',
  '/SRS.svg',
  '/yoco.jpg',
]

const team = [
  {
    name: "Thanthwe Kalonga",
    role: "General Manager",
    image: "/thanthwe.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
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
    role: "Data Science Manager",
    image: "/team/paul.jpeg",
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
    name: "Chadwick Chihana",
    role: "Finance Manager",
    image: "/thanthwe.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
  },
  // {
  //   name: "Andy Kewo",
  //   role: "Legal Manager",
  //   image: "https://via.placeholder.com/300x350",
  //   bio: "Alice leads global strategy and corporate vision with 15+ years in enterprise digital transformation.",
  //   social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: null }
  // },
  {
      name: "Andy Kewo",
    role: "Legal Manager",
    image: "/thanthwe.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/", github: "https://github.com/" }
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


</script>

<style scoped>
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slide {
  width: max-content; /* Important for smooth sliding */
  animation: slide 40s linear infinite;
}

</style>
