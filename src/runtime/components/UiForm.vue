<script setup lang="ts">
import { provide, reactive } from 'vue'

const props = defineProps<{
    action?: string
    method?: string
}>()

type FormField = {
  name: string,
  validate: () => boolean
}

const fields: FormField[] = []

const errors = reactive<Record<string, string>>({})

const register:any = (field: FormField) => {
  fields.push(field)
}

provide('ui-form', {
  register,
  errors
})

const emit = defineEmits<{
    submit: []
}>()

const submit = () => {
    let valid = true

    for (const field of fields) {
        if (!field.validate()) {
            valid = false
        }
    }

    if (!valid) return

    emit('submit')
}
</script>

<template>
  <form @submit.prevent="submit" :action="props?.action" :method="props?.method">
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