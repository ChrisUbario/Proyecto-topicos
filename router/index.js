import { createRouter, createWebHistory } from 'vue-router'
import Session0 from '../components/Session1.vue'
import Home from './Home.vue'

const routes = [
  {
    path: '/session',
    name: 'sesion',
    component: Session0
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
