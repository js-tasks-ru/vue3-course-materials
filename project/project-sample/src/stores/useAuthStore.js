import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = (value) => {
    user.value = value;
  };

  // TODO: Добавить метод актуализации данных пользователя с API

  return {
    user,
    isAuthenticated,
    setUser,
  };
});
