<script setup>
</script>

<template>
    <footer class="ui-footer">
        <slot></slot>
    </footer>
</template>

<style lang="scss" scoped>
    .ui-footer {
        background-color: var(--background-color);
        width: 100%;
        min-height: 20vh;
        border-top: 1px solid var(--border-color);
    }
</style>