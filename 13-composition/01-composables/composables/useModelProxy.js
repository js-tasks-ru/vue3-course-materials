import { computed } from '../vendor/vue.esm-browser.js';

export function useModelProxy(modelValue, emit) {
  const modelProxy = computed({
    get() {
      return modelValue.value;
    },

    set(value) {
      emit('update:modelValue', value);
    },
  });
  return { modelProxy };
}
