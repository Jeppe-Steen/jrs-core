<script setup lang="ts">
    import { useDialog } from '../composables/useDialog'

    import { UiButton, UiInput } from '#components'

    const {
        isOpen,
        content,
        values,
        closeDialog,
    } = useDialog()

    const componentMap = {
        input: UiInput,
        button: UiButton
    }
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="ui-dialog-wrapper" @click="closeDialog('close')">
            <section class="ui-dialog" @click.stop>
                <header>
                    <h2>{{ content.title }}</h2>
                </header>

                <div>
                    <p>{{ content.message }}</p>
                </div>

                <component
                    v-for="field in content.fields"
                    :key="field.key"
                    :is="componentMap[field.type]"
                    :modelValue="values[field.key]"
                    @update:modelValue="(inputValue: any) => values[field.key] = inputValue"
                    v-bind="field.props"
                />

                <footer>
                    <UiButton
                        v-for="action in content.actions"
                        :key="action.label"
                        :label="action.label"
                        :styling="action.styling"
                        @click="closeDialog(action.value)"
                    />
                </footer>
            </section>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
    .ui-dialog-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(2px);

        display: flex;
        align-items: center;
        justify-content: center;

        .ui-dialog {
            width: 500px;
            height: fit-content;
            background-color: #e9e9e9;
            box-shadow: 5px 5px 10px #6e6e6e47;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: var(--ui-text-1);
            border-radius: 20px;

            footer {
                display: grid;
                grid-template-columns: 1fr ;
                gap: .5rem;
            }
        }
    }
</style>