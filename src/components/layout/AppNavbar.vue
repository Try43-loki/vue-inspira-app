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
  <header class="sticky top-0 z-20 px-4 py-4 sm:px-6 lg:px-10">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[32px] border border-white/70 bg-white/75 px-5 py-4 shadow-soft backdrop-blur-md">
      <div class="min-w-0">
        <p class="text-lg font-semibold text-ink sm:text-xl">{{ brand }}</p>
      </div>

      <div class="hidden flex-1 justify-center lg:flex">
        <UiTabs :items="tabs" :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" />
      </div>

      <div class="flex items-center gap-3">
        <UiButton variant="outline" size="sm" @click="emit('login-click')">Login</UiButton>
        <UiButton variant="default" size="sm" @click="emit('menu-click')">Menu</UiButton>
      </div>
    </div>

    <div class="mt-3 flex justify-center lg:hidden">
      <UiTabs :items="tabs" :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" />
    </div>
  </header>
</template>
