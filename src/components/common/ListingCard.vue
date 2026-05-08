<script setup>
import UiCard from '../ui/UiCard.vue'

const props = defineProps({
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
  category: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: null,
  },
  reviews: {
    type: Number,
    default: null,
  },
  duration: {
    type: String,
    default: '',
  },
})

const categoryGradients = {
  Football: 'linear-gradient(135deg,#e8f8ee,#f0f9e4)',
  Basketball: 'linear-gradient(135deg,#fff5e6,#fef0d7)',
  Yoga: 'linear-gradient(135deg,#f0ebfb,#fde8f4)',
  Dance: 'linear-gradient(135deg,#fde8f4,#fee4e8)',
  Swimming: 'linear-gradient(135deg,#e3f4fd,#d9f2f9)',
  Outdoor: 'linear-gradient(135deg,#e0f5f1,#eafaf0)',
}

const imageBg = categoryGradients[props.category] ?? 'linear-gradient(135deg,#eef7f1,#f8f2e9)'
</script>

<template>
  <UiCard padding="sm" class="group min-w-[250px] max-w-[250px] space-y-3 border-stone-100 transition duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_20px_35px_rgba(35,31,26,0.12)]">
    <div class="h-36 rounded-[24px] p-4" :style="{ background: imageBg }">
      <div class="flex h-full flex-col justify-between rounded-[20px] border border-white/80 bg-white/70 p-4">
        <div class="flex items-center gap-2">
          <span v-for="badge in badges" :key="badge" class="rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
            {{ badge }}
          </span>
          <span v-if="duration" class="rounded-full border border-stone-200 bg-white/90 px-3 py-1 text-xs font-medium text-stone-500">
            {{ duration }}
          </span>
        </div>
        <div class="flex items-end justify-between">
          <p class="text-sm font-medium text-stone-500">{{ subtitle }}</p>
          <p class="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-ink">{{ price }}</p>
        </div>
      </div>
    </div>

    <div class="space-y-1.5">
      <h3 class="text-base font-semibold leading-snug text-ink">{{ title }}</h3>
      <div v-if="rating !== null" class="flex items-center gap-1.5 text-xs text-stone-500">
        <span aria-hidden="true" class="font-semibold text-amber-500">★ {{ rating.toFixed(1) }}</span>
        <span class="sr-only">Rating: {{ rating.toFixed(1) }}</span>
        <span v-if="reviews !== null">({{ reviews.toLocaleString() }} reviews)</span>
      </div>
    </div>
  </UiCard>
</template>
