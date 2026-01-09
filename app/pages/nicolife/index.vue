<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center">

        <component :is="currentStep.component" class="w-full min-h-screen" />

        <div class="absolute bottom-8 flex gap-4 mt-4 mb-2">
            <UButton size="sm" color="secondary" variant="outline" v-if="currentStepIndex > 0" @click="prevStep"
                class="px-6 py-3 rounded-lg hover:bg-gray-400 transition flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
                Previous
            </UButton>

            <UButton size="sm" color="neutral" variant="solid" v-if="currentStepIndex < steps.length - 1"
                @click="nextStep"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <span v-if="currentStepIndex === 0" class="flex items-center gap-2">
                    <UIcon name="i-heroicons-play" class="w-5 h-5" />
                    Start
                </span>


                <span v-else class="flex items-center gap-2">
                    Next
                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                </span>
            </UButton>
            <UModal fullscreen title="NICO Life Loyalty System">
                <UButton icon="i-heroicons-play" label="Watch Demo" color="error" variant="soft" />

                <template #body>
                    <VideoPlayer/>
                </template>
            </UModal>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EngagementCover from '~/components/Nico/EngagementCover.vue'
import ConsultationPhase from '~/components/Nico/ConsultationPhase.vue'
import CommercialImplementation from '~/components/Nico/CommercialImplementation.vue'
import VideoPlayer from '~/components/Nico/VideoPlayer.vue'

definePageMeta({
    layout: 'life'
})

const steps = [
    { id: 1, name: 'Cover', component: EngagementCover },
    { id: 2, name: 'Consultation', component: ConsultationPhase },
    { id: 3, name: 'Commercial & Implementation', component: CommercialImplementation }
]

const currentStepIndex = ref(0)

const currentStep = computed(() => steps[currentStepIndex.value])

function nextStep() {
    if (currentStepIndex.value < steps.length - 1) currentStepIndex.value++
}

function prevStep() {
    if (currentStepIndex.value > 0) currentStepIndex.value--
}
</script>
