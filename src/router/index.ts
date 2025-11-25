import HomeView from '@/views/HomeView.vue'
import ResolutionView from '@/views/ResolutionView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resolutions',
      name: 'resolutions',
      component: ResolutionView,
    },
  ],
})

export default router
