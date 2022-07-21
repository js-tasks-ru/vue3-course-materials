import { defineComponent } from './vendor/vue.esm-browser.js';
import { modelProxy } from './utils/modelProxy.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  computed: {
    modelValueProxy: modelProxy('modelValue'),
  },

  template: `<input v-model="modelValueProxy" />`,
});
