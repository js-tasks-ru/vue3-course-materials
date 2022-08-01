<template>
  <slot />
</template>

<script>
import { computed } from 'vue';
import { loginWithApi } from '../api.js';

export default {
  name: 'AuthProvider',

  provide() {
    return {
      user: computed(() => this.user),
      isAuthenticated: computed(() => this.isAuthenticated),
      login: this.login,
    };
  },

  data() {
    return {
      user: null,
    };
  },

  computed: {
    isAuthenticated() {
      return !!this.user;
    },
  },

  methods: {
    login(email, password) {
      return loginWithApi(email, password).then((user) => (this.user = user));
    },
  },
};
</script>
