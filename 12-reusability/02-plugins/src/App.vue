<template>
  <div class="container">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './IndexPage.vue';

export default {
  name: 'App',

  components: {
    IndexPage,
  },
};
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';

@import './assets/styles/_container.css';
</style>
