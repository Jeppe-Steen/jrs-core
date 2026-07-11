<script setup>
import {useDialog} from '../../src/runtime/composables/useDialog';
const { openDialog , values, closeDialog} = useDialog()

const nav = [
  { label: 'Hjem', to: '/', styling: 'link' },
  { label: 'Om os', to: '/', styling: 'link' },
  { label: 'Hjælp', to: '/', styling: 'primary' },
]

const changeableText = ref('Dette er en tekst som kan ændres')

const objectForDialog_standard = {
  title: 'Testing af dialog',
  message: 'Dette er bare en test af UiDialog - for at lukke den igen, tryk uden for dialog boksen',
  actions: [
    { label: 'Luk', value: 'close' }
  ]
}
const handleDialog2 = async () => {
  const result = await openDialog({
    title: 'Testing af dialog med input',
    message: 'Dette er bare en test af UiDialog - her er det muligt at ændre en tekst ude på forsiden. dette gøres ved hjælp af et input og nogle kanpper',
    fields: [
      { type: 'input', key: 'changeableText', props: { type: 'text', placeholder: 'Skriv noget her' } }
    ],
    actions: [
      { label: 'Annuller', value: 'decline', styling: 'danger' },
      { label: 'Accepter', value: 'success', styling: 'cta' },
    ]
  })

  switch(result) {
    case 'decline':
      closeDialog(result)
      return;
    case 'success':
      changeableText.value = values?.value.changeableText
      closeDialog(result)
      return
  }
}


</script>

<template>
  <div class="container">
    <UiNavigation :navItems="nav" extra>
      <template #logo>
        <h2>LOGO</h2>
      </template>

      <template #extra>
        <UiButton label="Knap" />
      </template>

      <template #links>
          <UiButton 
            v-for="item in nav"
            :key="item.label"
            :label="item.label"
            :to="item.to"
            :styling="item.styling"
            @click="item.action?.()"
          />
      </template>
    </UiNavigation>

    <main>
      <div class="center">
      </div>
    </main>

    <UiDialog />
  </div>
</template>

<style lang="scss" scoped>

  .container {
    width: 100vw;
    height: 100vh;
    background-color: var(--ui-background-1);
    
    display: flex;
    flex-direction: column;

    main {
      display: grid;
      grid-template-columns: 100%;
      grid-template-areas: 'center';

      @media (min-width: 1200px) {
        grid-template-columns: auto 60% auto;
        grid-template-areas: '. center .';
      }

      .center {
        grid-area: center;
        padding: 1rem;

        @media (min-width: 1200px) {
          padding: 2rem;
        }

        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
</style>
