import { createApp } from '../../vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export const ToasterPlugin = {
  install(app, { container }) {
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }

    const toaster = createApp(TheToaster).mount(container);

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
