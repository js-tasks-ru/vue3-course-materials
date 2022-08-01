import { defineStore } from 'pinia';
import { loginWithApi } from '../api.js';
import { computed, inject, readonly, ref } from 'vue';

// Options Api like style

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null,
//   }),
//
//   getters: {
//     isAuthenticated: (state) => !!state.user,
//     // or
//     // isAuthenticated() {
//     //   return !!this.state.user
//     // },
//   },
//
//   actions: {
//     setUser(user) {
//       this.user = user;
//     },
//
//     async login(email, password) {
//       this.user = await loginWithApi(email, password);
//     },
//   },
// });

// Composition Api like style
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  const setUser = (value) => {
    user.value = value;
  };

  const login = async (email, password) => {
    user.value = await loginWithApi(email, password);
  };

  return {
    user: readonly(user),
    isAuthenticated,
    setUser,
    login,
  };
});
