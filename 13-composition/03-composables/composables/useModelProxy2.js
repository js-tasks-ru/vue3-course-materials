import { computed, getCurrentInstance, toRef } from '../vendor/vue.esm-browser.js';

export function useModelProxy() {
  // Используя внутреннюю функцию, можно добраться до пропсов и emit
  // Обычно так делать не рекомендуется, это "хак"
  // Но удобно для часто используемых composable-ов

  const modelValue = toRef(getCurrentInstance().props, 'modelValue');
  const emit = getCurrentInstance().emit;

  return computed({
    get() {
      return modelValue.value;
    },

    set(value) {
      emit('update:modelValue', value);
    },
  });
}
