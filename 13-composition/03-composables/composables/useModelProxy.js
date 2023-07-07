import { computed } from '../vendor/vue.esm-browser.js';

export function useModelProxy(modelValue, emit) {
  return computed({
    get() {
      return modelValue.value;
    },

    set(value) {
      emit('update:modelValue', value);
    },
  });
}
