import { ref, watch } from '../vendor/vue.esm-browser.js';
import { throttle } from '../utils/throttle.js';

export function throttledRef(source) {
  const throttled = ref(undefined);

  watch(
    source,
    throttle((value) => (throttled.value = value), 1000),
  );

  return throttled;
}
