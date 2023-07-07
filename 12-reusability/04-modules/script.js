import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { toaster } from './toaster.js';

createApp(App).use(toaster).mount('#app');
