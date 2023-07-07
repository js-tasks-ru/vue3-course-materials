import './assets/styles/_input-group.css';
import './assets/styles/_form-group.css';
import './assets/styles/_button.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).mount('#app');
