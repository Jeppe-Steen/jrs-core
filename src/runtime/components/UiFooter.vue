<script setup>
</script>

<template>
    <footer class="ui-footer">
        <slot></slot>
    </footer>
</template>

<style lang="scss" scoped>
    .ui-footer {
        background-color: var(--ui-footer);
        width: 100%;
        min-height: 20vh;
        border-top: 1px solid var(--ui-border-1);
    }
</style>