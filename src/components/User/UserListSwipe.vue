<template>
  <van-swipe :initial-swipe="this.swipeParams.index"
             :autoplay="this.swipeParams.autoplay"
             :loop="this.swipeParams.loop"
             :show-indicators="this.swipeParams.indicators"
             :indicator-color="this.swipeParams.indicatorColor"
             :lazy-render="this.swipeParams.lazy"
             :touchable="this.swipeParams.touchable"
             :duration="this.swipeParams.duration"
             @change="onChange">
    <van-swipe-item v-for="(item, index) in imageList" :key="index">
      <img class="user-poster" :src="item.url" />
    </van-swipe-item>
  </van-swipe>
  <van-notify v-model:show="this.notParams.show"
              :color="this.notParams.color"
              :type="this.imageList[this.current_image_index].type">
    <van-icon :name="this.imageList[this.current_image_index].icon"
              class="not-icon" />
    <span> {{ this.imageList[this.current_image_index].desc }}</span>
  </van-notify>
</template>

<script>
import { Swipe, SwipeItem, Notify, Icon } from 'vant'

export default {
  name: 'UserListSwipe',
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-notify': Notify.Component,
    'van-icon': Icon
  },
  data () {
    return {
      current_image_index: 0,
      swipeParams: {
        autoplay: 2400, // 自动轮播间隔，单位为 ms
        duration: 800, // 动画时长，单位为 ms，默认500
        index: 0, // 初始位置索引值，默认0
        loop: true, // 是否开启循环播放，默认true
        indicators: true, // 是否显示指示器，默认true
        indicatorColor: 'red', // 指示器颜色，默认#1989fa
        touchable: true, // 是否可以通过手势滑动，默认true
        lazy: true
      },
      notParams: {
        show: true,
        duration: 1200, // 动画时长，单位为 ms
        color: 'white', // 字体颜色，默认
        background: 'black' // 背景颜色，默认
      },
      imageList: [
        { name: 'python', url: 'http://pygo2.top/images/article_python_system.jpeg', icon: 'bell', type: 'primary', desc: '人生苦短，我用Pyhton' },
        { name: 'vue', url: 'http://pygo2.top/images/article_vue.jpeg', icon: 'hot', type: 'success', desc: 'VUE前端框架最好的入门选择' },
        { name: 'linux', url: 'http://pygo2.top/images/article_linux_yun.jpg', icon: 'good-job', type: 'danger', desc: 'Linux应用部署运行的最佳载体' },
        { name: 'postgresql', url: 'http://pygo2.top/images/postgresql.jpg', icon: 'youzan-shield', type: 'warning', desc: 'Postgresql后台数据的护盾' },
        { name: 'nginx', url: 'http://pygo2.top/images/article_nginx.jpg', icon: 'lock', type: 'success', desc: 'Nginx配置访问的规则' },
        { name: 'github', url: 'http://pygo2.top/images/article_github.jpg', icon: 'wap-home', type: 'danger', desc: 'Github代码管理的最佳工具' }
      ]
    }
  },
  methods: {
    onChange (index) {
      // 当前swipe位置
      this.current_image_index = index
      // notify展示
      this.notParams.show = true
      setTimeout(() => {
        this.notParams.show = false
      }, this.notParams.duration)
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
.not-icon {
  margin-right: 4px;
}
</style>
