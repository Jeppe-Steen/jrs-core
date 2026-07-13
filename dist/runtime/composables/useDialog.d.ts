import { type Component } from '#imports';
export declare const useDialog: () => {
    isOpen: import("vue").Ref<boolean, boolean>;
    component: import("vue").Ref<Component | null, Component | null>;
    props: import("vue").Ref<Record<string, any>, Record<string, any>>;
    open: (dialog: Component, dialogProps?: Record<string, any>) => Promise<unknown>;
    close: (result?: any) => void;
};
