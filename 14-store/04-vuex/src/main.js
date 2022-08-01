import './assets/styles/_button.css';
import './assets/styles/_form-group.css';
import './assets/styles/_form.css';
import './assets/styles/_input-group.css';
import './assets/styles/_page-auth.css';
import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';

createApp(App).use(store).mount('#app');
