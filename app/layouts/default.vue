<template>
    <div class="relative w-full min-h-dvh h-auto bg-dark-50 dark:bg-dark-950">
        <AppNavigation />
        <div class="pt-[120px] mb-6">
            <slot />
        </div>
        
        <Footer/>
    </div>
</template>

<script setup>
import AppNavigation from '../components/App/Navigation/index.vue'
import Footer from '../components/App/Footer/index.vue'
</script>
