import { createApp } from 'vue';
import App from './App.vue';
import { ToasterPlugin } from './plugins/toaster/index.js';

createApp(App)
  // Устанавливаем плагин, передаём параметры
  .use(ToasterPlugin, {
    container: '#toaster',
  })
  .mount('#app');
