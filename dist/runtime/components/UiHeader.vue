<script setup>
const props = defineProps({
  description: {
    type: String,
    default: "Welcome to my app"
  }
});
</script>

<template>
    <header class="ui-header">
        <p v-if="props.description">{{ props.description }}</p>
        <slot name="header"></slot>
    </header>
</template>

<style scoped>
.ui-header {
  width: 100%;
  margin-bottom: 1rem;
  background-color: var(--ui-background-1);
  color: var(--ui-text-1);
}
</style>
