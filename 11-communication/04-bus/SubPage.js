import { defineComponent } from './vendor/vue.esm-browser.js';
import TheToaster from './TheToaster.js';
import { eventBus } from './eventBus.js';

export default defineComponent({
  name: 'SubPage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].toast('Toast');
    },

    eventBusToast() {
      eventBus.emit('toaster:toast', 'Event Bus Toast');
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
      <button @click="eventBusToast">Event Bus Toast</button>
    </div>`,
});
