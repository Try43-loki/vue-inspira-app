<script setup>
import { ref } from 'vue'
import HomePage from './components/home/HomePage.vue'
import BaseLayout from './layouts/BaseLayout.vue'

const navTabs = ['Home', 'Explore', 'Programs', 'Venue']
const footerColumns = [
  {
    title: 'Explore',
    links: ['Training', 'Children', 'Venues'],
  },
  {
    title: 'Company',
    links: ['About us', 'Partners', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Privacy', 'Terms'],
  },
]

const activeTab = ref(navTabs[0])
</script>

<template>
  <BaseLayout :nav-tabs="navTabs" :active-tab="activeTab" :footer-columns="footerColumns" @update:active-tab="activeTab = $event">
    <HomePage />
  </BaseLayout>
</template>
