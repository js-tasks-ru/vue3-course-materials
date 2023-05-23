import { createApp } from 'vue';
import App from './App.vue';
import { ToasterPlugin } from './plugins/toaster/index.js';

createApp(App)
  .use(ToasterPlugin, {
    container: '#toaster',
  })
  .mount('#app');
