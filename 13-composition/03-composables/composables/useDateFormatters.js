import { formatAsIsoDate, formatAsLocalDate } from '../utils/dateFormatters.js';

// Пример не-composable
// Это не composable, это не часть компонента, а просто две JS функции
// Нет привязки к экземпляру, Vue, реактивности
export function useDateFormatters() {
  return {
    formatAsLocalDate,
    formatAsIsoDate,
  };
}
