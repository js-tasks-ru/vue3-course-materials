import { createStore } from 'vuex';
import { auth } from './modules/auth';

export const store = createStore({
  modules: {
    auth,
  },
});
