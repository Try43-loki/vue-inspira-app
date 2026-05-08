<script setup>
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps({
  active: Boolean,
})

const badgeClass = computed(() => cn(
  'inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors',
  props.active ? 'border-brand bg-brand text-white' : 'border-white bg-white/85 text-stone-700 hover:border-brand/30',
))
</script>

<template>
  <button :class="badgeClass" type="button" v-bind="$attrs">
    <slot />
  </button>
</template>
