<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, required: false },
  type: { type: String, required: false, default: "primary" },
  size: { type: String, required: false, default: "small" }
});
const emit = defineEmits(["click"]);
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="ui-btn"
    :class="[
  `ui-btn--${type}`,
  `ui-btn--${size}`
]"
  >
    {{ label }}
  </NuxtLink>

  <button
    v-else
    type="button"
    class="ui-btn"
    :class="[
  `ui-btn--${type}`,
  `ui-btn--${size}`
]"
    @click="emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.ui-btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  color: var(--ui-text-1);
  font-size: 1rem;
  font-weight: normal;
}
.ui-btn--primary {
  background-color: var(--ui-btn-primary-background);
  color: var(--ui-btn-primary-color) !important;
}
.ui-btn--primary span a {
  color: var(--ui-btn-primary-color) !important;
}
.ui-btn--secondary {
  background-color: var(--ui-btn-secondary-background);
  border: 1px solid var(--ui-btn-secondary-border);
  color: var(--ui-btn-secondary-color);
}
.ui-btn--danger {
  background-color: var(--ui-danger-background);
  color: var(--ui-btn-danger-color);
}
.ui-btn--caution {
  background-color: var(--ui-btn-caution-background);
  color: var(--ui-btn-caution-color);
}
.ui-btn--cta {
  background-color: var(--ui-btn-cta-background);
  color: var(--ui-btn-cta-color);
}
.ui-btn--link {
  background-color: var(--ui-btn-transparent-background);
  color: var(--ui-btn-transparent-color);
}
.ui-btn--transparent {
  background-color: var(--ui-btn-transparent-background);
  color: var(--ui-btn-transparent-color);
}
.ui-btn--small {
  padding: 0.5rem 1rem;
}
.ui-btn--medium {
  padding: 0.5rem 2rem;
}
.ui-btn--large {
  width: 100%;
  padding: 1rem 2rem;
}
</style>
