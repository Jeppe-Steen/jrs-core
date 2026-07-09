export declare const useDialog: () => {
    isOpen: import("vue").Ref<boolean, boolean>;
    content: import("vue").Ref<any, any>;
    values: import("vue").Ref<Record<string, any>, Record<string, any>>;
    openDialog: (items: any) => Promise<unknown>;
    closeDialog: (action: string) => void;
};
