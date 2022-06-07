import { defineComponent } from './vendor/vue.esm-browser.js';
import { createModelProxyMixin } from './mixins/createModelProxyMixin.js';

export default defineComponent({
  name: 'UiInput',

  mixins: [createModelProxyMixin()],

  props: ['modelValue'],

  emits: ['update:modelValue'],

  template: `<input v-model="modelValueProxy" />`,
});
