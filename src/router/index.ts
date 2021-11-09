import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HeroList from '../views/HeroList.vue'
import HeroListShow from '../views/HeroListShow.vue'
import HeroListShowDetail from '../views/HeroListShowDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HeroList',
    component: HeroList,
    redirect: '/hero/all',
    children: [
      {
        path: 'hero/:heroType',
        name: 'HeroListShow',
        component: HeroListShow
      }
    ]
  },
  {
    path: '/hero/:heroType/:heroId',
    name: 'HeroListShowDetail',
    component: HeroListShowDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
