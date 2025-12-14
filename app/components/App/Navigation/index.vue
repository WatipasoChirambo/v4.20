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
      { label: "Domain Names", to: "/domain_names" },
      { label: "Data Warehouse", to: "/data_warehouse" },
      { label: "Project Management", to: "/project_managsement" },
      { label: "Web Hosting", to: "/hosting" },
      { label: "Computers & Devices", to: "/computers_devices" },
      { label: "Payment Solutions", to: "/payment_solutions" },
    ],
  },

  { label: "Team", to: "/team" },
  { label: "About Us", to: "/about" },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[999998] bg-white">
    <UContainer class="flex items-center justify-between py-4 gap-2">
      <!-- Logo -->
       <div class="flex items-center">
        <NuxtLink 
          to="/" 
          class="text-xl font-semibold"
        >
          <NuxtImg 
            src="/logo.png" 
            class="h-10 md:h-20 w-auto object-contain" 
            alt="Company Logo" 
          />
        </NuxtLink>
      <div class="bold">
        <p class="text-2xl text-black">COMPUTE MORE</p>
        <p class="semi-bold">AFRICA TECH</p>        
      </div>
       </div>
      

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
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        aria-label="Open Menu"
        variant="ghost"
        color="gray"
      >
        <UIcon name="i-heroicons-bars-3" class="w-8 h-8" />
      </UButton>
    </UContainer>

    <!-- MOBILE SLIDEOVER -->
    <USlideover v-model:open="mobileOpen">
      <template #content>
        <div id="mobile-menu" class="p-4 sm:p-6 flex flex-col h-full bg-white">
          <!-- Close Button -->
          <button
            class="self-end mb-6"
            @click="mobileOpen = false"
            aria-label="Close Menu"
          >
            <UIcon name="i-heroicons-x-mark" class="w-7 h-7" />
          </button>

          <!-- Mobile Navigation -->
          <nav class="flex flex-col gap-4 overflow-y-auto" style="max-height: calc(100vh - 6rem);">
            <div v-for="item in items" :key="item.label" class="flex flex-col border-b last:border-b-0 border-gray-200 pb-3">
              <!-- Simple Link -->
              <NuxtLink
                v-if="!item.children"
                :to="item.to"
                class="text-sm font-medium py-3 block"
                @click="mobileOpen = false"
              >
                {{ item.label }}
              </NuxtLink>

              <!-- Accordion Parent -->
              <div v-else>
                <button
                  class="flex justify-between items-center text-base font-semibold w-full py-3"
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
                      class="text-sm text-gray-700 py-2 block"
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