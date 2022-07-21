import { defineComponent } from './vendor/vue.esm-browser.js';
import CounterButton from './CounterButton.js';

export default defineComponent({
  name: 'ListItemWithCounterButton',

  components: {
    CounterButton,
  },

  props: {
    name: {
      type: String,
    },
  },

  // Состояние CounterButton не управляется
  template: `<div>Button {{ name }}: <CounterButton /> </div>`,
});
