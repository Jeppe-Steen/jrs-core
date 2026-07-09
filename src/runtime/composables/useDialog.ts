import { useState } from '#imports'

export const useDialog = () => {
  const isOpen = useState('dialog-open', () => false)

  const content = useState<any>('dialog-content', () => ({
    title: '',
    message: '',
    fields: [],
    actions: [],
  }))

  const values = useState<Record<string, any>>('dialog-values', () => ({}))

  const resolver = useState<((value: any) => void) | null>(
    'dialog-resolver',
    () => null
  )

  const openDialog = (items: any) => {
    content.value = items
    isOpen.value = true

    values.value = {}

    // if there is fields it oremakes the values
    items?.fields?.forEach((field: any) => {
        values.value[field.key] = ''
    })

    return new Promise(resolve => {
      resolver.value = resolve
    })
  }

  const closeDialog = (action: string) => {
    isOpen.value = false

    resolver.value?.({
      action,
      values: { ...values.value }
    })

    resolver.value = null
  }

  return {
      isOpen,
      content,
      values,

      openDialog,
      closeDialog
  }
}