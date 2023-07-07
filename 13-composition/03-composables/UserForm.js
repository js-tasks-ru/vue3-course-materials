import { defineComponent, toRefs } from './vendor/vue.esm-browser.js';
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
    const { user } = toRefs(props);
    const localUser = useLocalProp(user, 'user', emit);

    return {
      localUser,
    };
  },

  template: `
    <form>
      <p>FirstName: <UiInput v-model="localUser.firstName" /></p>
      <p>LastName: <UiInput v-model="localUser.lastName" /></p>
      <p><button>Submit</button></p>
    </form>`,
});
