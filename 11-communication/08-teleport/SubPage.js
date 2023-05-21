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
      this.$refs['teleportToaster'].toast();
    },
  },

  template: `
    <div class="sub-page">
      <TheToaster ref="localToaster" />
      <Teleport to="body">
        <TheToaster ref="teleportToaster" />
      </Teleport>
      <button @click="localToast">Local Toast</button>
      <button @click="globalToast">Global Toast</button>
    </div>`,
});
