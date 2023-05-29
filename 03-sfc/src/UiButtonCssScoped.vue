<template>
  <button class="button" type="button">
    <UiText class="button__text" text="Text:" />
    <slot />
  </button>
</template>

<script>
import UiText from './UiText.vue';
export default {
  name: 'UiButtonCssScoped',
  components: { UiText },
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4c6bb6;
  text-align: center;
  border: 4px solid #4c6bb6;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  border-color: #b8c5e2;
}

/* Дочерние компоненты также попадают в scope инкапсуляции */
.button__text {
  color: green;
}

/* Не работает на контенте слота, scoped стили не действуют на содержимое вне компонента */
.button .content {
  color: yellow;
}

/* "Протекает" на корневой элемент UiText */
.button .root {
  color: red;
}

/* Не работает, scoped стили не действуют на содержимое вне компонента */
.button .inside {
  color: yellow;
}

/* v-slotted позволяет определять стили элемента в слоте */
.button :slotted(.content) {
  font-style: italic;
}

/* v-deep позволяет определять стили всех потомков */
/* Можно как угодно "чинить" и "ломать" вложенные компоненты и содержимое */
.button ::v-deep(.inside) {
  text-decoration: underline;
}
</style>
