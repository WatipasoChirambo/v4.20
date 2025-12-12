<script setup lang="ts">
import { ref } from "vue";

const mobileOpen = ref(false);
const openDropdown = ref<string | null>(null);

const toggleDropdown = (label: string) => {
  openDropdown.value = openDropdown.value === label ? null : label;
};

const items = [
  { label: "Home", to: "/" },

  {
    label: "Services",
    children: [
      { label: "Consulting", to: "/consulting" },
      { label: "Development", to: "/development" },
      { label: "Support", to: "/support" },
      { label: "Data Visualization", to: "/data_visualization" },
      { label: "Data Analysis", to: "/analysis" },
      { label: "Data Cleaning", to: "/data_cleaning" },
      { label: "Data Center", to: "/data_center" },
      { label: "Data Warehouse", to: "/data_warehouse" },
      { label: "Project Management", to: "/project_management" },
      { label: "Web Hosting", to: "/hosting" },
      { label: "Computers & Devices", to: "/computers_devices" },
      { label: "Payment Solutions", to: "/services/payment-solutions" },
    ],
  },

  { label: "Team", to: "/team" },
  { label: "About Us", to: "/about" },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[99999] bg-white shadow-sm">
    <div class="flex items-center justify-between p-6">

      <!-- LOGO -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/">
          <NuxtImg src="/logo.png" class="h-12 md:h-16" alt="Logo" />
        </NuxtLink>
        <div class="text-xl font-bold">
          ComputeMore
        </div>
      </div>

      <!-- DESKTOP MENU -->
      <nav class="hidden md:flex items-center gap-8">
        <template v-for="item in items" :key="item.label">

          <NuxtLink
            v-if="!item.children"
            :to="item.to"
            class="hover:text-primary font-medium"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- DESKTOP DROPDOWN -->
          <div
            v-else
            class="relative"
            @mouseenter="openDropdown = item.label"
            @mouseleave="openDropdown = null"
          >
            <button class="flex items-center gap-1 font-medium">
              {{ item.label }}
              <UIcon
                :name="openDropdown === item.label ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                class="w-4 h-4"
              />
            </button>

            <transition name="fade">
              <div
                v-if="openDropdown === item.label"
                class="absolute left-0 mt-3 bg-white w-56 shadow-lg rounded-md p-3 flex flex-col"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="py-1 px-2 rounded hover:bg-gray-100 text-sm"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>
        </template>

        <UButton to="/contact" color="secondary">Contact Us</UButton>
      </nav>

      <!-- MOBILE HAMBURGER -->
      <button
        class="md:hidden text-black"
        @click="mobileOpen = !mobileOpen"
      >
        <UIcon :name="mobileOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-9 h-9" />
      </button>
    </div>

    <!-- MOBILE PANEL -->
    <transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white shadow-lg border-t px-6 py-6 flex flex-col gap-6"
      >
        <div v-for="item in items" :key="item.label" class="flex flex-col">

          <!-- SIMPLE LINK -->
          <NuxtLink
            v-if="!item.children"
            :to="item.to"
            class="text-lg font-medium"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- MOBILE ACCORDION -->
          <div v-else>
            <button
              class="flex justify-between w-full text-lg font-semibold"
              @click="toggleDropdown(item.label)"
            >
              {{ item.label }}
              <UIcon
                :name="openDropdown === item.label ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                class="w-5 h-5"
              />
            </button>

            <transition name="accordion">
              <div
                v-if="openDropdown === item.label"
                class="pl-4 flex flex-col gap-2 mt-2"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="text-base text-gray-700"
                  @click="mobileOpen = false"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>

        </div>

        <UButton
          to="/contact"
          color="secondary"
          block
          @click="mobileOpen = false"
        >
          Contact Us
        </UButton>
      </div>
    </transition>
  </header>
</template>

<style>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Accordion animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}

/* Slide-down menu animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
