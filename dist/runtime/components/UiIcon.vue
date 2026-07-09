<script setup>
import { computed } from "vue";
import * as icons from "../icons/index";
const iconMap = Object.fromEntries(
  Object.entries(icons).map(([path, component]) => {
    const name = path.replace("./icons/", "").replace(".vue", "");
    return [name, component];
  })
);
const props = defineProps({
  name: { type: null, required: true },
  color: { type: String, required: false },
  background: { type: String, required: false },
  size: { type: Number, required: false, default: 20 },
  padding: { type: Number, required: false, default: 0 },
  rounded: { type: Boolean, required: false, default: false }
});
const icon = computed(() => icons[props.name]);
const backgroundSize = computed(() => {
  return props.size + 15;
});
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

<style scoped>
.ui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ui-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.rounded {
  border-radius: 12px;
}
</style>
