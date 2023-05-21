import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'TheToaster',

  data() {
    return {
      message: null,
    };
  },

  methods: {
    toast(message) {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 2000);
    },
  },

  template: `
    <div class="toaster">
      <div v-if="message !== null" class="toast toast_success">
        <span>
          <slot>{{ message }}</slot>
        </span>
      </div>
    </div>`,
});
