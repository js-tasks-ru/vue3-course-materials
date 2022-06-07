import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';
import { createLocalPropMixin } from './mixins/createLocalPropMixin.js';

const userLocalPropMixin = createLocalPropMixin('user', {
  propOptions: { type: Object },
  localName: 'localUser',
});

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  extends: userLocalPropMixin,

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
    </form>`,
});
