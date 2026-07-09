<template>
    <nav class="ui-navigation">
        <slot name="logo"></slot>

        <span class="ui-navigation--links">
            <slot name="links"></slot>
        </span>
    </nav>
</template>

<style scoped>
.ui-navigation {
  background-color: var(--background-color);
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}
.ui-navigation--links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
