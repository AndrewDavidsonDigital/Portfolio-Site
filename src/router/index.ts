import { createRouter, createWebHistory } from 'vue-router';
import Init from '@views/Init.vue';
import PastWorks from '@views/PastWorks.vue';
import Projects from '@views/Projects.vue';

const redirects = [  
  {
    path: '/landing',
    redirect: {
      name: 'home',
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Init,
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
    ...redirects,
  ]
});


export default router;
