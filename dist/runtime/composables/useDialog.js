import { useState } from "#imports";
export const useDialog = () => {
  const isOpen = useState("dialog-open", () => false);
  const content = useState("dialog-content", () => ({
    title: "",
    message: "",
    fields: [],
    actions: []
  }));
  const values = useState("dialog-values", () => ({}));
  const resolver = useState(
    "dialog-resolver",
    () => null
  );
  const openDialog = (items) => {
    content.value = items;
    isOpen.value = true;
    values.value = {};
    items?.fields?.forEach((field) => {
      values.value[field.key] = "";
    });
    return new Promise((resolve) => {
      resolver.value = resolve;
    });
  };
  const closeDialog = (action) => {
    isOpen.value = false;
    resolver.value?.({
      action,
      values: { ...values.value }
    });
    resolver.value = null;
  };
  return {
    isOpen,
    content,
    values,
    openDialog,
    closeDialog
  };
};
