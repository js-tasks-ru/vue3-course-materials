import { onBeforeUnmount, onMounted, ref } from '../vendor/vue.esm-browser.js';

export function useResizeObserver(container) {
  const width = ref(undefined);
  const height = ref(undefined);

  // Реактивность не нужна, просто внутренняя переменная
  let observer = null;

  onMounted(() => {
    observer = new ResizeObserver(() => {
      width.value = container.value.clientWidth;
      height.value = container.value.clientHeight;
    });
    observer.observe(container.value);
  });

  onBeforeUnmount(() => {
    observer.unobserve(container.value);
  });

  return {
    width,
    height,
  };
}
