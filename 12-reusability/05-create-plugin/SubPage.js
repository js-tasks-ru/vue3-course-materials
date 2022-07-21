import { defineComponent } from './vendor/vue.esm-browser.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';

export default defineComponent({
  name: 'SubPage',

  inject: {
    toaster: TOASTER_KEY,
  },

  methods: {
    toast() {
      this.toaster.toast('Toast');
      // this.$toast() from mixin
      // this.$toaster.toast() from globalProperties
    },
  },

  template: `
    <div class="sub-page">
      <button @click="toast">Toast</button>
    </div>`,
});
