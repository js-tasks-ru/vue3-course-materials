import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast');
    },

    teleportToast() {
      this.$refs['teleportToaster'].toast();
    },
  },

  template: `
    <div class="sub-page">
      <the-toaster ref="localToaster" />
      <teleport to="body">
        <the-toaster ref="teleportToaster">
          Teleported Toast
        </the-toaster>
      </teleport>
      <button @click="localToast">Local Toast</button>
      <button @click="teleportToast">Teleport Toast</button>
    </div>`,
});
