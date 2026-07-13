<script setup lang="ts">
import { inject, onMounted } from 'vue'

type FormField = {
  name: string
  validate: () => boolean
}

const form = inject<{
    register: (field: FormField) => void
    errors: Record<string, string>
}>('ui-form')

const props = defineProps<{
  name: string
  label?: string
  modelValue: string | number
  placeholder?: string
  rounded?: boolean
  transparent?: boolean
  type?: string
  required?: boolean
}>()

const validate = () => {
  if (props.required && !props.modelValue) {

    form!.errors[props.name] = "Dette felt er påkrævet"
    return false
  }

  form!.errors[props.name] = ""
  return true
}

onMounted(() => {
  form?.register({
    name: props?.name,
    validate
  })
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="ui-input">
    <span v-if="label">
      {{ label }}
    </span>

    <input
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      @input="onInput"

      :class="{
        'rounded': rounded,
        'transparent': transparent,
      }"
    >

    <small
      v-if="form?.errors[props.name]"
      class="error"
    >
      {{ form.errors[props.name] }}
    </small>
  </label>
</template>

<style scoped lang="scss">
    .ui-input {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        color: var(--ui-text-1);

        input {
            width: 100%;
            padding: 1rem;
            background-color: var(--ui-input-background);
            color: var(--ui-input-color);
            border: none;
        }

        .rounded {
            border-radius: 10px;
        }

        .transparent {
          background-color: transparent !important;
        }

        .error {
          color: var(--ui-btn-danger-background);
        }
    }
</style>