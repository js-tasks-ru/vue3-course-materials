<template>
  <button class="button" type="button">
    <ui-text text="ChildUiText" />
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
  border: 4px solid #db3851;
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

/* Не работает на тексте, переданного через слот, scoped стили не действуют на содержимое слотов */
/* Но работает на UiText в этом компоненте с текстом ChildUiText */
.button .root {
  color: green;
}

/* Не работает, scoped стили не действуют на содержимое других компонентов */
.button .deep {
  color: green;
}

/* v-slotted позволяет определять стили элемента в слоте */
.button ::v-slotted(.root) {
  color: red;
}

/* v-deep позволяет определять стили всех потомков */
.button ::v-deep(.deep) {
  text-decoration: underline;
}
</style>
