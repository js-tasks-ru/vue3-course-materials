import { createApp } from 'vue';
import App from './App.vue';
import { toaster } from './toaster.js';

// Устанавливаем тостер как плагин для внедрения его в приложение
createApp(App).use(toaster).mount('#app');
