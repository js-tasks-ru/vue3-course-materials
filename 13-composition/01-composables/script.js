import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { createToaster } from './plugins/toaster/index.js';

const toaster = createToaster();

createApp(App).use(toaster).mount('#app');
