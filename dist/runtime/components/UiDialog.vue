<script setup>
import { useDialog } from "#imports";
const {
  isOpen,
  component,
  props,
  close
} = useDialog();
</script>

<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div
        v-if="isOpen"
        class="ui-dialog-wrapper"
        @click="close()"
      >
        <section
          class="ui-dialog"
          @click.stop
        >
          <component
            :is="component"
            v-bind="props"
          />
        </section>
      </div>
    </Transition>

  </Teleport>
</template>

<style scoped>
.ui-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(8px);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-dialog {
  width: 40%;
  height: fit-content;
  background-color: var(--ui-dialog-background);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3254901961);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
