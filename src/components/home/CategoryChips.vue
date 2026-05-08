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

const emit = defineEmits(['update:modelValue', 'select'])

function selectCategory(category) {
  emit('update:modelValue', category)
  emit('select', category)
}
</script>

<template>
  <div class="overflow-x-auto pb-1">
    <div class="flex min-w-max gap-3">
      <UiBadge
        v-for="category in categories"
        :key="category"
        :active="category === modelValue"
        class="focus-visible:ring-2 focus-visible:ring-brand/30"
        @click="selectCategory(category)"
      >
        {{ category }}
      </UiBadge>
    </div>
  </div>
</template>
