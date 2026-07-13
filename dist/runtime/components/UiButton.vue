<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, required: false },
  type: { type: String, required: false, default: "primary" },
  size: { type: String, required: false, default: "small" },
  submit: { type: Boolean, required: false },
  icon: { type: String, required: false }
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
    <UiIcon v-if="props?.icon" :name="props?.icon" />
  </NuxtLink>

  <button
    v-else
    :type="submit ? 'submit' : 'button'"
    class="ui-btn"
    :class="[
  `ui-btn--${type}`,
  `ui-btn--${size}`,
  {
    'ui-btn--icon': props?.icon
  }
]"
    @click="emit('click', $event)"
  >
    {{ label }}
    <UiIcon v-if="props?.icon" :name="props?.icon" />
  </button>
</template>

<style scoped>
.ui-btn {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  color: var(--ui-text-1);
  font-size: 1rem;
  font-weight: normal;
  position: relative;
}
.ui-btn--icon {
  justify-content: space-between;
  gap: 1rem;
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
  background-color: var(--ui-btn-danger-background);
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
