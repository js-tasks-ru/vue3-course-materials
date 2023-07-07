import { createApp } from 'vue';
import TheToaster from './TheToaster.vue';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

// Плагин - объект с методом install, который будет вызван при установке через метод приложения use
export const ToasterPlugin = {
  // app - приложение, в котором устанавливается плагин
  // второй аргумент - любые параметры плагины
  install(app, { container } = {}) {
    // Инициализация тостера при установке плагина
    const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
    const toaster = createApp(TheToaster).mount(container ?? addDefaultContainer());

    // Внедрение тостер в приложение, в которое устанавливает плагин

    // Провайдим тостер в приложении - лучший способ передать что-то из плагина в приложение
    app.provide(TOASTER_KEY, toaster);
    // Внедрение тостера в стиле плагина Vue 2
    app.config.globalProperties.$toaster = toaster;
    // Вдруг пригодится монтировать свой тостер
    app.component('TheToaster', TheToaster);
    // Для примера - добавляем метод toast во все компоненты приложения
    app.mixin({
      methods: {
        toast: toaster.toast,
      },
    });
  },
};
