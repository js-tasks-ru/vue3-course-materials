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
      handler() {
        if (!deepEqual(this.user, this.localUser)) {
          this.localUser = deepClone(this.user);
        }
      },
    },

    localUser: {
      deep: true,
      handler() {
        this.$emit(`update:user`, deepClone(this.localUser));
      },
    },
  },

  template: `
    <form>
      <p>FirstName: <UiInput v-model="localUser.firstName" /></p>
      <p>LastName: <UiInput v-model="localUser.lastName" /></p>
      <p><button>Submit</button></p>
    </form>`,
});
