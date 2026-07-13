import {
  useState
} from "#imports";
import { markRaw } from "vue";
export const useDialog = () => {
  const isOpen = useState("dialog-open", () => false);
  const component = useState(
    "dialog-component",
    () => null
  );
  const props = useState(
    "dialog-props",
    () => ({})
  );
  const resolver = useState(
    "dialog-resolver",
    () => null
  );
  const open = (dialog, dialogProps = {}) => {
    component.value = markRaw(dialog);
    props.value = dialogProps;
    isOpen.value = true;
    document.body.classList.add("modal-open");
    return new Promise((resolve) => {
      resolver.value = resolve;
    });
  };
  const close = (result) => {
    isOpen.value = false;
    resolver.value?.(result);
    resolver.value = null;
    component.value = null;
    props.value = {};
    document.body.classList.remove("modal-open");
  };
  return {
    isOpen,
    component,
    props,
    open,
    close
  };
};
