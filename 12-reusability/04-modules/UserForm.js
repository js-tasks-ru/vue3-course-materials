import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';
import { createLocalPropOptions } from './utils/createLocalPropOptions.js'

const localPropOptions = createLocalPropOptions('user', 'localUser')

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

  // Крайне неудобно использовать
  // Какие опции надо использовать?
  // Что делать, если в будущем потребуется больше свойств?

  data() {
    return {
      ...localPropOptions.data(),
    };
  },

  watch: {
    ...localPropOptions.watch,
  },

  template: `
    <form>
      <p>FirstName: <UiInput v-model="localUser.firstName" /></p>
      <p>LastName: <UiInput v-model="localUser.lastName" /></p>
      <p><button>Submit</button></p>
    </form>`,
});
