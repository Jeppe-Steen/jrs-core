import {
  defineNuxtModule,
  addComponentsDir,
  addImportsDir,
  createResolver
} from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@jrs/core',
    configKey: 'jrsCore'
  },

  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false
    })

    addImportsDir(
      resolver.resolve('./runtime/composables')
    )

    nuxt.options.css.push(
      resolver.resolve('./runtime/assets/scss/main.css')
    )
  }
})