<script setup>
</script>

<template>
    <footer class="ui-footer">
        <slot></slot>
    </footer>
</template>

<style lang="scss" scoped>
    .ui-footer {
        background-color: var(--ui-footer-background);
        width: 100%;
        min-height: 20vh;
        color: var(--ui-footer-color);
        border-top: 1px solid var(--ui-footer-border);
    }
</style>