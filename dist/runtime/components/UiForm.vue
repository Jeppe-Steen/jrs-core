<script setup>
import { provide, reactive } from "vue";
const props = defineProps({
  action: { type: String, required: false },
  method: { type: String, required: false }
});
const fields = [];
const errors = reactive({});
const register = (field) => {
  fields.push(field);
};
provide("ui-form", {
  register,
  errors
});
const emit = defineEmits(["submit"]);
const submit = () => {
  let valid = true;
  for (const field of fields) {
    if (!field.validate()) {
      valid = false;
    }
  }
  if (!valid) return;
  emit("submit");
};
</script>

<template>
  <form @submit.prevent="submit" :action="props?.action" :method="props?.method">
    <slot />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
