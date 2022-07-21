import { defineComponent } from './vendor/vue.esm-browser.js';
import { modelProxyMixin } from './mixins/modelProxyMixin.js';

export default defineComponent({
  name: 'UiInput',

  mixins: [modelProxyMixin('modelValue')],

  props: ['modelValue'],

  emits: ['update:modelValue'],

  template: `<input v-model="modelValueProxy" />`,
});
