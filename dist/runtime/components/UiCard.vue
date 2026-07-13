<script setup>
defineProps({
  rounded: { type: Boolean, required: false },
  shadow: { type: Boolean, required: false }
});
</script>

<template>
    <article class="ui-card" :class="{ 'ui-card--rounded': rounded, 'ui-card--shadow': shadow }">
        <slot></slot>
    </article>
</template>

<style scoped>
.ui-card {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--ui-card-background);
  color: var(--ui-card-color);
  padding: 20px;
  background-color: white;
}
.ui-card--rounded {
  border-radius: 10px;
}
.ui-card--shadow {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1450980392);
}
</style>
