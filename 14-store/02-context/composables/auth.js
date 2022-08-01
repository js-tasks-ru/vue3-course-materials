import { ref, readonly, computed, provide, inject } from '../vendor/vue.esm-browser.js';
import { loginWithApi } from '../api.js';

const AUTH_KEY = Symbol('AUTH_KEY');

export function useAuthProvider() {
  const user = ref(null);

  const isAuthenticated = computed(() => !!user.value);

  function login(email, password) {
    return loginWithApi(email, password).then((userResponse) => {
      user.value = userResponse;
    });
  }

  provide(AUTH_KEY, {
    user: readonly(user),
    isAuthenticated,
    login,
  });
}

export function useAuthContext() {
  return inject(AUTH_KEY);
}
