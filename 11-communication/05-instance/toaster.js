import { createApp } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export const toaster = createApp(TheToaster).mount('#toaster');
