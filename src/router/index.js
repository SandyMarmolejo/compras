import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/temporada',
    name: 'Temporada',
    component: () => import('../views/Temporada.vue')
  },
  {
    path: '/atleta/:nombre',
    name: 'Atleta',
    component: () => import('../views/Atleta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
