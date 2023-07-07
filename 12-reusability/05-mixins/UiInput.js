import { defineComponent } from './vendor/vue.esm-browser.js';
import { modelProxyMixin } from './mixins/modelProxyMixin.js';

export default defineComponent({
  name: 'UiInput',

  // Локальное подключение миксинов
  mixins: [modelProxyMixin],

  props: ['modelValue'],

  emits: ['update:modelValue'],

  template: `<input v-model="modelValueProxy" />`,
});
