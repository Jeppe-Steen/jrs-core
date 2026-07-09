import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit';

const module$1 = defineNuxtModule({
  meta: {
    name: "@jrs/core",
    configKey: "jrsCore"
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);
    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false
    });
    addImportsDir(
      resolver.resolve("./runtime/composables")
    );
    nuxt.options.css.push(
      resolver.resolve("./runtime/assets/scss/main.css")
    );
  }
});

export { module$1 as default };
