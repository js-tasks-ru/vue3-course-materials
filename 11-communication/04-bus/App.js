import { defineComponent } from './vendor/vue.esm-browser.js';
import IndexPage from './IndexPage.js';
import TheToaster from './TheToaster.js';
import { eventBus } from './eventBus.js';

export default defineComponent({
  name: 'App',

  components: {
    IndexPage,
    TheToaster,
  },

  mounted() {
    eventBus.on('toaster:toast', (message) => {
      this.toast(message);
    });
  },

  methods: {
    toast(message) {
      this.$refs['toaster'].toast(message);
    },
  },

  template: `
    <div class="container">
      <index-page />
    </div>
    <the-toaster ref="toaster" />
  `,
});
