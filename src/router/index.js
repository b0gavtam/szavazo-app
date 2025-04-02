import { createRouter, createWebHistory } from 'vue-router'
import SzavazasView from '../views/SzavazasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SzavazasView,
    },
  ],
})

export default router
