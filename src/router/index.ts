import { createRouter, createWebHistory } from 'vue-router';
import Init from '@views/Init.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: Init,
    },
  ]
});

export default router;
