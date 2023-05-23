<template>
  <div class="page-auth">
    <page-login v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import PageLogin from './components/PageLogin.vue';

export default {
  name: 'App',

  components: {
    PageLogin,
  },

  setup() {
    const user = null;
    const isAuthenticated = false;

    return {
      user,
      isAuthenticated,
    };
  },
};
</script>

<style>
@import '@/assets/styles/_fonts.css';
@import '@/assets/styles/_variables.css';
@import '@/assets/styles/_common.css';
</style>
