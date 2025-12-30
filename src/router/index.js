import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cards from '../views/Cards.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cards', component: Cards },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
