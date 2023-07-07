import { createApp } from 'vue';
import App from './App.vue';
import { toaster, TOASTER_KEY } from './plugins/toaster/index.js';

createApp(App).provide(TOASTER_KEY, toaster).mount('#app');
