<template>
    <UContainer class="m-2">
        <UCard variant="soft" class="bg-white min-h-[297mm] mb-6  p-12">
            <div class="space-y-20">

                <!-- Header -->
                <header class="space-y-6 text-center relative">
                    <!-- Logo -->
                    <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2"
                        class="h-20 w-auto mx-auto object-contain" alt="logo" />

                    <!-- Title -->
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Engagement Process Breakdown</h2>

                    <!-- Process Steps Icons + Text (Parallel Flow with Arrows) -->
                    <ul class="relative flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
                        <!-- Step 1 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/consultation.png" class="h-16 w-16" alt="Consultation" />
                            <span class="text-gray-800 font-semibold text-center">Consultation Phase</span>
                        </li>
                        <!-- Step 2 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/planning.png" class="h-16 w-16" alt="Planning" />
                            <span class="text-gray-800 font-semibold text-center">Program Planning & Design</span>
                        </li>
                        <!-- Step 3 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/commercial.png" class="h-16 w-16" alt="Commercial Model" />
                            <span class="text-gray-800 font-semibold text-center">Commercial Model</span>
                        </li>

                        <!-- Step 4 -->
                        <li class="flex flex-col items-center gap-2">
                            <NuxtImg src="/implementation.png" class="h-16 w-16" alt="Implementation" />
                            <span class="text-gray-800 font-semibold text-center">Implementation</span>
                        </li>
                    </ul>

                    <!-- Parallel workflow note -->
                    <p class="mt-6 text-center text-gray-600 italic max-w-2xl mx-auto">
                        All these steps progress in parallel. While we develop, we continuously engage third parties to
                        ensure integrations and dependencies are completed alongside each phase.
                    </p>
                </header>

                <!-- Consultation Phase Details -->
                <section class="space-y-16">
                    <h2 class="text-3xl font-bold text-blue-600 border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-chat-bubble-oval-left" class="w-8 h-8 text-blue-600" />
                        1. Consultation Phase
                    </h2>

                    <div class="grid gap-12">
                        <!-- 1.1 Business Consultation -->
                        <div
                            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <NuxtImg src="/business-consultation.png" class="h-48 w-full object-cover"
                                alt="Business Consultation" />
                            <div class="p-6 flex flex-col gap-4">
                                <h3 class="text-xl font-semibold text-blue-600 flex items-center gap-2">
                                    <UIcon name="i-heroicons-briefcase" class="w-6 h-6" /> 1.1 Business Consultation
                                </h3>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Output:</strong> Meetings with NICO Life Team to establish a
                                            deeper understanding of the project.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>Duration:</strong> 1 Week (Meeting days can be agreed upon)</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>Cost:</strong> MWK35,700,000 – 50% upfront, 50% on completion</span>
                                    </li>
                                </ul>
                                <div class="mt-4 flex gap-2 flex-wrap">
                                    <span
                                        class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-check" class="w-4 h-4" /> Approved Output
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> Timeline
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-4 h-4" /> Budget
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- 1.2 Program Planning & Design -->
                        <div
                            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <NuxtImg src="/program-planning.png" class="h-48 w-full object-cover"
                                alt="Program Planning" />
                            <div class="p-6 flex flex-col gap-4">
                                <h3 class="text-xl font-semibold text-blue-600 flex items-center gap-2">
                                    <UIcon name="i-heroicons-pencil-square" class="w-6 h-6" /> 1.2 Program Planning & System
                                    Design
                                </h3>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Output:</strong> Operational design details and System Requirements Specification (Polished requirements).</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>Duration:</strong> 2 and a half Weeks</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>Cost:</strong> MWK47,300,000 – 50% upfront, 50% on completion</span>
                                    </li>
                                </ul>
                                <div class="mt-4 flex gap-2 flex-wrap">
                                    <span
                                        class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-check" class="w-4 h-4" /> Approved Output
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> Timeline
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-4 h-4" /> Budget
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </UCard>
    </UContainer>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Animate arrows connecting steps */
@keyframes pulse {

    0%,
    100% {
        opacity: 0.6;
        transform: scaleX(1);
    }

    50% {
        opacity: 1;
        transform: scaleX(1.05);
    }
}

.animate-pulse {
    animation: pulse 1.2s infinite ease-in-out;
}
</style>
