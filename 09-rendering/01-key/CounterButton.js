import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  data() {
    return {
      count: 0,
    };
  },

  template: `<button @click="count += 1">{{ count }}</button>`,
});
