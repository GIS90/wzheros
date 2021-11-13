<template>
  <div>
    <!-- app content -->
    <div class="app-content">
      <router-view />
    </div>
    <!-- app bar -->
    <div class="app-bar">
      <van-tabbar v-model="active" :fixed="this.fixed" :border="this.border"
                  :activeColor="this.activeColor" :inactiveColor="this.inactiveColor">
        <van-tabbar-item v-for="item in this.tabBarList" :key="item.id"
                         :icon="item.icon" :badge="item.badge" :to="item.to">
          {{ item.name }}
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'App',
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  },
  data () {
    return {
      active: 0,
      fixed: true,
      border: true,
      activeColor: '#42b983',
      inactiveColor: '#7d7e80',
      isReplace: false,
      tabBarList: [
        { id: 1, icon: 'friends-o', name: '英雄', badge: '', to: '/', active: '', inactive: '' },
        { id: 1, icon: 'home-o', name: '装备', badge: '', to: '/equip', active: '', inactive: '' },
        { id: 1, icon: 'gem-o', name: '召唤', badge: '', to: '/df', active: '', inactive: '' },
        { id: 1, icon: 'setting-o', name: '设置', badge: '5', to: '/set', active: '', inactive: '' }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

.menu {
  margin-top: 10px;
}

.app-content {
  display: block;
}

.app-bar {
  display: block;
  margin-top: 4rem;
}
</style>
