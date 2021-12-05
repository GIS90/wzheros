import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HeroList from '../views/HeroList.vue'
import HeroListShow from '../views/HeroListShow.vue'
import HeroListShowDetail from '../views/HeroListShowDetail.vue'
import EquipList from '../views/EquipList.vue'
import DFList from '../views/DFList.vue'
import UserList from '../views/UserList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HeroList',
    component: HeroList,
    redirect: '/hero/all',
    meta: { title: '首页', icon: 'documentation' },
    children: [
      {
        path: 'hero/:heroType',
        name: 'HeroListShow',
        component: HeroListShow
      }
    ],
    beforeEnter: (to, from) => {
      //
    }
  },
  {
    path: '/hero/:heroType/:heroId',
    name: 'HeroListShowDetail',
    component: HeroListShowDetail
  },
  {
    path: '/equip',
    name: 'EquipList',
    component: EquipList
  },
  {
    path: '/df',
    name: 'DFList',
    component: DFList
  },
  {
    path: '/user',
    name: 'UserList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
