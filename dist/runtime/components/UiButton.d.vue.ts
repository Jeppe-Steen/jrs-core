type __VLS_Props = {
    label: string;
    to?: string;
    styling?: 'primary' | 'secondary' | 'danger' | 'caution' | 'cta' | 'link' | 'transparent';
    size?: 'small' | 'medium' | 'large';
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    styling: "primary" | "secondary" | "danger" | "caution" | "cta" | "link" | "transparent";
    size: "small" | "medium" | "large";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
