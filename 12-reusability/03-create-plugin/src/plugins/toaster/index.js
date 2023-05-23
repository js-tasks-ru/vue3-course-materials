import { createApp } from 'vue';
import TheToaster from './TheToaster.vue';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export const ToasterPlugin = {
  install(app, { container } = {}) {
    const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
    const toaster = createApp(TheToaster).mount(container ?? addDefaultContainer());

    app.provide(TOASTER_KEY, toaster);
  },
};
