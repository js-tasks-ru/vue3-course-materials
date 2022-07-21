import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast');
    },

    instanceToast() {},
  },

  template: `
    <div class="sub-page">
      <the-toaster ref="localToaster" />
      <button @click="localToast">Local Toast</button>
      <button @click="instanceToast">Instance Toast</button>
    </div>`,
});
