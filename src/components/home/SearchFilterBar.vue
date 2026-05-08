<script setup>
import UiButton from '../ui/UiButton.vue'
import UiCard from '../ui/UiCard.vue'
import UiInput from '../ui/UiInput.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'search'])

function updateField(field, value) {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}

function submitSearch() {
  emit('search', props.modelValue)
}
</script>

<template>
  <UiCard padding="sm" class="rounded-[32px]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end">
      <div class="grid flex-1 gap-4 md:grid-cols-3">
        <UiInput label="Price" placeholder="Any budget" :model-value="modelValue.price" @update:model-value="updateField('price', $event)" />
        <UiInput label="Location" placeholder="City or area" :model-value="modelValue.location" @update:model-value="updateField('location', $event)" />
        <UiInput label="Date" placeholder="Pick a date" :model-value="modelValue.date" @update:model-value="updateField('date', $event)" />
      </div>
      <UiButton class="self-stretch lg:self-auto" size="lg" @click="submitSearch">Search</UiButton>
    </div>
  </UiCard>
</template>
