import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { toaster } from './toaster.js';

createApp(App)
  .provide('CONFIG', {
    API_URL: '/api',
  })
  .provide('toasterApp', toaster)
  .mount('#app');
