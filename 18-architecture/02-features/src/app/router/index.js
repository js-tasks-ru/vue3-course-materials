import { createRouter, createWebHistory } from 'vue-router';
import { meetupsRoutes } from '../../meetups/router/meetupsRoutes';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [],
});

const modulesRoutes = [meetupsRoutes];

for (const routes of modulesRoutes) {
  for (const route of routes) {
    router.addRoute(route);
  }
}
