<template>
  <div class="app">
    <p>
      <ui-button>Кнопка c JS</ui-button>
    </p>

    <p>
      <ui-button-ts>Кнопка c TS</ui-button-ts>
    </p>
  </div>
</template>

<script>
import UiButton from './UiButton.vue';
import UiButtonTs from './UiButtonTs.vue';

export default {
  name: 'App',
  components: { UiButtonTs, UiButton },
};
</script>

<style></style>
