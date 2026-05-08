<script setup>
import UiBadge from '../ui/UiBadge.vue'

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <UiBadge
      v-for="category in categories"
      :key="category"
      :active="category === modelValue"
      @click="emit('update:modelValue', category)"
    >
      {{ category }}
    </UiBadge>
  </div>
</template>
