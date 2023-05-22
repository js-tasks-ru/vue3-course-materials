/* Модуль запуска приложения на сервере */

import { renderToString } from 'vue/server-renderer';
import { createVueApp } from './main.js';

// На сервере не монтируем приложение, а рендерим в строчку с сохранением состояния
export async function render() {
  // Создаём Vue приложение
  const { app } = createVueApp();

  // Готовим хранилище состояния
  const initialState = {};
  app.provide('initialState', initialState);

  // Рендерим приложение в строчку
  const appHtml = await renderToString(app);

  // Возвращаем и html приложения, и отдельно данные
  return {
    appHtml,
    initialState,
  };
}
