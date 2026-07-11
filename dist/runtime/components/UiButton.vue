<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, required: false },
  styling: { type: String, required: false, default: "primary" },
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
  `ui-btn--${styling}`,
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
  `ui-btn--${styling}`,
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
  background-color: var(--ui-btn-1);
  color: var(--ui-text-2) !important;
}
.ui-btn--primary span a {
  color: var(--ui-text-2) !important;
}
.ui-btn--secondary {
  background-color: var(--ui-btn-2);
  border: 1px solid var(--ui-border-1);
  color: var(--ui-text-1);
}
.ui-btn--danger {
  background-color: var(--ui-btn-3);
}
.ui-btn--caution {
  background-color: var(--ui-btn-4);
}
.ui-btn--cta {
  background-color: var(--ui-btn-5);
}
.ui-btn--link {
  background-color: var(--ui-btn-6);
}
.ui-btn--transparent {
  background-color: transparent;
}
.ui-btn--small {
  padding: 0.5rem 1rem;
}
.ui-btn--medium {
  padding: 0.5rem 2rem;
}
.ui-btn--big {
  width: 100%;
  padding: 1rem 2rem;
}
</style>
