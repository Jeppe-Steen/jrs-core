<script setup lang="ts">
    defineProps<{
        rounded?: boolean
        shadow?: boolean
    }>()
</script>

<template>
    <article class="ui-card" :class="{'ui-card--rounded': rounded, 'ui-card--shadow': shadow}">
        <slot></slot>
    </article>
</template>

<style lang="scss" scoped>
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

        &--rounded {
            border-radius: 10px;
        }

        &--shadow {
            box-shadow: 2px 2px 10px #00000025;
        }
    }
</style>