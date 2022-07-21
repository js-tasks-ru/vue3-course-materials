import IndexPage from './IndexPage.js';
import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'App',

  components: {
    IndexPage,
  },

  template: `
    <div class="container">
      <index-page />
    </div>`,
});
