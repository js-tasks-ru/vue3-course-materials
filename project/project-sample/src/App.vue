<template>
  <LayoutBase>
    <RouterView>
      <template #default="{ Component }">
        <KeepAlive v-if="Component" :max="3">
          <component :is="Component" />
        </KeepAlive>
      </template>
      <template #fallback>
        <UiAlert>Загрузка...</UiAlert>
      </template>
    </RouterView>
  </LayoutBase>
</template>

<script>
import LayoutBase from './components/LayoutBase.vue';
import UiAlert from './components/UiAlert.vue';
import { httpClient } from './api/httpClient/httpClient.js';

export default {
  name: 'App',

  components: {
    UiAlert,
    LayoutBase,
  },

  setup() {
    // TODO: Установить <title> - "Meetups"

    // TODO: для авторизованных пользователей - запросить новые данные пользователя для актуализации и проверки актуальности

    httpClient.onUnauthenticated(() => {
      // TODO: сессия пользователя больше не валидна - нужна обработка потери авторизации
    });

    httpClient.onNetworkError(() => {
      // TODO: проблема с сетью, стоит вывести тост пользователю
    });

    // TODO: обработка глобальных ошибок - необработанные исключения можно залогировать и вывести тост
    // TODO: глобальные ошибки можно поймать событиями "error" и "unhandledrejection"
  },
};
</script>

<style>
/* Основные глобальные стили - не scoped стили  */
/* app.css */
@import url('./assets/styles/_variables.css');
@import url('./assets/styles/_fonts.css');
@import url('./assets/styles/_common.css');
</style>
