import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import yButton from '../pages/page-button.vue'
import install from '../pages/page-install.vue'
import input from '../pages/page-input.vue'
import pageCalendar from '../pages/page-calendar.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'install',
    component: install
  },
  {
    path: '/case/button',
    name: 'button',
    component: yButton
  },
  {
    path: '/case/input',
    name: 'input',
    component: input
  },
  {
    path: '/case/calendar',
    name: 'calendar',
    component: pageCalendar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
