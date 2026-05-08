<script setup>
import { computed, reactive, ref } from 'vue'
import CategoryChips from './CategoryChips.vue'
import ContentSection from './ContentSection.vue'
import HeroBanner from './HeroBanner.vue'
import PartnerGrid from './PartnerGrid.vue'
import SearchFilterBar from './SearchFilterBar.vue'
import VenueCtaBanner from './VenueCtaBanner.vue'

const filters = reactive({
  price: '',
  location: '',
  date: '',
})

const activeCategory = ref('All')
const searchSummary = ref('Showing curated recommendations for all categories.')

const categories = ['All', 'Football', 'Basketball', 'Yoga', 'Dance', 'Swimming', 'Outdoor']

const recommendedTraining = [
  {
    title: 'Weekend Football Camp',
    label: 'Featured',
    location: 'Bandung',
    price: '$38',
    description: 'A two-day skill clinic focused on game awareness, movement, and teamwork.',
  },
  {
    title: 'Sunrise Yoga Session',
    label: 'Popular',
    location: 'Jakarta',
    price: '$20',
    description: 'Gentle guided practice designed for beginners looking for balance and recovery.',
  },
  {
    title: 'Indoor Climbing Basics',
    label: 'New',
    location: 'Bogor',
    price: '$29',
    description: 'Try climbing techniques with beginner-friendly coaching in a safe venue.',
  },
  {
    title: 'Dance Cardio Night',
    label: 'Trending',
    location: 'Depok',
    price: '$17',
    description: 'Move through a playful cardio set in a high-energy studio environment.',
  },
]

const childrenTraining = [
  {
    title: 'Junior Tennis Club',
    label: 'Kids',
    location: 'South Jakarta',
    price: '$26',
    description: 'Foundational tennis lessons with small groups and playful coaching activities.',
  },
  {
    title: 'Creative Movement Class',
    label: 'Ages 5-8',
    location: 'Cimahi',
    price: '$19',
    description: 'Rhythm, coordination, and confidence building through fun movement games.',
  },
  {
    title: 'Beginner Swim School',
    label: 'Safe start',
    location: 'Bekasi',
    price: '$22',
    description: 'Supportive water classes for children who are learning pool safety and strokes.',
  },
  {
    title: 'Kids Futsal Evening',
    label: 'Team play',
    location: 'Tangerang',
    price: '$18',
    description: 'Structured futsal practice with drills, mini matches, and coaching feedback.',
  },
]

const nearbyVenues = [
  {
    title: 'Green Park Arena',
    label: 'Venue',
    location: '8 km away',
    price: 'Open',
    description: 'Multi-use courts with bright indoor lighting and flexible family schedules.',
  },
  {
    title: 'The Loft Studio',
    label: 'Venue',
    location: '5 km away',
    price: 'Today',
    description: 'Modern studio space for dance, wellness, and group-based community sessions.',
  },
  {
    title: 'Riverside Hall',
    label: 'Venue',
    location: '11 km away',
    price: 'Weekend',
    description: 'Large event hall with partner-friendly packages for classes and pop-up events.',
  },
  {
    title: 'Summit Sports Hub',
    label: 'Venue',
    location: '4 km away',
    price: 'Book now',
    description: 'Flexible indoor venue with training zones, waiting lounge, and parking access.',
  },
]

const partnerNames = ['Luma Center', 'North Court', 'Daily Move', 'Fresh Arena', 'Rise Hall', 'Bloom Space', 'City Gym', 'Oak Studio']

const filteredRecommendedTraining = computed(() => {
  if (activeCategory.value === 'All') {
    return recommendedTraining
  }

  return recommendedTraining.filter((item) => item.title.toLowerCase().includes(activeCategory.value.toLowerCase()))
})

// Reuse the current inputs as a lightweight mock search summary for the homepage.
function handleSearch(currentFilters) {
  const selectedValues = Object.values(currentFilters).filter(Boolean)
  searchSummary.value = selectedValues.length
    ? `Search ready for ${selectedValues.join(' · ')}.`
    : 'Showing curated recommendations for all categories.'
}
</script>

<template>
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-8 pt-2 sm:px-6 lg:px-10 lg:gap-10">
    <SearchFilterBar :model-value="filters" @update:model-value="Object.assign(filters, $event)" @search="handleSearch" />

    <section class="space-y-4">
      <CategoryChips v-model="activeCategory" :categories="categories" />
      <p class="text-sm text-stone-600">{{ searchSummary }}</p>
    </section>

    <HeroBanner
      title="Find inspiring training, venues, and partner spaces for every routine"
      description="Browse curated activities, discover family-friendly programs, and connect with venues that fit your schedule with a calmer, cleaner booking experience."
      cta-label="Start exploring"
    />

    <ContentSection
      title="Recommended training"
      subtitle="Fresh picks selected from our most booked activities this week."
      :items="filteredRecommendedTraining"
    />

    <ContentSection
      title="Training for children"
      subtitle="Supportive classes and active experiences made for younger learners."
      :items="childrenTraining"
    />

    <ContentSection
      title="Venues near me"
      subtitle="Nearby spaces with easy scheduling and partner-ready facilities."
      :items="nearbyVenues"
    />

    <VenueCtaBanner />
    <PartnerGrid :partners="partnerNames" />
  </div>
</template>
