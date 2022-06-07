import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';
import { createLocalPropOptions } from './utils/createLocalPropOptions.js';

const userLocalPropOptions = createLocalPropOptions('user', {
  propOptions: { type: Object, required: true },
  localName: 'localUser',
});

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  props: {
    ...userLocalPropOptions.props,
  },

  emits: [...userLocalPropOptions.emits],

  data() {
    return {
      ...userLocalPropOptions.data.call(this),
    };
  },

  watch: {
    ...userLocalPropOptions.watch,
  },

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
    </form>`,
});
