<template>
  <van-sidebar v-model="active" class="sidebar">
    <van-sidebar-item v-for="(item, index) in this.menuList"
                      :key="item.id"
                      :title="item.title"
                      @click="toUrl(item.url, index)"/>
  </van-sidebar>
  <router-view />
</template>

<script>
import { Sidebar, SidebarItem } from 'vant'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'HeroList',
  components: {
    'van-sidebar': Sidebar,
    'van-sidebar-item': SidebarItem
  },
  created () {
    this.router = useRouter()
    const route = useRoute()
    this.route = route
    let flag = false
    console.log(route.params.heroType)
    for (const index in this.menuList) {
      if (route.params.heroType === this.menuList[index].name) {
        this.active = this.menuList[index].id
        flag = true
      }
    }
    if (!flag) {
      this.active = 0
    }
  },
  data () {
    return {
      active: 0,
      route: null,
      router: null,
      menuList: [
        { id: 0, name: 'all', title: '全部', url: '/hero/all' },
        { id: 1, name: 'tank', title: '坦克', url: '/hero/tank' },
        { id: 2, name: 'warrior', title: '战士', url: '/hero/warrior' },
        { id: 3, name: 'assassin', title: '刺客', url: '/hero/assassin' },
        { id: 4, name: 'master', title: '法师', url: '/hero/master' },
        { id: 5, name: 'shooter', title: '射手', url: '/hero/shooter' },
        { id: 6, name: 'auxiliary', title: '辅助', url: '/hero/auxiliary' }
      ]
    }
  },
  methods: {
    toUrl (url, index) {
      console.log(url)
      this.active = index
      this.router.push(url)
    }
  }
}
</script>

<style scoped>
.sidebar {
  float: left;
  /*position:fixed;*/
  /*z-index: 100;*/
}
</style>
