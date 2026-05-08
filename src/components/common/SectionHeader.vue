<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  actionText: {
    type: String,
    default: 'See all',
  },
  actionAriaLabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['action-click'])
</script>

<template>
  <div class="flex items-end justify-between gap-4">
    <div>
      <h2 class="text-xl font-semibold text-ink sm:text-2xl">{{ props.title }}</h2>
      <p v-if="props.subtitle" class="mt-2 text-sm text-stone-600">{{ props.subtitle }}</p>
    </div>
    <button
      type="button"
      class="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-brand/50 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
      :aria-label="props.actionAriaLabel || `See all in ${props.title} section`"
      @click="emit('action-click')"
    >
      {{ props.actionText }}
    </button>
  </div>
</template>
