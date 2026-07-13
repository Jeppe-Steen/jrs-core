<script setup>
import { inject, onMounted } from "vue";
const form = inject("ui-form");
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: false },
  modelValue: { type: [String, Number], required: true },
  placeholder: { type: String, required: false },
  rounded: { type: Boolean, required: false },
  transparent: { type: Boolean, required: false },
  type: { type: String, required: false },
  required: { type: Boolean, required: false }
});
const validate = () => {
  if (props.required && !props.modelValue) {
    form.errors[props.name] = "Dette felt er p\xE5kr\xE6vet";
    return false;
  }
  form.errors[props.name] = "";
  return true;
};
onMounted(() => {
  form?.register({
    name: props?.name,
    validate
  });
});
const emit = defineEmits(["update:modelValue"]);
const onInput = (event) => {
  const target = event.target;
  emit("update:modelValue", target.value);
};
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
      @input="onInput"

      :class="{
  'rounded': rounded,
  'transparent': transparent
}"
    >

    <small
      v-if="form?.errors[props.name]"
      class="error"
    >
      {{ form.errors[props.name] }}
    </small>
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
  background-color: var(--ui-input-background);
  color: var(--ui-input-color);
  border: none;
}
.ui-input .rounded {
  border-radius: 10px;
}
.ui-input .transparent {
  background-color: transparent !important;
}
.ui-input .error {
  color: var(--ui-btn-danger-background);
}
</style>
