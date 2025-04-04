import { createRouter, createWebHistory } from 'vue-router'
import SzavazasView from '../views/SzavazasView.vue'
import EredmenyView from '@/views/EredmenyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SzavazasView,
    },
    {
      path: '/eredmeny',
      name: 'eredmeny',
      component: EredmenyView,
    },
  ],
})

export default router
