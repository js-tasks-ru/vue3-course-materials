import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  // inject: ['toaster', 'CONFIG'],
  inject: {
    config: {
      from: 'CONFIG',
      default: () => ({
        API_URL: '/api',
      }),
    },

    toaster: {
      from: 'toaster',
      default: () => ({
        toast: (message) => alert(message),
      }),
    },

    toasterApp: 'toasterApp',
  },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast with API ' + this.config.API_URL);
    },

    globalToast() {
      this.toaster.toast('Inject Toast with API ' + this.config.API_URL);
    },
  },

  template: `
    <div class="sub-page">
      <TheToaster ref="localToaster" />
      <button @click="localToast">Local Toast</button>
      <button @click="globalToast">Global Toast</button>
    </div>`,
});
