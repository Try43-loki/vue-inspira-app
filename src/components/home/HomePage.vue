<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { categories, childrenTraining, heroStats, howItWorksSteps, nearbyVenues, partnerNames, recommendedTraining } from '../../data/home'
import CategoryChips from './CategoryChips.vue'
import ContentSection from './ContentSection.vue'
import HeroBanner from './HeroBanner.vue'
import HowItWorksStrip from './HowItWorksStrip.vue'
import PartnerGrid from './PartnerGrid.vue'
import SearchFilterBar from './SearchFilterBar.vue'
import VenueCtaBanner from './VenueCtaBanner.vue'

const SKELETON_LOADING_DURATION_MS = 600

const filters = reactive({
  minPrice: '',
  maxPrice: '',
  location: '',
  date: '',
})

const activeCategory = ref('All')
const isLoading = ref(true)
const searchSummary = ref('Showing curated recommendations for all categories.')

const filterByCategory = (items) => (activeCategory.value === 'All'
  ? items
  : items.filter((item) => item.category === activeCategory.value))

const filteredRecommendedTraining = computed(() => filterByCategory(recommendedTraining))
const filteredChildrenTraining = computed(() => filterByCategory(childrenTraining))
const filteredNearbyVenues = computed(() => filterByCategory(nearbyVenues))

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, SKELETON_LOADING_DURATION_MS)
})

// Build a concise inline summary from active fields to keep interactions clear and lightweight.
function handleSearch(currentFilters) {
  const selectedValues = Object.values(currentFilters).filter(Boolean)
  searchSummary.value = selectedValues.length
    ? `Search ready for ${selectedValues.join(' · ')}.`
    : 'Showing curated recommendations for all categories.'
}
</script>

<template>
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-10 pt-3 sm:px-6 lg:gap-10 lg:px-10">
    <SearchFilterBar :model-value="filters" @update:model-value="Object.assign(filters, $event)" @search="handleSearch" />

    <section class="space-y-4">
      <CategoryChips v-model="activeCategory" :categories="categories" />
      <p class="text-sm text-stone-600">{{ searchSummary }}</p>
    </section>

    <HeroBanner
      title="Find inspiring training, venues, and partner spaces for every routine"
      description="Browse curated activities, discover family-friendly programs, and connect with venues that fit your schedule with a calmer, cleaner booking experience."
      cta-label="Start exploring"
      :stats="heroStats"
    />

    <HowItWorksStrip :steps="howItWorksSteps" />

    <ContentSection
      title="Recommended training"
      subtitle="Fresh picks selected from our most booked activities this week."
      :items="filteredRecommendedTraining"
      :loading="isLoading"
    />

    <ContentSection
      title="Training for children"
      subtitle="Supportive classes and active experiences made for younger learners."
      :items="filteredChildrenTraining"
      :loading="isLoading"
    />

    <ContentSection
      title="Venues near me"
      subtitle="Nearby spaces with easy scheduling and partner-ready facilities."
      :items="filteredNearbyVenues"
      :loading="isLoading"
    />

    <VenueCtaBanner />
    <PartnerGrid :partners="partnerNames" />
  </div>
</template>
