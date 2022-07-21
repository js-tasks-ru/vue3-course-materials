import { defineComponent } from './vendor/vue.esm-browser.js';
import SubPage from './SubPage.js';

export default defineComponent({
  name: 'IndexPage',

  components: { SubPage },

  template: `<sub-page />`,
});
