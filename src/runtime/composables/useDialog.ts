import {
  shallowRef,
  useState,
  type Component
} from '#imports'

import { markRaw } from 'vue'

export const useDialog = () => {
  const isOpen = useState('dialog-open', () => false)

  const component = useState<Component | null>(
    'dialog-component',
    () => null
  )

  const props = useState<Record<string, any>>(
    'dialog-props',
    () => ({})
  )

  const resolver = useState<((value: any) => void) | null>(
    'dialog-resolver',
    () => null
  )

  const open = ( dialog: Component, dialogProps: Record<string, any> = {}) => {
    component.value = markRaw(dialog)
    props.value = dialogProps
    isOpen.value = true

    document.body.classList.add('modal-open');

    return new Promise(resolve => {
      resolver.value = resolve
    })
  }

  const close = (result?: any) => {
    isOpen.value = false

    resolver.value?.(result)

    resolver.value = null
    component.value = null
    props.value = {}

    document.body.classList.remove('modal-open');
  }

  return {
    isOpen,
    component,
    props,

    open,
    close
  }
}