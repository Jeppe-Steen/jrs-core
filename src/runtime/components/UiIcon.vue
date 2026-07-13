<script setup lang="ts">
import { computed } from 'vue'
import * as icons from '../icons/index'

const iconMap = Object.fromEntries(
  Object.entries(icons).map(([path, component]) => {
    const name = path
      .replace('./icons/', '')
      .replace('.vue', '')

    return [name, component]
  })
)

type IconName = keyof typeof iconMap

const props = withDefaults(
  defineProps<{
    name: IconName

    color?: string
    background?: string

    size?: number
    backgroundSize?: number
    padding?: number

    rounded?: boolean
  }>(),
  {
    size: 20,
    padding: 0,
    rounded: false
  }
)

const icon = computed(() => icons[props.name])
</script>

<template>
  <span
    class="ui-icon"
    :class="{ rounded }"
    :style="{
      color: props.color,
      backgroundColor: props.background,
      padding: `${props.padding}px`,
      width: `${backgroundSize}px`,
      height: `${backgroundSize}px`
    }"
  >
    <component
      :is="icon"
      :style="{
        width: `${props.size}px`,
        height: `${props.size}px`
      }"
    />
  </span>
</template>

<style scoped lang="scss">
.ui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.rounded {
  border-radius: 12px;
}
</style>