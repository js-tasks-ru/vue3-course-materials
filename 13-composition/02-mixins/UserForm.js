import { defineComponent } from './vendor/vue.esm-browser.js';
import { createLocalPropOptions } from './utils/createLocalPropOptions.js';
import UiInput from './UiInput.js';

const userLocalPropOptions = createLocalPropOptions('user', 'localUser');

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
      ...userLocalPropOptions.data(),
    };
  },

  watch: {
    ...userLocalPropOptions.watch,
  },

  template: `
    <form>
    <p>FirstName:
      <UiInput v-model="localUser.firstName" />
    </p>
    <p>LastName:
      <UiInput v-model="localUser.lastName" />
    </p>
    <p>
      <button>Submit</button>
    </p>
    </form>`,
});
