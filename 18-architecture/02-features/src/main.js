import '@/shared/assets/styles/_form-group.css';
import '@/shared/assets/styles/_input-group.css';
import { createApp } from 'vue';
import App from './app/App';
import { router } from './app/router';

createApp(App).use(router).mount('#app');
