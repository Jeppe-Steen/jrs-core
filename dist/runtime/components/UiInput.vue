<script setup>
defineProps({
  label: { type: String, required: false },
  modelValue: { type: [String, Number], required: true },
  placeholder: { type: String, required: false },
  rounded: { type: Boolean, required: false },
  type: { type: String, required: false },
  required: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
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
  'rounded': rounded
}"
    >
  </label>
</template>

<style scoped>
.ui-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--ui-text-1);
}
.ui-input input {
  width: 100%;
  padding: 1rem;
  background-color: var(--ui-background-1);
  border: none;
}
.ui-input .rounded {
  border-radius: 10px;
}
</style>
