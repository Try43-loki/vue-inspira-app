<script setup>
import { cva } from 'class-variance-authority'
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'button',
  },
  block: Boolean,
})

const emit = defineEmits(['click'])

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-brand bg-brand text-white hover:bg-brand-dark',
        outline: 'border-stone-300 bg-white text-ink hover:border-brand hover:text-brand',
        ghost: 'border-transparent bg-transparent text-stone-700 hover:bg-white/70',
        soft: 'border-brand/10 bg-brand-soft text-brand-dark hover:bg-brand-soft/80',
        light: 'border-white/80 bg-white text-ink hover:bg-sand',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-5',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

const buttonClass = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size }), props.block && 'w-full'))
</script>

<template>
  <button :type="type" :class="buttonClass" v-bind="$attrs" @click="emit('click', $event)">
    <slot />
  </button>
</template>
