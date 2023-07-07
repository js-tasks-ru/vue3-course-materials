<template>
  <UiContainer style="padding-top: 48px">
    <UiInput />
  </UiContainer>
</template>

<script>
import UiInput from './components/UiInput.vue';
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
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
