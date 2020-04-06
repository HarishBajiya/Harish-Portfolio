import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from "../components/Home";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../components/Experience')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../components/Education')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
