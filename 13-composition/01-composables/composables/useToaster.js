import { inject } from '../vendor/vue.esm-browser.js';
import { TOASTER_KEY } from '../plugins/toaster/index.js';

export function useToaster() {
  return inject(TOASTER_KEY);
}
