<script setup>
import UiCard from '../ui/UiCard.vue'

defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <UiCard padding="md" class="rounded-[30px]">
    <div class="grid gap-4 md:grid-cols-3">
      <article v-for="(step, index) in steps" :key="step.title" class="rounded-2xl border border-stone-200 bg-white/70 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Step {{ index + 1 }}</p>
        <h3 class="mt-2 text-lg font-semibold text-ink">{{ step.title }}</h3>
        <p class="mt-2 text-sm leading-6 text-stone-600">{{ step.description }}</p>
      </article>
    </div>
  </UiCard>
</template>
