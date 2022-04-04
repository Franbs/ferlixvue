import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    /*{
      path: '/movie/:id',
      name: '',
      component: () => import('../views/MovieView.vue')
    },*/
    {
      path: '/logout',
      name: '',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/register',
      name: '',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
