<script lang="ts" setup>
    const props = defineProps({
        description: {
            type: String,
            default: 'Welcome to my app'
        }
    })
</script>

<template>
    <header class="ui-header">
        <p v-if="props.description">{{ props.description }}</p>
        <slot name="header"></slot>
    </header>
</template>

<style lang="scss" scoped>
    .ui-header {
        width: 100%;
        margin-bottom: 1rem;
        background-color: var(--background-color);
        color: var(--text-color);
    }
</style>