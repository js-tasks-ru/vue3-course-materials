import { createApp } from '../../vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export function createToaster({ container } = {}) {
  const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
  const toasterInstance = createApp(TheToaster).mount(container ?? addDefaultContainer());

  const toaster = {
    toast: toasterInstance.toast,
    install(app) {
      app.provide(TOASTER_KEY, toaster);
    },
  };
  return toaster;
}
