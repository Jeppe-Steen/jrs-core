<script setup>
const props = defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: false },
  subTitle: { type: String, required: false },
  clickable: { type: Boolean, required: false }
});
</script>

<template>
    <article class="ui-card" :class="{ 'clickable': props.clickable }">
        <slot name="icon"></slot>
        <div class="ui-card--content">
            <h2>{{ props.title }}</h2>
            <h3 v-if="props.value">{{ props.value }}</h3>
            <p v-if="props.subTitle">{{ props.subTitle }}</p>
        </div>
        <p v-if="props.clickable" class="ui-card--arrow">></p>
    </article>
</template>

<style scoped>
.ui-card {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 20px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1450980392);
  border-radius: 10px;
}
.ui-card--content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ui-card--content h2, .ui-card--content h3 {
  font-size: 1rem;
}
.ui-card--content p {
  font-size: 0.8rem;
}
.ui-card--arrow {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.clickable {
  cursor: pointer;
}
</style>
