<script setup>
import UiButton from '../ui/UiButton.vue'
import UiCard from '../ui/UiCard.vue'
</script>

<template>
  <UiCard tone="dark" padding="lg" class="overflow-hidden">
    <div class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="absolute inset-0 bg-dot-white/10 opacity-40"></div>
      <div class="relative max-w-2xl space-y-3">
        <p class="text-sm uppercase tracking-[0.25em] text-white/60">Grow your venue</p>
        <h2 class="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Reach more families, trainers, and local communities with one listing.
        </h2>
        <p class="text-sm leading-7 text-white/70 sm:text-base">
          Share your venue, manage your schedule, and start receiving new booking requests in a simple flow.
        </p>
      </div>

      <div class="relative flex flex-wrap gap-3">
        <UiButton variant="light" size="lg">List your venue</UiButton>
        <UiButton variant="outline" size="lg" class="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
          Contact sales
        </UiButton>
      </div>
    </div>
  </UiCard>
</template>
