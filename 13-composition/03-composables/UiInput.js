import { toRefs } from './vendor/vue.esm-browser.js';
import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const modelValueProxy = useModelProxy(modelValue, emit);

    return {
      modelValueProxy,
    };
  },

  template: `<input v-model="modelValueProxy" />`,
});
