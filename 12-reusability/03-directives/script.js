import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
import { selectOnFocus } from './directives/selectOnFocus.js';

const App = defineComponent({
  directives: {
    selectOnFocus,
  },

  template: `
    <div>
      <input value="Text Value" v-select-on-focus="[1, 4]" />
    </div>`,
});

createApp(App).mount('#app');
// или зарегистрировать глобально
// app.directive('select-on-focus', selectOnFocus);
