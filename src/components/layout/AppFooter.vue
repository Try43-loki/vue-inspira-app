<script setup>
defineProps({
  brand: {
    type: String,
    default: 'Inspira Space',
  },
  columns: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <footer class="px-4 pb-8 pt-14 sm:px-6 lg:px-10">
    <div class="mx-auto max-w-7xl rounded-[30px] border border-white/80 bg-white/90 p-8 shadow-soft">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div class="space-y-3">
          <p class="text-xl font-semibold text-ink">{{ brand }}</p>
          <p class="max-w-sm text-sm leading-6 text-stone-600">
            Discover training spaces, partner venues, and curated experiences built for modern communities.
          </p>
        </div>

        <div v-for="column in columns" :key="column.title" class="space-y-3">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{{ column.title }}</p>
          <ul class="space-y-2 text-sm text-stone-600">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="transition hover:text-brand-dark hover:underline">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-stone-200 pt-4 text-sm text-stone-500">
        © 2026 {{ brand }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
