import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  methods: {
    handleFocus($event) {
      $event.currentTarget.setSelectionRange(0, -1);
    },
  },

  template: `
    <div>
      <input value="Text Value" @focus="handleFocus" />
    </div>`,
});

createApp(App).mount('#app');
