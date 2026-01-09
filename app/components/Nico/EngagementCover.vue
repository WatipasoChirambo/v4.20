<template>
    <div class="relative min-h-screen bg-white">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/lifebg.png');"></div>

        <div class="absolute top-8 right-8 z-20">
            <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain"
                alt="logo" />
        </div>

        <div
            class="absolute bottom-16 left-16 max-w-lg bg-blue-600/70 rounded-xl p-6 text-white z-20 flex flex-col gap-4">
            <!-- Small logo inside overlay -->
            <NuxtImg src="/nl-logo.png" densities="x1 x2" class="w-auto object-contain" alt="logo" />

            <h1 class="text-5xl font-bold leading-tight">
                Engagement<br>Process
            </h1>
            <p class="text-lg leading-relaxed text-gray-100">
                From consultation to launch, our end-to-end process turns collaboration into real results, partnering with clients every step of the way to drive impact.
            </p>
            <p class="text-sm text-gray-200 mt-2">2nd January 2026</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
}
</style>
