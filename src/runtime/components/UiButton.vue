<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    to?: string
    type?: 'primary' | 'secondary' | 'danger' | 'caution' | 'cta' | 'link' | 'transparent'
    size?: 'small' | 'medium' | 'large'
  }>(),
  {
    type: 'primary',
    size: 'small'
  }
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
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
 
<style lang="scss"scoped>
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

    
    // btn types
    &--primary { 
        background-color: var(--ui-btn-primary-background); 
        color: var(--ui-btn-primary-color) !important; 

        span {
            a {
                color: var(--ui-btn-primary-color) !important;
            }
        }
    }

    &--secondary { background-color: var(--ui-btn-secondary-background); border: 1px solid var(--ui-btn-secondary-border); color: var(--ui-btn-secondary-color); }
    &--danger { background-color: var(--ui-danger-background); color: var(--ui-btn-danger-color) }
    &--caution { background-color: var(--ui-btn-caution-background); color: var(--ui-btn-caution-color) }
    &--cta { background-color: var(--ui-btn-cta-background); color: var(--ui-btn-cta-color) }
    &--link { background-color: var(--ui-btn-transparent-background); color: var(--ui-btn-transparent-color) }
    &--transparent { background-color: var(--ui-btn-transparent-background); color: var(--ui-btn-transparent-color) }

    // btn sizes
    &--small { padding: .5rem 1rem; }
    &--medium { padding: .5rem 2rem; }
    &--large { width: 100%; padding: 1rem 2rem; }
}
</style>