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
      { label: "Consulting", to: "/services/consulting" },
      { label: "Development", to: "/services/development" },
      { label: "Support", to: "/services/support" },
      { label: "Data Visualization", to: "/services/data-visualization" },
      { label: "Data Analysis", to: "/services/data-analysis" },
      { label: "Data Cleaning", to: "/services/data-cleaning" },
      { label: "Data Center", to: "/services/data-center" },
      { label: "Data Warehouse", to: "/services/data-warehouse" },
      { label: "Software Development", to: "/services/software-development" },
      { label: "Web Development", to: "/services/web-development" },
      {
        label: "Mobile App Development",
        to: "/services/mobile-app-development",
      },
      { label: "Project Management", to: "/services/project-management" },
      { label: "Domain Name Supply", to: "/services/domain-name-supply" },
      { label: "Web Hosting", to: "/services/hosting" },
      { label: "Computers & Devices", to: "/services/computers-devices" },
      { label: "Payment Solutions", to: "/services/payment-solutions" }, // Add this
    ],
  },

  { label: "Team", to: "/team" },
  { label: "About Us", to: "/about" },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[999998] bg-white">
    <UContainer class="flex items-center justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-semibold">
        <NuxtImg src="/logo.png" class="h-16 md:h-20" alt="Company Logo" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6 relative">
        <nav class="flex items-center gap-6 ">
          <NuxtLink to="/" class="text-base font-medium hover:text-primary">
            Home
          </NuxtLink>

          <!-- Services Dropdown -->
          <div
            class="relative"
            @mouseenter="openDropdown = 'Services'"
            @mouseleave="openDropdown = null"
          >
            <button class="flex items-center gap-1 font-medium">
              Services
              <UIcon
                :name="
                  openDropdown === 'Services'
                    ? 'i-heroicons-chevron-up'
                    : 'i-heroicons-chevron-down'
                "
                class="w-4 h-4"
              />
            </button>

            <transition name="accordion">
              <div
                v-if="openDropdown === 'Services'"
                class="absolute left-0 mt-2 w-56 bg-white rounded-md p-3 flex flex-col z-50"
              >
                <NuxtLink
                  v-for="child in items.find((i) => i.label === 'Services')
                    .children"
                  :key="child.label"
                  :to="child.to"
                  class="px-2 py-1 rounded hover:bg-gray-100 text-sm"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>

          <NuxtLink to="/team" class="text-base font-medium hover:text-primary">
            Team
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="text-base font-medium hover:text-primary"
          >
            About Us
          </NuxtLink>
        </nav>

        <UButton to="/contact" color="secondary" variant="solid">
          Contact Us
        </UButton>
      </div>

      <!-- Mobile Hamburger -->
      <UButton
        class="md:hidden flex items-center z-[9999]"
        @click="()=>!mobileOpen"
        aria-label="Open Menu"
      >
        <UIcon name="i-heroicons-bars-3" class="w-8 h-8" />
      </UButton>
    </UContainer>

    <!-- MOBILE SLIDEOVER -->
    <USlideover v-model="mobileOpen">
      <template #content>
        <div class="p-6 flex flex-col h-full">
          <!-- Close Button -->
          <button
            class="self-end mb-6"
            @click="mobileOpen = false"
            aria-label="Close Menu"
          >
            <UIcon name="i-heroicons-x-mark" class="w-7 h-7" />
          </button>

          <!-- Mobile Navigation -->
          <nav class="flex flex-col gap-5 overflow-y-auto">
            <div v-for="item in items" :key="item.label" class="flex flex-col">
              <!-- Simple Link -->
              <NuxtLink
                v-if="!item.children"
                :to="item.to"
                class="text-lg font-medium"
                @click="mobileOpen = false"
              >
                {{ item.label }}
              </NuxtLink>

              <!-- Accordion Parent -->
              <div v-else>
                <button
                  class="flex justify-between items-center text-lg font-semibold w-full"
                  @click="toggleDropdown(item.label)"
                >
                  {{ item.label }}
                  <UIcon
                    :name="
                      openDropdown === item.label
                        ? 'i-heroicons-chevron-up'
                        : 'i-heroicons-chevron-down'
                    "
                    class="w-5 h-5 transition-transform"
                  />
                </button>

                <!-- Accordion Content -->
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
              class="mt-4"
              @click="mobileOpen = false"
            >
              Contact Us
            </UButton>
          </nav>
        </div>
      </template>
    </USlideover>
  </header>
</template>

<style>
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
  max-height: 400px;
}
</style>
