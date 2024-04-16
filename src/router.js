import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectsPage
    },
    {
      path: '/project/:id',
      name: 'projects.show',
      component: ProjectDetailPage
    }
  ]
});

export { router };