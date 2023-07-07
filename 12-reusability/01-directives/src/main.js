import { createApp } from 'vue';
import App from './App.vue';
// import { selectOnFocus } from './directives/selectOnFocus.js';

createApp(App)
  // При глобальной регистрации директиву можно использовать в любом компоненте приложения
  // .directive('selectOnFocus',selectOnFocus)
  .mount('#app');
