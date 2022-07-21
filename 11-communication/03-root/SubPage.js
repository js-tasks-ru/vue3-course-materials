import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast');
    },

    rootToast() {
      this.$root.toast('Root Toast');
    },
  },

  template: `
    <div style="position: relative;
        border: 1px solid;
        background: #efefef;
        padding: 15px;
        width: 500px;
        height: 500px;"
    >
      <the-toaster ref="localToaster" />
      <button @click="localToast">Local Toast</button>
      <button @click="rootToast">Root Toast</button>
    </div>`,
});
