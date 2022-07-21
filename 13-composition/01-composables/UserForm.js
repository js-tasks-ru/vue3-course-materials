import { defineComponent } from './vendor/vue.esm-browser.js';
import { localPropMixin } from './mixins/localPropMixin.js';
import UiInput from './UiInput.js';

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  mixins: [
    localPropMixin('user', {
      propOptions: { type: Object },
      localName: 'localUser',
    }),
  ],

  template: `
    <form>
      <p>FirstName: <ui-input v-model="localUser.firstName" /></p>
      <p>LastName: <ui-input v-model="localUser.lastName" /></p>
      <button>Submit</button>
    </form>`,
});
