<script setup>
import UiButton from '../ui/UiButton.vue'
import UiCard from '../ui/UiCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ctaLabel: {
    type: String,
    default: 'Explore now',
  },
})
</script>

<template>
  <UiCard tone="accent" padding="lg" class="overflow-hidden">
    <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div class="space-y-5">
        <p class="inline-flex rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-sm font-medium text-brand-dark">
          Trusted by local partners
        </p>
        <div class="space-y-3">
          <h1 class="max-w-xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {{ title }}
          </h1>
          <p class="max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            {{ description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <UiButton size="lg">{{ ctaLabel }}</UiButton>
          <UiButton variant="light" size="lg">View partner plans</UiButton>
        </div>
      </div>

      <div class="relative min-h-72 rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-soft">
        <div class="absolute inset-0 bg-grid-stone-300/40 opacity-30"></div>
        <div class="relative flex h-full min-h-64 flex-col justify-between rounded-[28px] bg-[linear-gradient(145deg,#fefaf4,#eadfce)] p-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-[24px] bg-white/85 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-stone-400">Partner venue</p>
              <p class="mt-6 text-lg font-semibold text-ink">Bright Hall</p>
            </div>
            <div class="rounded-[24px] bg-brand/90 p-4 text-white">
              <p class="text-xs uppercase tracking-[0.2em] text-white/70">Availability</p>
              <p class="mt-6 text-lg font-semibold">Open this week</p>
            </div>
          </div>
          <div class="rounded-[28px] border border-dashed border-stone-300 bg-white/70 p-6 text-center text-sm text-stone-500">
            Image placeholder
          </div>
        </div>
      </div>
    </div>
  </UiCard>
</template>
