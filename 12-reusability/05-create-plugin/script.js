import { createApp } from './vendor/vue.esm-browser.js';
import { createToaster } from './plugins/toaster/index.js';
import App from './App.js';
import { toaster } from './toaster.js';

const toaster = createToaster({
  container: '#toaster',
});

createApp(App).use(toaster).mount('#app');
