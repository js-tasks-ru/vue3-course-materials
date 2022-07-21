<template>
  <ui-container style="padding-top: 48px">
    <ui-input />
  </ui-container>
</template>

<script>
import UiInput from './components/UiInput';
import UiContainer from './components/UiContainer.vue';

export default {
  name: 'App',

  components: {
    UiContainer,
    UiInput,
  },
};
</script>

<style>
@import '~@/assets/styles/_fonts.css';
@import '~@/assets/styles/_variables.css';
@import '~@/assets/styles/_common.css';
</style>
