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
    default: 'Browse listings',
  },
})
</script>

<template>
  <UiCard tone="accent" padding="lg" class="overflow-hidden rounded-[34px]">
    <div class="grid gap-10 lg:min-h-[430px] lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-14">
      <div class="space-y-6 pb-2">
        <p class="inline-flex rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-sm font-medium text-brand-dark">
          Trusted by local partners
        </p>
        <div class="space-y-3">
          <h1 class="max-w-xl text-5xl font-semibold leading-[1.1] text-ink sm:text-6xl">
            {{ title }}
          </h1>
          <p class="max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
            {{ description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3 pt-2">
          <UiButton size="lg">{{ ctaLabel }}</UiButton>
        </div>
      </div>

      <div class="relative ml-auto min-h-72 w-full max-w-[470px] rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-soft">
        <div class="absolute inset-0 bg-grid-stone-300/40 opacity-30"></div>
        <div class="relative flex h-full min-h-[320px] flex-col justify-between rounded-[28px] bg-[linear-gradient(145deg,#fefaf4,#eadfce)] p-5 sm:p-6">
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
