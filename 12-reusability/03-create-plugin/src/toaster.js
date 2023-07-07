import { createToaster } from './plugins/toaster/index.js';

// Создаём тостер
// Его можно импортировать и использовать напрямую где угодно
export const toaster = createToaster({
  container: '#toaster',
});
