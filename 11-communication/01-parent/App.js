import { defineComponent } from './vendor/vue.esm-browser.js';
import Parent from './Parent.js';

export default defineComponent({
  name: 'App',

  components: {
    Parent,
  },

  template: `<Parent />`,
});
