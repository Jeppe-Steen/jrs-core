<script setup>
const props = defineProps({
  centered: { type: Boolean, required: false },
  icon: { type: Object, required: false }
});
</script>

<template>
    <header
        class="ui-header"
        :class="{
  'ui-header__centered': centered
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

<style scoped>
.ui-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  color: var(--ui-header-color);
}
.ui-header--subtitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.ui-header--subtitle--icons {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
.ui-header__centered {
  align-items: center;
}
</style>
