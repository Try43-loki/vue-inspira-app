<script setup>
import ListingCard from '../common/ListingCard.vue'
import SectionHeader from '../common/SectionHeader.vue'
import SkeletonCard from '../common/SkeletonCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  loading: Boolean,
})

const emit = defineEmits(['see-all'])
</script>

<template>
  <section class="space-y-5">
    <SectionHeader :title="title" :subtitle="subtitle" @action-click="emit('see-all')" />

    <div class="overflow-x-auto pb-2">
      <div class="flex gap-4">
        <template v-if="loading">
          <SkeletonCard v-for="card in 4" :key="card" />
        </template>
        <template v-else>
          <ListingCard
            v-for="item in items"
            :key="item.title"
            :title="item.title"
            :subtitle="item.subtitle"
            :price="item.price"
            :badges="item.badges"
            :category="item.category"
            :rating="item.rating ?? null"
            :reviews="item.reviews ?? null"
            :duration="item.duration ?? ''"
          />
        </template>
      </div>
    </div>
  </section>
</template>
