<script setup lang="ts">
    const opned = ref(false);
    const setOpned = (value: boolean) => {
        opned.value = value;
    };
</script>

<template>
    <nav class="ui-navigation">
        <span class="ui-navigation--extra">
            <slot name="extra"></slot>
        </span>

        <slot name="logo"></slot>

        <span @click="setOpned(true)" class="ui-navigation--menu">
            <UiIcon name="menu" :size="40"/>
        </span>

        <span class="ui-navigation--links" :class="{ 'opened': opned }">
            <span @click="setOpned(false)" class="ui-navigation--links--close">
                <UiIcon name="close" :size="40"/>
            </span>

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
        width: 100%;
        height: 100vh;
        background-color: var(--background-color);

        display: none;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        justify-content: center;
        alin-items: center;

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

        &--close {
            display: flex;
            position: absolute;
            top: 2rem;
            right: 2rem;
            cursor: pointer;

            @media (min-width: 1200px) {
                display: none;
            }
        }
    }
}
</style>