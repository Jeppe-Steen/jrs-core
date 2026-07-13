<script lang="ts" setup>
    const dialog = useDialog()

    const close = () => {
        dialog.close({
            success: false
        })
    }
</script>

<template>
    <UiHeader>
        <template #subtitle>
            <p>Testing this dialog</p>
        </template>
        <template #title>
            <h2>Testing standard dialog</h2>
        </template>
    </UiHeader>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero atque amet qui pariatur, nobis sit impedit nisi quas expedita fugiat! Et ducimus officia doloribus repellendus consequuntur. Molestiae officiis ex assumenda.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero atque amet qui pariatur, nobis sit impedit nisi quas expedita fugiat! Et ducimus officia doloribus repellendus consequuntur. Molestiae officiis ex assumenda.</p>
    <UiButton label="Close" @click="close"/>
</template>