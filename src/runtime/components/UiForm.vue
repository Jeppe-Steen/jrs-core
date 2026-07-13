<script setup lang="ts">
import { provide } from 'vue'

const fields: string[] = []

const register = (name: string) => {
  fields.push(name)

  console.log(fields)
}

provide('ui-form', {
  register
})
</script>

<template>
  <form>
    <slot />
  </form>
</template>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>