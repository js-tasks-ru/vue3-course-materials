import { defineComponent } from './vendor/vue.esm-browser.js';
import { TOASTER_KEY } from './toaster/index.js';

export default defineComponent({
  name: 'SubPage',

  inject: {
    toaster: TOASTER_KEY,
  },

  methods: {
    toast() {
      this.toaster.toast('Toast');
    },
  },

  template: `
    <div class="sub-page">
      <button @click="toast">Toast</button>
    </div>`,
});
