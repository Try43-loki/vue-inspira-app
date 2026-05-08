<script setup>
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const normalizedItems = computed(() => props.items.map((item) => {
  if (typeof item === 'string') {
    return { label: item, value: item }
  }

  return item
}))

function selectTab(value) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 p-1 shadow-soft backdrop-blur-sm">
    <button
      v-for="item in normalizedItems"
      :key="item.value"
      type="button"
      :class="cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-colors',
        modelValue === item.value ? 'bg-brand text-white' : 'text-stone-600 hover:bg-sand',
      )"
      @click="selectTab(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
