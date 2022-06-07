import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';
import { useLocalProp } from './composables/useLocalProp.js';

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  emits: [`update:user`],

  setup(props, { emit }) {
    const { localProp: localUser } = useLocalProp(props, 'user', emit);
    return {
      localUser,
    };
  },

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
      <button>Submit</button>
    </form>`,
});
