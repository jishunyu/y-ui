import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import yButton from '../pages/page-button.vue'
import install from '../pages/page-install.vue'
import input from '../pages/page-input.vue'
import calendar from '../pages/page-calendar.vue'
import lineProgress from '../pages/page-line-progress.vue'
import toast from '../pages/page-toast.vue'
import circularProgress from '../pages/page-circular-progress.vue'
import tabs from '../pages/page-tabs.vue'
import steps from '../pages/page-steps.vue'
import numberBox from '../pages/page-numberBox.vue'
import dropdown from '../pages/page-dropdown.vue'
import noticeBar from '../pages/page-noticeBar.vue'
import loading from '../pages/page-loading.vue'
import loadimg from '../pages/page-loadimg.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'page-install',
    component: install
  },
  {
    path: '/case/button',
    name: 'page-button',
    component: yButton
  },
  {
    path: '/case/input',
    name: 'page-input',
    component: input
  },
  {
    path: '/case/calendar',
    name: 'page-calendar',
    component: calendar
  },
  {
    path: '/case/line-progress',
    name: 'page-line-progress',
    component: lineProgress
  },
  {
    path: '/case/circular-progress',
    name: 'page-circular-progress',
    component: circularProgress
  },
  {
    path: '/case/toast',
    name: 'page-toast',
    component: toast
  },
  {
    path: '/case/tabs',
    name: 'page-tabs',
    component: tabs
  },
  {
    path: '/case/steps',
    name: 'page-steps',
    component: steps
  },
  {
    path: '/case/numberBox',
    name: 'page-numberBox',
    component: numberBox
  },
  {
    path: '/case/dropdown',
    name: 'page-dropdown',
    component: dropdown
  },
  {
    path: '/case/noticeBar',
    name: 'page-noticeBar',
    component: noticeBar
  },
  {
    path: '/case/loading',
    name: 'page-loading',
    component: loading
  },
  {
    path: '/case/loadimg',
    name: 'page-loadimg',
    component: loadimg
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
