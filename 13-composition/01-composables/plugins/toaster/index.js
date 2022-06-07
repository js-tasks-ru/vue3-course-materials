import { createApp, inject } from '../../vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export function useToaster() {
  return inject(TOASTER_KEY);
}

export function createToaster({ container } = {}) {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  const toasterInstance = createApp(TheToaster).mount(container);

  const toaster = {
    toast(message) {
      toasterInstance.toast(message);
    },

    install(app) {
      app.provide(TOASTER_KEY, toaster);
      // Для простой миграции с Vue 2
      app.config.globalProperties.$toaster = toaster;
      // Вдруг пригодится монтировать свой тостер
      app.component('TheToaster', TheToaster);
      // Для примера
      app.mixin({
        methods: {
          $toast: toaster.toast,
        },
      });
    },
  };

  return toaster;
}
