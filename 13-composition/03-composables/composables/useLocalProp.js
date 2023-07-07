import { ref, watch } from '../vendor/vue.esm-browser.js';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Передавать имя параметра не очень красиво
// Но другого варианта нет, нужно знать имя параметра для порождения события
export function useLocalProp(prop, name, emit) {
  const localProp = ref(null);

  watch(
    prop,
    () => {
      if (!deepEqual(prop.value, localProp.value)) {
        localProp.value = deepClone(prop.value);
      }
    },
    { immediate: true, deep: true },
  );

  watch(
    localProp,
    () => {
      emit(`update:${name}`, deepClone(localProp.value));
    },
    { immediate: true, deep: true },
  );

  // Этот composable явно создаёт одно новое значение
  return localProp;
}
