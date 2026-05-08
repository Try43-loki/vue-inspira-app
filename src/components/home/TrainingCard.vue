<script setup>
import UiCard from '../ui/UiCard.vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <UiCard padding="sm" class="min-w-[250px] max-w-[250px] space-y-4">
    <div class="h-36 rounded-[24px] bg-[linear-gradient(135deg,#e7f3eb,#f6efe5)] p-4">
      <div class="flex h-full items-end justify-between rounded-[20px] border border-white/80 bg-white/60 p-4">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-stone-400">{{ item.label }}</p>
          <p class="mt-2 text-sm font-medium text-stone-500">{{ item.location }}</p>
        </div>
        <p class="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">{{ item.price }}</p>
      </div>
    </div>

    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-ink">{{ item.title }}</h3>
      <p class="text-sm leading-6 text-stone-600">{{ item.description }}</p>
    </div>
  </UiCard>
</template>
