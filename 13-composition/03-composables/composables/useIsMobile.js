import { computed } from '../vendor/vue.esm-browser';

// Пример не-composable
// Это не composable, это не часть компонента, а просто обычное вычисление
// Нет привязки к экземпляру, Vue, реактивности
export function useIsMobile() {
  const mobileUserAgents = /Android|iPhone|iPad/i;

  const checkIfMobile = () => !!navigator.userAgent.match(mobileUserAgents);

  // Не имеет смысла, не реактивно
  const isMobile = computed(() => checkIfMobile());

  return {
    isMobile,
  };
}
