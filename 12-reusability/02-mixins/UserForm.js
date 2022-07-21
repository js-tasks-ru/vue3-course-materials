import { defineComponent } from './vendor/vue.esm-browser.js';
import { createLocalPropOptions } from './utils/createLocalPropOptions.js';
import UiInput from './UiInput.js';

const userLocalPropOptions = createLocalPropOptions('user', {
  propOptions: { type: Object },
  localName: 'localUser',
});

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  props: {
    ...userLocalPropOptions.props,
  },

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
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
    </form>`,
});
