import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { dateFormattersMixin } from './mixins/dateFormattersMixin.js';

createApp(App).mixin(dateFormattersMixin).mount('#app');
