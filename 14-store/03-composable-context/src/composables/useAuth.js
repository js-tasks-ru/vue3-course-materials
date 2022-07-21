import { computed, readonly, ref } from 'vue';
import { loginWithApi } from '../api.js';

const user = ref(null);

const isAuthenticated = computed(() => !!user.value);

const setUser = (newUser) => (user.value = newUser);

function login(email, password) {
  return loginWithApi(email, password).then((userResponse) => {
    setUser(userResponse);
  });
}

export function useAuth() {
  return {
    user: readonly(user),
    setUser,
    isAuthenticated,
    login,
  };
}
