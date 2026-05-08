<script setup>
import UiButton from '../ui/UiButton.vue'
import UiTabs from '../ui/UiTabs.vue'

defineProps({
  brand: {
    type: String,
    default: 'Inspira Space',
  },
  tabs: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'menu-click', 'login-click'])
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-stone-200/80 bg-[#fbf7f1]/80 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-10">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
      <p class="text-lg font-semibold text-ink sm:text-xl">{{ brand }}</p>

      <div class="order-3 w-full lg:order-none lg:flex lg:w-auto lg:flex-1 lg:justify-center">
        <UiTabs :items="tabs" :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" />
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <UiButton variant="outline" size="sm" @click="emit('login-click')">Login</UiButton>
        <UiButton variant="default" size="sm" @click="emit('menu-click')">Menu</UiButton>
      </div>
    </div>
  </header>
</template>
