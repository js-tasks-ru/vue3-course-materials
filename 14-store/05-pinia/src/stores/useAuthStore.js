import { defineStore } from 'pinia';
import { loginWithApi } from '../api.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    // or
    // isAuthenticated() {
    //   return !!this.state.user
    // },
  },

  actions: {
    setUser(user) {
      this.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.user = user;
      });
    },
  },
});
