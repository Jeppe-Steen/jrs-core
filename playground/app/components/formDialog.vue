<script lang="ts" setup>
    const dialog = useDialog()

    const close = () => {
        dialog.close({
            success: false
        })
    }

    const vals = ref({
        fullname: '',
        email: '',
        password: ''
    })

    const submitForm = () => {
        console.log('values', vals.value)
    }
</script>

<template>
    <UiHeader>
        <template #subtitle>
            <p>Testing this dialog</p>
        </template>
        <template #title>
            <h2>Testing form dialog</h2>
        </template>
    </UiHeader>

    <UiForm @submit="submitForm">
        <UiInput name="fullname" placeholder="Fulde navn" v-model="vals.fullname" required/>
        <UiInput name="email" placeholder="E-mail" type="email" v-model="vals.email" required/>
        <UiInput name="password" placeholder="Kodeord" type="password" v-model="vals.password" required/>
        <UiButton label="Submit" type="cta" submit />
    </UiForm>

    <UiButton label="Close" @click="close" />
</template>