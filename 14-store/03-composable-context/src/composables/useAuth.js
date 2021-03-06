import { ref, readonly, computed, provide, inject } from 'vue';
import { loginWithApi } from '../api.js';

const AUTH_KEY = Symbol('AUTH_KEY');

export function useAuthProvider() {
  const user = ref(null);

  const isAuthenticated = computed(() => !!user.value);

  const setUser = (value) => (user.value = value);

  function login(email, password) {
    return loginWithApi(email, password).then((user) => {
      setUser(user);
    });
  }

  const provided = {
    user: readonly(user),
    isAuthenticated,
    setUser,
    login,
  };

  provide(AUTH_KEY, provided);

  return provided;
}

export function useAuthContext() {
  return inject(AUTH_KEY);
}
