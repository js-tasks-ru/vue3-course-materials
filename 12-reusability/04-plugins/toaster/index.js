import { createApp } from '../vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export const toaster = createApp(TheToaster).mount('#toaster');
