<script setup>
import AppFooter from '../components/layout/AppFooter.vue'
import AppNavbar from '../components/layout/AppNavbar.vue'

defineProps({
  navTabs: {
    type: Array,
    default: () => [],
  },
  activeTab: {
    type: String,
    default: '',
  },
  footerColumns: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:activeTab'])
</script>

<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,#fbf7f1_0%,#f5ede2_100%)] text-ink">
    <AppNavbar :tabs="navTabs" :model-value="activeTab" @update:model-value="emit('update:activeTab', $event)" />
    <main>
      <slot />
    </main>
    <AppFooter :columns="footerColumns" />
  </div>
</template>
