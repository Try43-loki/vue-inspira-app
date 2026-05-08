<script setup>
import { computed, ref } from 'vue'
import UiButton from '../ui/UiButton.vue'
import UiCard from '../ui/UiCard.vue'
import UiInput from '../ui/UiInput.vue'
import { quickFilters } from '../../data/home'

const QUICK_FILTER_UNDER_20_PRICE = '20'
const quickFilterUpdates = {
  Today: { date: 'Today' },
  'This Weekend': { date: 'This Weekend' },
  'Under $20': { maxPrice: QUICK_FILTER_UNDER_20_PRICE },
  'Near me': { location: 'Near me' },
}

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'search'])
const activeQuickFilter = ref('')

const priceValidationMessage = computed(() => {
  if (!props.modelValue.minPrice || !props.modelValue.maxPrice) {
    return ''
  }

  const min = Number(props.modelValue.minPrice)
  const max = Number(props.modelValue.maxPrice)

  if (Number.isNaN(min) || Number.isNaN(max)) {
    return 'Please enter valid numbers for both price fields.'
  }

  if (min > max) {
    return 'Minimum price should be less than or equal to maximum price.'
  }

  return ''
})

function updateField(field, value) {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}

// Apply quick filter presets to the current search form values for lightweight interactions.
function applyQuickFilter(filter) {
  const nextFilter = activeQuickFilter.value === filter ? '' : filter
  activeQuickFilter.value = nextFilter

  const updates = {
    minPrice: props.modelValue.minPrice,
    date: props.modelValue.date,
    maxPrice: props.modelValue.maxPrice,
    location: props.modelValue.location,
  }

  Object.assign(updates, quickFilterUpdates[nextFilter] || {})

  emit('update:modelValue', {
    ...props.modelValue,
    ...updates,
  })
}

function submitSearch() {
  emit('search', {
    ...props.modelValue,
    quickFilter: activeQuickFilter.value,
  })
}
</script>

<template>
  <UiCard padding="md" class="rounded-[30px]">
    <div class="space-y-5">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
        <div class="space-y-2">
          <label class="text-sm font-medium text-stone-600">Price range</label>
          <div class="grid grid-cols-2 gap-3">
            <UiInput
              placeholder="Min"
              type="number"
              min="0"
              :aria-describedby="priceValidationMessage ? 'price-range-error' : undefined"
              :model-value="modelValue.minPrice"
              @update:model-value="updateField('minPrice', $event)"
            />
            <UiInput
              placeholder="Max"
              type="number"
              min="0"
              :aria-describedby="priceValidationMessage ? 'price-range-error' : undefined"
              :model-value="modelValue.maxPrice"
              @update:model-value="updateField('maxPrice', $event)"
            />
          </div>
          <p v-if="priceValidationMessage" id="price-range-error" class="text-xs text-red-600">{{ priceValidationMessage }}</p>
        </div>

        <UiInput
          label="Location"
          placeholder="City, district, or area"
          :model-value="modelValue.location"
          @update:model-value="updateField('location', $event)"
        />

        <UiInput
          label="Date"
          placeholder="Today, weekend, or custom"
          :model-value="modelValue.date"
          @update:model-value="updateField('date', $event)"
        />

        <UiButton
          class="self-stretch lg:self-auto"
          size="lg"
          :disabled="Boolean(priceValidationMessage)"
          @click="submitSearch"
        >
          Search
        </UiButton>
      </div>

      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Quick filters</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in quickFilters"
            :key="filter"
            type="button"
            class="rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
            :class="activeQuickFilter === filter
              ? 'border-brand/30 bg-brand-soft text-brand-dark'
              : 'border-stone-200 bg-white text-stone-700 hover:border-brand/30 hover:text-brand-dark'"
            @click="applyQuickFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </div>
  </UiCard>
</template>
