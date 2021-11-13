<template>
  <div class="van-side">
    <div class="van-side-bar">
      <van-sidebar v-model="this.isMenuActive">
        <van-sidebar-item v-for="(item, index) in this.menuList"
                          :key="item.id"
                          :title="item.title"
                          :class="{active : this.isMenuActive == index}"
                          @click="this.toUrl(item.url, index)"/>
      </van-sidebar>
    </div>
    <div class="van-side-content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import packages
import { Sidebar, SidebarItem } from 'vant'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'HeroList',
  components: {
    'van-sidebar': Sidebar,
    'van-sidebar-item': SidebarItem
  },
  created () {
    this.initData()
    this.router = useRouter()
    const route = useRoute()
    this.route = route
    let flag = false
    // initialize select menu by url heroType parameter
    for (const index in this.menuList) {
      if (route.params.heroType === this.menuList[index].name) {
        this.isMenuActive = this.menuList[index].id
        flag = true
      }
    }
    if (!flag) {
      this.isMenuActive = 0
    }
  },
  data () {
    return {
      isMenuActive: 0,
      route: null,
      router: null,
      menuList: []
    }
  },
  methods: {
    initData () {
      this.menuList = [
        { id: 0, name: 'all', title: '全部', url: '/hero/all' },
        { id: 1, name: 'tank', title: '坦克', url: '/hero/tank' },
        { id: 2, name: 'warrior', title: '战士', url: '/hero/warrior' },
        { id: 3, name: 'assassin', title: '刺客', url: '/hero/assassin' },
        { id: 4, name: 'master', title: '法师', url: '/hero/master' },
        { id: 5, name: 'shooter', title: '射手', url: '/hero/shooter' },
        { id: 6, name: 'auxiliary', title: '辅助', url: '/hero/auxiliary' }
      ]
    },
    toUrl (url, index) {
      this.isMenuActive = index
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
  /*overflow-y: scroll;*/
  background-color: #555555;
  box-shadow: 0 8px 12px #ebedf0;
}

.van-side-content {
  margin-left: 80px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
}
</style>
