import { createApp, inject } from 'vue';
import TheToaster from './TheToaster.vue';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export function useToaster() {
  return inject(TOASTER_KEY);
}

export function createToaster({ container } = {}) {
  const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
  const toasterInstance = createApp(TheToaster).mount(container ?? addDefaultContainer());

  const toaster = {
    success: toasterInstance.success,
    error: toasterInstance.error,

    /** @implements {import('@vue/runtime-core').PluginInstallFunction} */
    install(app) {
      app.provide(TOASTER_KEY, toaster);
    },
  };

  return toaster;
}
