import { defineComponent } from './vendor/vue.esm-browser.js';
import IndexPage from './IndexPage.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'App',

  components: {
    IndexPage,
    TheToaster,
  },

  expose: ['toast'],

  methods: {
    toast(message) {
      this.$refs['toaster'].toast(message);
    },
  },

  template: `
    <div class="container">
      <IndexPage />
    </div>
    <TheToaster ref="toaster" />
  `,
});
