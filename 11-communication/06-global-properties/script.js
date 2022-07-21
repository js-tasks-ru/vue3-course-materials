import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { toaster } from './toaster.js';

const app = createApp(App);

app.config.globalProperties.$toaster = toaster;

app.mount('#app');
