<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    to?: string
    styling?: 'primary' | 'secondary' | 'danger' | 'caution' | 'cta' | 'link' | 'transparent'
    size?: 'small' | 'medium' | 'large'
  }>(),
  {
    styling: 'primary',
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
        background-color: var(--ui-btn-1); 
        color: var(--ui-text-2) !important; 

        span {
            a {
                color: var(--ui-text-2) !important;
            }
        }
    }

    &--secondary { background-color: var(--ui-btn-2); border: 1px solid var(--ui-border-1); color: var(--ui-text-1); }
    &--danger { background-color: var(--ui-btn-3); }
    &--caution { background-color: var(--ui-btn-4); }
    &--cta { background-color: var(--ui-btn-5); }
    &--link { background-color: var(--ui-btn-6); }
    &--transparent { background-color: transparent; }

    // btn sizes
    &--small { padding: .5rem 1rem; }
    &--medium { padding: .5rem 2rem; }
    &--big { width: 100%; padding: 1rem 2rem; }
}
</style>