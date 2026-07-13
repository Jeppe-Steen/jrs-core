<script setup>
import { provide } from "vue";
const fields = [];
const register = (name) => {
  fields.push(name);
  console.log(fields);
};
provide("ui-form", {
  register
});
</script>

<template>
  <form>
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
