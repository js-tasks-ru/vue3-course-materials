import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast');
    },

    globalToast() {
      this.$root.toast('Global Toast');
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
      <TheToaster ref="localToaster" />
      <button @click="localToast">Local Toast</button>
      <button @click="globalToast">Global Toast</button>
    </div>`,
});
