<template>
  <div class="van-side">
    <div class="van-side-bar">
      <van-sidebar v-model="this.isActive">
        <van-sidebar-item v-for="(item, index) in this.menuList"
                          :key="item.id"
                          :title="item.title"
                          :class="{active : this.isActive == index}"
                          @click="toUrl(item.url, index)"/>
      </van-sidebar>
    </div>
    <div class="van-side-content">
      <router-view />
    </div>
  </div>
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
    for (const index in this.menuList) {
      if (route.params.heroType === this.menuList[index].name) {
        this.isActive = this.menuList[index].id
        flag = true
      }
    }
    if (!flag) {
      this.isActive = 0
    }
  },
  data () {
    return {
      isActive: 0,
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
      this.isActive = index
      this.router.push(url)
    }
  }
}
</script>

<style scoped>
.active {
  background-color: #42b983;
  color: red;
}

.van-side {
  display: -webkit-flex;
  display: inline-flex;
}

.van-side-bar {
  position: fixed;
  width: 80px;
  flex-shrink: 0;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
  background-color: #555555;
  box-shadow: 0 8px 12px #ebedf0;
}

.van-side-content {
  margin-left: 80px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
}
</style>
