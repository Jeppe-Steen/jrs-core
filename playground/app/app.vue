<script setup>
import {useDialog} from '../../src/runtime/composables/useDialog';
const { openDialog , values, closeDialog} = useDialog()

const nav = [
  { label: 'Hjem', to: '/', type: 'link' },
  { label: 'Om os', to: '/', type: 'link' },
  { label: 'Hjælp', type: 'primary', icon: "star" },
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

const stars = {
  name: 'star',
  count: 5,
  size: 20,
  color: '#EFBF04'
}

const testForm1 = ref({
  fullname: '',
  email: ''
})

const testSubmit1 = () => {
  console.log(testForm1.value)
}

</script>

<template>
  <div class="container">
    <UiNavigation extra>
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
            :type="item.type"
            :icon="item.icon"
            @click="item.action?.()"
          />
      </template>
    </UiNavigation>

    <main>
      <div class="center">
        <UiHeader centered>
          <template #subtitle><strong>Velkommen til denne side</strong></template>
          <template #title><h1>Dette er kun til prøvning!</h1></template>
        </UiHeader>  

        <!-- section that shows what cards can do -->
        <div class="cards">
          <UiHeader>
            <template #subtitle><p>Dette er en sektion for card componentet</p></template>
            <template #title><h2>Card section</h2></template>
          </UiHeader>

          <div class="cards--content">
            <UiCard shadow>
              <UiHeader centered>
                <template #subtitle><p>sub title</p></template>
                <template #title><h2>Card title</h2></template>
              </UiHeader>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati omnis blanditiis. In similique ipsum deserunt, distinctio nihil esse beatae fugiat aliquam, architecto modi magnam eum temporibus hic laudantium odio.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nam illo accusamus fugit necessitatibus quas soluta debitis minus omnis sapiente, consectetur, iusto esse, ex officiis qui eligendi nostrum praesentium optio.</p>
            </UiCard>

            <UiCard rounded shadow>
              <UiHeader :icon="stars">
                <template #subtitle><p>sub title</p></template>
                <template #title><h2>Card title</h2></template>
              </UiHeader>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nam illo accusamus fugit necessitatibus quas soluta debitis minus omnis sapiente, consectetur, iusto esse, ex officiis qui eligendi nostrum praesentium optio.</p>
              <UiButton label="Knap" />
            </UiCard>
          </div>
        </div>

        <!-- section that shows forms -->
        <section class="forms">
          <UiHeader>
            <template #subtitle><p>Dette er en sektion til forms</p></template>
            <template #title><h2>Her vises Forms</h2></template>
          </UiHeader>
          <article class="forms--content">
            <UiCard shadow rounded>
              <UiForm @submit="testSubmit1">
                <UiInput name="fullname" placeholder="Fullname" rounded v-model="testForm1.fullname" required/>
                <UiInput placeholder="Email" name="email" rounded required v-model="testForm1.email"/>
                <UiButton label="Log fields" submit icon="check"/>
              </UiForm>
            </UiCard>
          </article>
        </section>

      </div>
    </main>
    <UiDialog />
  </div>
</template>

<style lang="scss" scoped>

  .container {
    width: 100vw;
    min-height: 100vh;
    background-color: var(--ui-background-primary);
    
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

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &--content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  .forms {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &--content {
      display: grid;
      grid-template-columns: 1fr .6fr 1fr;
      gap: 1rem;
    }
  }
</style>
