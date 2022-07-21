import { createApp } from './vendor/vue.esm-browser.js';
import { toaster, TOASTER_KEY } from './toaster/index.js';
import App from './App.js';

createApp(App).provide(TOASTER_KEY, toaster).mount('#app');
