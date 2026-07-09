<script setup>
import {useDialog} from '../../src/runtime/composables/useDialog';
const { openDialog , values, closeDialog} = useDialog()

const nav = [
  { label: 'Hjem', to: '/', styling: 'primary' },
  { label: 'videre', to: '/', styling: 'secondary' },
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
    <UiNavigation :navItems="nav">
      <template #logo>
        <h2>Heeeey</h2>
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
        <h1>Dette er en test side - hvor man kan teste en masse!</h1>
        <ul>
          <li>
            <span>
              <p><strong>UiDialog:</strong></p>
              <UiButton label="UiDialog - Standard" @click="openDialog(objectForDialog_standard)"/>
              <UiButton label="UiDialog - Input" @click="handleDialog2"/>
            </span>
            <p>{{ changeableText }}</p>
          </li>
          <li>
            <span>
              <p><strong>UiIcon:</strong></p>
              <UiIcon name="plus" />
            </span>
          </li>
        </ul>
        
      </div>
    </main>

    <UiDialog />
  </div>
</template>

<style lang="scss" scoped>

  .container {
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);
    
    display: flex;
    flex-direction: column;

    main {
      display: grid;
      grid-template-columns: auto 60% auto;
      grid-template-areas: '. center .';

      .center {
        grid-area: center;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        ul {
          li {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            span {
              display: flex;
              flex-direction: row;
              gap: 1rem;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
