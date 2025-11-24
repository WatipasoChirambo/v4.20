<template>
  <section class="w-full bg-white py-20 border-t border-gray-200">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-900 mb-3">
        Subscribe to ComputeMore Updates
      </h2>

      <p class="text-gray-500 mb-8">
        Receive strategic insights, product news, and enterprise technology updates.
      </p>

      <form @submit.prevent="submitForm" class="flex flex-col gap-4 max-w-md mx-auto">
        <input
          v-model="email"
          type="email"
          placeholder="Work email"
          required
          class="px-4 py-3 rounded-lg border border-gray-300 text-gray-800
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div>
          <UButton
          type="submit"
          class="bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Subscribe
        </UButton>
        </div>
      </form>

      <p class="text-gray-400 text-sm mt-6">
        Your information is always confidential.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const submitForm = () => console.log("Subscribed:", email.value);
</script>
