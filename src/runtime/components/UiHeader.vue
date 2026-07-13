<script lang="ts" setup>
    const props = defineProps<{
        centered?: boolean
        icon?: {
            name: string
            count: number
            size: number
            color: string
        }
    }>()
</script>

<template>
    <header
        class="ui-header"
        :class="{
            'ui-header__centered': centered,
        }"
    >
        <span class="ui-header--subtitle">
            <slot name="subtitle"></slot>

            <span class="ui-header--subtitle--icons">
                <UiIcon
                    v-if="props.icon"
                    v-for="icon in props.icon.count"
                    :name="props.icon.name"
                    :size="props.icon.size"
                    :color="props.icon.color"
                />
            </span>
        </span>

        <slot name="title"></slot>
    </header>
</template>

<style lang="scss" scoped>
    .ui-header {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: transparent;
        color: var(--ui-header-color);

        &--subtitle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            &--icons {
                display: flex;
                flex-direction: row;
                gap: .5rem;
            }
        }
        
        &__centered {
            align-items: center;
        }
    }
</style>