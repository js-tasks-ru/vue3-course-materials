<template>
  <div class="app">
    <p>
      <button class="button">
        <ui-text text="Обычная кнопка" />
      </button>
    </p>

    <p>
      <button class="button">
        <ui-text text="Кнопка с ui-text color=green" color="green" />
      </button>
    </p>

    <p>
      UiButton.vue (синяя рамка):
      <ui-button>
        <ui-text text="Текст в ui-text.root.deep в слоте" />
      </ui-button>
    </p>

    <p>
      UiButtonCssScoped.vue (красная рамка)
      <ui-button-css-scoped>
        <ui-text text="Текст в ui-text.root.deep в слоте" />
      </ui-button-css-scoped>
    </p>

    <p>
      UiButtonCssModule.vue (зелёная рамка)
      <ui-button-css-module>
        <ui-text text="Текст в ui-text.root.deep в слоте" />
      </ui-button-css-module>
    </p>
  </div>
</template>

<script>
import UiButton from './UiButton';
import UiText from './UiText';
import UiButtonCssScoped from './UiButtonCssScoped.vue';
import UiButtonCssModule from './UiButtonCssModule.vue';

export default {
  name: 'App',
  components: { UiButtonCssModule, UiButtonCssScoped, UiText, UiButton },
};
</script>

<style></style>
