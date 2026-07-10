<script setup lang="ts">
    const props = defineProps<{
        extra?: boolean
    }>()

    const opned = ref(false);
    const setOpned = (value: boolean) => {
        opned.value = value;
    };
</script>

<template>
    <nav class="ui-navigation">
        <span v-show="props.extra" class="ui-navigation--extra">
            <slot name="extra"></slot>
        </span>

        <slot name="logo"></slot>

        <span @click="setOpned(!opned)" class="ui-navigation--menu">
            <UiIcon :name="opned ? 'close' : 'menu'" :size="40"/>
        </span>

        <span class="ui-navigation--links" :class="{ 'opened': opned }">
            <slot name="links"></slot>
        </span>
    </nav>
</template>

<style lang="scss" scoped>
.ui-navigation {
    background-color: var(--background-color);
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 2rem;

    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    border-bottom: 1px solid var(--border-color);

    @media (min-width: 1200px) {
        padding: 0 100px;
    }

    &--menu {
        display: flex;
        z-index: 1001;

        @media (min-width: 1200px) {
            display: none;
        }
    }

    &--extra {
        display: flex;

        @media (min-width: 1200px) {
            display: none;
        }
    }

    &--links {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--background-color);

        display: none;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;

        padding: 2rem;

        @media (min-width: 1200px) {
            display: flex;
            padding: unset;
        }

        &.opened {
            display: flex;
        }

        @media (min-width: 1200px) {
            position: unset;
            width: auto;
            display: flex;
            flex-direction: row;
            height: fit-content;
            gap: 1rem;
            padding: unset;
            background-color: transparent;
        }
    }
}
</style>