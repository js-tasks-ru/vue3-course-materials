import { createApp } from 'vue';
import TheToaster from './TheToaster.vue';

export const TOASTER_KEY = Symbol('TOASTER_KEY');

export const toaster = createApp(TheToaster).mount('#toaster');
