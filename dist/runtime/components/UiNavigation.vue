<script setup>
import { ref } from "vue";
const props = defineProps({
  extra: { type: Boolean, required: false }
});
const opned = ref(false);
const setOpned = (value) => {
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

<style scoped>
.ui-navigation {
  background-color: var(--ui-navigation);
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
  border-bottom: 1px solid var(--ui-border-1);
}
@media (min-width: 1200px) {
  .ui-navigation {
    padding: 0 100px;
  }
}
.ui-navigation--menu {
  display: flex;
  z-index: 1001;
}
@media (min-width: 1200px) {
  .ui-navigation--menu {
    display: none;
  }
}
.ui-navigation--extra {
  display: flex;
}
@media (min-width: 1200px) {
  .ui-navigation--extra {
    display: none;
  }
}
.ui-navigation--links {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--ui-background-1);
  display: none;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
}
@media (min-width: 1200px) {
  .ui-navigation--links {
    display: flex;
    padding: unset;
  }
}
.ui-navigation--links.opened {
  display: flex;
}
@media (min-width: 1200px) {
  .ui-navigation--links {
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
</style>
