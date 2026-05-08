<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="flex flex-col gap-2 text-sm font-medium text-stone-600">
    <span v-if="props.label">{{ props.label }}</span>
    <input
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-base text-ink outline-none transition focus:border-brand focus-visible:ring-2 focus-visible:ring-brand/20"
      v-bind="$attrs"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
