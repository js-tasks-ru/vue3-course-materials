import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  components: { TheToaster },

  provide() {
    return {
      toaster: {
        toast: this.toast,
      },
    };
  },

  methods: {
    toast(message) {
      this.$refs['toaster'].toast(message);
    },
  },

  template: `
    <slot />
    <the-toaster ref="toaster" />
  `,
});
