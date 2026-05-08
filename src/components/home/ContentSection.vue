<script setup>
import TrainingCard from './TrainingCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="space-y-5">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-semibold text-ink">{{ title }}</h2>
        <p v-if="subtitle" class="mt-2 text-sm text-stone-600">{{ subtitle }}</p>
      </div>
      <button type="button" class="text-sm font-semibold text-brand-dark">See all</button>
    </div>

    <div class="overflow-x-auto pb-2">
      <div class="flex gap-4">
        <TrainingCard v-for="item in items" :key="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>
