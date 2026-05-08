<script setup>
import UiCard from '../ui/UiCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  badges: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <UiCard padding="sm" class="group min-w-[250px] max-w-[250px] space-y-4 border-stone-100 transition duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_20px_35px_rgba(35,31,26,0.12)]">
    <div class="h-36 rounded-[24px] bg-[linear-gradient(135deg,#eef7f1,#f8f2e9)] p-4">
      <div class="flex h-full items-end justify-between rounded-[20px] border border-white/80 bg-white/70 p-4">
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            <span v-for="badge in badges" :key="badge" class="rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
              {{ badge }}
            </span>
          </div>
          <p class="text-sm font-medium text-stone-500">{{ subtitle }}</p>
        </div>
        <p class="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-ink">{{ price }}</p>
      </div>
    </div>

    <h3 class="text-lg font-semibold text-ink">{{ title }}</h3>
  </UiCard>
</template>
