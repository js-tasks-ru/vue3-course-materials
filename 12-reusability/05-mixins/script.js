import { createApp } from './vendor/vue.esm-browser.js';
import App from './App.js';
import { toaster } from './toaster.js';
import { dateFormattersMixin } from './mixins/dateFormattersMixin.js';
import { isMobileMixin } from './mixins/isMobileMixin.js'

// Глобальное подключение миксина примешает опции ко ВСЕМ компонентам приложения
createApp(App)
  .mixin(dateFormattersMixin)
  .mixin(isMobileMixin)
  .use(toaster)
  .mount('#app');
