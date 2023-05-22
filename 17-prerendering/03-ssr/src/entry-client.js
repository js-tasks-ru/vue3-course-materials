/* Модуль запуска приложения в браузере */

import { createVueApp } from './main.js';

// На клиенте состояние либо восстанавливаем после SSR, либо его нет.
const initialState = window.INITIAL_STATE || {};

// Создаём Vue приложение
const { app } = createVueApp();
// и монтируем, как обычно, но с включенной гидрацией
app.provide('initialState', initialState).mount('#app', true);
