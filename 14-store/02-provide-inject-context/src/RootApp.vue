<template>
  <auth-provider>
    <App />
  </auth-provider>
</template>

<script>
import AuthProvider from './components/AuthProvider.vue';
import App from './App.vue';

export default {
  name: 'RootApp',

  components: { App, AuthProvider },
};
</script>
