<script setup>
import SectionHeader from '../common/SectionHeader.vue'
import UiCard from '../ui/UiCard.vue'

defineProps({
  partners: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="space-y-5">
    <SectionHeader
      title="Our Partners"
      subtitle="A growing network of training centers, studios, and local venues."
      action-text="See all"
    />

    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <UiCard v-for="partner in partners" :key="partner" padding="sm" class="h-24 place-content-center text-center transition hover:border-brand/25">
        <div class="flex h-full items-center justify-center rounded-[18px] border border-stone-200 bg-white text-sm font-semibold text-stone-500">
          {{ partner }}
        </div>
      </UiCard>
    </div>
  </section>
</template>
