import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MenuView from '@/views/MenuView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
