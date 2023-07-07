import { createApp } from 'vue';
import TheToaster from './TheToaster.vue';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

// Функция создания и инициализации внедряемой сущности
export function createToaster({ container } = {}) {
  // Инициализация тостера
  const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
  const toasterInstance = createApp(TheToaster).mount(container ?? addDefaultContainer());
  // Описываем тостер, как небольшую обёртку над экземпляром компонента
  const toaster = {
    toast: toasterInstance.toast,
    // Добавляем метод установки тостера, как плагина
    install(app) {
      app.provide(TOASTER_KEY, toaster);
    },
  };
  // Возвращаем тостер, который можно как использовать самостоятельно,
  // так и установить как плагин для внедрения в приложения
  return toaster;
}
