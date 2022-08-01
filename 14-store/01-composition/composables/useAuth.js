import { ref, readonly, computed } from '../vendor/vue.esm-browser.js';
import { loginWithApi } from '../api.js';

const user = ref(null);

const isAuthenticated = computed(() => !!user.value);

function login(email, password) {
  return loginWithApi(email, password).then((userResponse) => {
    user.value = userResponse;
  });
}

export function useAuth() {
  return {
    user: readonly(user),
    isAuthenticated,
    login,
  };
}
