<script setup lang="ts">
import { inject, onMounted } from 'vue'

const form = inject<{
  register: (name: string) => void
}>('ui-form')

const props = defineProps<{
  name: string
  label?: string
  modelValue: string | number
  placeholder?: string
  rounded?: boolean
  transparent?: boolean
  type?: string
  required?: boolean
}>()

onMounted(() => {
  form?.register(props.name)
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label class="ui-input">
    <span v-if="label">
      {{ label }}
    </span>

    <input
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @input="emit('update:modelValue', $event.target.value)"

      :class="{
        'rounded': rounded,
        'transparent': transparent,
      }"
    >
  </label>
</template>

<style scoped lang="scss">
    .ui-input {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        color: var(--ui-text-1);

        input {
            width: 100%;
            padding: 1rem;
            background-color: var(--ui-input-background);
            color: var(--ui-input-color);
            border: none;
        }

        .rounded {
            border-radius: 10px;
        }

        .transparent {
          background-color: transparent !important;
        }
    }
</style>