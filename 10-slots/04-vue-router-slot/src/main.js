import './assets/styles/_form-group.css';
import './assets/styles/_input-group.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

createApp(App).use(router).mount('#app');
