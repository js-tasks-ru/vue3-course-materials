import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  emits: ['update:user'],

  data() {
    return {
      localUser: null,
    };
  },

  watch: {
    user: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (!deepEqual(this.user, this.localUser)) {
          this.localUser = deepClone(newValue);
        }
      },
    },

    localUser: {
      deep: true,
      handler(newValue) {
        this.$emit(`update:user`, deepClone(newValue));
      },
    },
  },

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
    </form>`,
});
