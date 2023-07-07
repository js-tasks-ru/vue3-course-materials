import { defineComponent } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';
import { createLocalPropMixin } from './mixins/createLocalPropMixin.js';

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  // Описываем компонент, как основанный на миксине
  // Работает аналогично mixins с одним миксином, но с другой семантикой
  extends: createLocalPropMixin('user', 'localUser'),

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  emits: ['update:user'],

  // Все свойства примешиваются к компоненту сами
  // Но мы не видим, что добавляет миксин, и от каких свойств он зависит
  template: `
    <form>
      <p>FirstName: <UiInput v-model="localUser.firstName" /></p>
      <p>LastName: <UiInput v-model="localUser.lastName" /></p>
      <p><button>Submit</button></p>
    </form>`,
});
