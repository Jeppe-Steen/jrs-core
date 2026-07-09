<script setup lang="ts">
    const props = defineProps<{
        title: string,
        value?: string | number
        subTitle?: string
        clickable?: boolean
    }>()
</script>

<template>
    <article class="ui-card" :class="{'clickable': props.clickable }">
        <slot name="icon"></slot>
        <div class="ui-card--content">
            <h2>{{ props.title }}</h2>
            <h3 v-if="props.value">{{ props.value }}</h3>
            <p v-if="props.subTitle">{{ props.subTitle }}</p>
        </div>
        <p v-if="props.clickable" class="ui-card--arrow">></p>
    </article>
</template>

<style lang="scss" scoped>
    .ui-card {
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1rem;

        padding: 20px;
        background-color: white;
        box-shadow: 2px 2px 10px #00000025;
        border-radius: 10px;

        &--content {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            h2, h3 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        &--arrow {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .clickable {
        cursor: pointer;
    }
</style>