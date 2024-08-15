import { createRouter, createWebHistory } from 'vue-router';
import Init from '@views/Init.vue';
import Landing from '@views/landing.vue';
import PastWorks from '@views/PastWorks.vue';
import Projects from '@views/Projects.vue';

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
      component: Landing,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/pastworks',
      name: 'pastworks',
      component: PastWorks,
    },
  ]
});

export default router;
