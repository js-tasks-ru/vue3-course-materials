import './assets/styles/_button.css';
import './assets/styles/_form-group.css';
import './assets/styles/_form.css';
import './assets/styles/_input-group.css';
import './assets/styles/_page-auth.css';
import { createApp } from 'vue';
import RootApp from './RootApp.vue';

const app = createApp(RootApp);
app.config.unwrapInjectedRef = true;
app.mount('#app');
