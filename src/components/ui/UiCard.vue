<script setup>
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps({
  tone: {
    type: String,
    default: 'default',
  },
  padding: {
    type: String,
    default: 'md',
  },
})

const toneClasses = {
  default: 'border border-white/70 bg-white/90',
  muted: 'border border-stone-200 bg-sand/70',
  accent: 'border border-brand/10 bg-brand-soft/70',
  dark: 'border border-stone-900/10 bg-[#1f3d30] text-white',
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-7',
}

const cardClass = computed(() => cn('rounded-[28px] shadow-soft backdrop-blur-sm', toneClasses[props.tone], paddingClasses[props.padding]))
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>
