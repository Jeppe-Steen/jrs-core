<script setup lang="ts">
defineProps<{
  label?: string
  modelValue: string | number
  placeholder?: string
  rounded?: boolean
  type?: string 
  required?: boolean
}>()

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
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @input="emit('update:modelValue', $event.target.value)"

      :class="{
        'rounded': rounded,
      }"
    >
  </label>
</template>

<style scoped lang="scss">
    .ui-input {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        color: var(--text-color-1);

        input {
            width: 100%;
            padding: 1rem;
            background-color: var(--input-background);
            border: none;

        }

        .rounded {
            border-radius: 10px;
        }
    }
</style>