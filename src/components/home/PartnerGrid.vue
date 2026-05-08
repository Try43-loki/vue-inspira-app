<script setup>
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
    <div>
      <h2 class="text-2xl font-semibold text-ink">Our Partner</h2>
      <p class="mt-2 text-sm text-stone-600">A growing network of training centers, studios, and local venues.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <UiCard v-for="partner in partners" :key="partner" padding="sm" class="h-28 place-content-center text-center">
        <div class="flex h-full items-center justify-center rounded-[22px] border border-dashed border-stone-300 bg-sand/60 text-base font-semibold text-stone-500">
          {{ partner }}
        </div>
      </UiCard>
    </div>
  </section>
</template>
