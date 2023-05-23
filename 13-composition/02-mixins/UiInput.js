import { defineComponent } from './vendor/vue.esm-browser.js';
import { createModelProxy } from './utils/createModelProxy.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  computed: {
    modelValueProxy: createModelProxy(),
  },

  template: `<input v-model="modelValueProxy" />`,
});
