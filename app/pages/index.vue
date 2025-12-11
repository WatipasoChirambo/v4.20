<template>
  <!-- Hero Section -->
  <div>
    <!-- HERO SECTION -->
    <div class="relative w-full">
      <section 
        class="relative text-white min-h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-top md:bg-center px-4 sm:px-6"
        style="background-image: url('/hero.png');"
      >
        <!-- gradient background (bottom layer) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/35 to-black/10 pointer-events-none"></div>

        <!-- noise overlay (middle layer) -->
        <div class="absolute inset-0 z-20 pointer-events-none opacity-10 md:opacity-20 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <!-- text (top layer) -->
        <div class="relative z-30 text-center max-w-xl sm:max-w-3xl md:max-w-5xl">
          <h2 class="text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight break-words">
             Advancing the Future of Corporate Technology in Africa
          </h2>
          <h4 class="text-xs sm:text-sm md:text-lg lg:text-2xl opacity-85 mb-6 leading-relaxed max-w-3xl mx-auto">
             Enterprise solutions engineered for scalability, security, and performance in the ever-expanding digital ecosystem
          </h4>
          <NuxtLink to="/contact">
            <UButton class="px-4 py-2 text-xs sm:text-sm md:text-base" color="secondary">Contact us</UButton>
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
          <NuxtLink to="/about">
            <UButton class="px-4 py-2 text-xs sm:text-sm md:text-base" color="secondary">Learn More</UButton>
          </NuxtLink>
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
        <p class="opacity-70">Our technology powers and is backed by world‑class organizations</p>
      </div>
      <div class="overflow-hidden whitespace-nowrap relative w-full">
        <div class="flex gap-16 animate-slide py-8">
          <div class="flex gap-16 animate-slide">
            <a 
              v-for="logo in images"
              :key="logo.src"
              :href="logo.href || '#'"
              class="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                :src="logo.src" 
                :alt="logo.alt || 'partner logo'" 
                class="h-24 w-auto opacity-70 hover:opacity-100 transition"
              />
            </a>
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



// const images = [
//   '/ecoride.png',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
// ]

const images = [
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' }
];

const team = [
  {
    name: "Thanthwe Kalonga",
    role: "Managing Director",
    image: "/team/thanthwe.jpeg",
    bio: "BCom(Hons) Acturial Science, TASSA",
    social: { linkedin: "https://linkedin.com/in/thanthwe-kalonga-7191aa1b2" }
  },
  {
    name: "Christina Namalomba",
    role: "Business Development Manager",
    image: "/team/tina.jpeg",
    bio: "BCom (Banking), FMVA",
    social: { linkedin: "https://linkedin.com/christinamnamalomba" }
  },
  {
    name: "Gift Chimangeni",
    role: "AI Projects & Data Architecture Manager",
    image: "/team/gift.jpeg",
    bio: "BSc (CompSci and Mathematics), MSc (Financial Engineering)",
    social: { linkedin: "https://linkedin.com/gift-chimangeni" }
  },
  {
    name: "Paul Namalomba",
    role: "Chief Innovation Officer & Lead Backend Engineer",
    image: "/team/paul.jpeg",
    bio: "BSc(Hons) Civil, MSc (Structural Engineering)",
    social: { linkedin: "https://linkedin.com/paulnamalomba", github: "https://paulnamalomba.github.io" }
  },
  {
    name: "Emma Malonda",
    role: "Data Science Manager & Lead Data Analyst",
    image: "/team/emma.jpeg",
    bio: "Daniel builds scalable and secure backend cloud systems.",
    social: { linkedin: "https://linkedin.com/emma-malonda" }
  },
  {
    name: "Chadwick Chihana",
    role: "Finance Manager",
    image: "https://via.placeholder.com/310x300",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { linkedin: "https://linkedin.com/chadwick-chihana-796b33154" }
  },
  {
      name: "Andy Kewo",
    role: "Legal Director",
    image: "/team/andy.jpeg",
    bio: "Mark oversees engineering excellence and scalable architecture.",
    social: { linkedin: "https://linkedin.com/andy-kewo-550550242" }
  },
  {
    name: "Watipaso Chirambo",
    role: "Chief Technical Officer & Lead Software Architect",
    image: "https://via.placeholder.com/310x300",
    bio: "Daniel builds scalable and secure backend cloud systems.",
    social: { linkedin: "https://linkedin.com/watipaso-chirambo-6988b6212", github: "https://github.com/WatipasoChirambo" }
  },   
  {
    name: "Diana Nguluwe",
    role: "Digital Marketing Manager",
    image: "https://via.placeholder.com/310x300",
    bio: "Sophia drives product usability and innovative experience design.",
    social: { linkedin: null }
  },
  {
    name: "Dylan Chigowo",
    role: "Administration",
    image: "https://via.placeholder.com/310x300",
    bio: "Sophia drives product usability and innovative experience design.",
    social: { linkedin: null }
  },
];

</script>

<style scoped>
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slide {
  width: max-content; /* content-based width for seamless scroll */
  display: flex;
  animation: slide 40s linear infinite;
}

.animate-slide > .flex {
  display: flex;
  gap: 4rem; /* spacing between logos */
}

.animate-slide img {
  display: block; /* prevents inline whitespace creating gaps */
}

</style>
