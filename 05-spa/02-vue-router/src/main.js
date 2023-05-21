import './assets/styles/_form-group.css';
import './assets/styles/_input-group.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

// router - устанавливаемый как плагин
// При установке регистрирует компоненты RouterView и RouterLink
// А также внедряет роутер и текущий маршрут через $router, $route и provide/inject
createApp(App).use(router).mount('#app');
