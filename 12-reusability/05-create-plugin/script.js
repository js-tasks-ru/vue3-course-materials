import { createApp } from './vendor/vue.esm-browser.js';
import { ToasterPlugin } from './plugins/toaster/index.js';
import App from './App.js';

createApp(App).use(ToasterPlugin, { container: '#toaster' }).mount('#app');
