import { createRouter, createWebHistory } from 'vue-router';
import Init from '@views/Init.vue';
import Main from '@views/Main.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: Init,
    },
    {
      path: '/landing',
      name: 'landing',
      component: Main,
    },
  ]
});

export default router;
