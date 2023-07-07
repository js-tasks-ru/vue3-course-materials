import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit(`update:modelValue`, value);
      },
    },
  },

  template: `<input v-model="modelValueProxy" />`,
});
