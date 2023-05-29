<template>
  <button :class="$style.button">
    <!-- Классы из $style также можно передавать в другие компоненты явно -->
    <UiTextCssModule text="Text:" :inside-classes="$style.buttonText" />
    <slot />
  </button>
</template>

<script>
import UiTextCssModule from './UiTextCssModule.vue'

export default {
  name: 'UiButtonCssModule',
  components: {UiTextCssModule},
};
</script>

<style module>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4c6bb6;
  text-align: center;
  border: 4px solid #24a37e;
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

/* Класс для изменения стилей другого компонента, ЯВНО переданный в него */
.buttonText {
  text-decoration: underline;
}

/* Не работает, root не класс компонента */
.button .root {
  color: yellow;
}

/* Не работает, inside не класс компонента */
.button .inside {
  color: yellow;
}

/* Работает через global, только, если контент не использует CSS модули */
/* Если использует - больше нет переопределения чужих стилей */
.button :global(.content) {
  font-style: italic;
}
</style>
