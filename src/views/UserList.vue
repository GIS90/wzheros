<template>
  <!-- 4个url图标跳转 -->
  <div>
    <img class="user-poster" src="http://pygo2.top/images/article_github.jpg">
    <van-row class="user-links"
             :justify="this.rowParams.justify"
             :align="this.rowParams.align">
      <van-col :span="this.colParams.span"
               v-for="(item, index) in this.urlList"
               :key="index"
               @click="toUrl(item.url)">
        <van-icon :name="item.icon" :size="this.colParams.iconSize"/>
        {{ item.text }}
      </van-col>
    </van-row>
  </div>
  <!-- 我的菜单 -->
  <div>
    <van-cell-group :inset="this.cellParams.inset" :border="this.cellParams.border">
      <van-cell icon="points" title="我的积分" :size="this.cellParams.size" is-link @click="openMenuDeve()"/>
      <van-cell icon="send-gift-o" title="我的收藏" :size="this.cellParams.size" is-link @click="openMenuDeve()"/>
      <van-cell icon="gold-coin-o" title="我的优惠券" :size="this.cellParams.size" is-link @click="openMenuDeve()"/>
      <van-cell icon="gift-o" title="版本信息" :size="this.cellParams.size" is-link @click="openMenuVersion()"/>
    </van-cell-group>
  </div>

  <!-- 我的菜单-版本信息 -->
  <div v-show="this.menuVerShow">
    <user-list-menu-version :show="this.menuVerShow"
                            @close-version="closeMenuVersion()">
    </user-list-menu-version>
  </div>
  <!-- 我的菜单-开发中 -->
  <div v-show="this.menuDeveShow">
    <user-list-menu-deve :show="this.menuDeveShow"
                         @close-deve="closeMenuDeve()">
    </user-list-menu-deve>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant'
import UserListMenuVersion from '../components/User/UserListMenuVersion'
import UserListMenuDeve from '../components/User/UserListMenuDeve'

export default {
  name: 'UserList',
  inheritAttrs: false,
  components: {
    'van-row': Row,
    'van-col': Col,
    'van-icon': Icon,
    'van-cell': Cell,
    'van-cell-group': CellGroup,
    'user-list-menu-version': UserListMenuVersion,
    'user-list-menu-deve': UserListMenuDeve
  },
  data () {
    return {
      rowParams: {
        justify: 'center', // end center space-around space-between
        align: 'center' // top center bottom
      },
      colParams: {
        iconSize: '1rem',
        span: 6
      },
      cellParams: {
        inset: false,
        border: true,
        size: 'large', // large normal
        isLink: true,
        isLinkDir: 'right' // top left down right(default, value is null)
      },
      urlList: [
        { text: 'Blog', icon: 'newspaper-o', url: 'http://pygo2.top' },
        { text: 'Github', icon: 'bookmark', url: 'https://github.com/GIS90' },
        { text: 'OsChina', icon: 'guide-o', url: 'href="https://my.oschina.net/u/2259452' },
        { text: 'Weibo', icon: 'map-marked', url: 'https://weibo.com/u/1989571513/home' }
      ],
      menuVerShow: false,
      menuDeveShow: false
    }
  },
  methods: {
    toUrl (url) {
      if (url.indexOf('http://') > -1) {
        window.location.href = url
      } else if (url.indexOf('https://') > -1) {
        window.location.href = url
      } else {
        window.location.href = 'http://' + url
      }
    },
    openMenuVersion () {
      this.menuVerShow = true
    },
    closeMenuVersion () {
      this.menuVerShow = false
    },
    openMenuDeve () {
      this.menuDeveShow = true
    },
    closeMenuDeve () {
      this.menuDeveShow = false
    }
  }
}
</script>

<style scoped>
.user-poster {
  width: 100%;
  height: 53vw;
  display: block;
}
.user-group {
  margin-bottom: 15px;
}
.user-links {
  margin: 1rem 0.3rem 1rem 0.3rem;
  font-size: 0.9rem;
  text-align: center;
  background-color: #fff;
}
van-icon {
  display: block;
  font-size: 24px;
}
</style>
