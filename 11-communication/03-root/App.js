import { defineComponent } from './vendor/vue.esm-browser.js';
import IndexPage from './IndexPage.js';

export default defineComponent({
  name: 'App',

  components: {
    IndexPage,
  },

  template: `
    <div class="container">
      <index-page />
    </div>
  `,
});
