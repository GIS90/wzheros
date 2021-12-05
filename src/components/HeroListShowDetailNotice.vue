<template>
  <van-notice-bar
      :left-icon="leftIcon"
      :scrollable="scroll"
      :mode="mode"
      :deploy="delay"
      :speed="speed"
      :color="color"
      :background="background"
      :text="text"
      @click="click()"
     />
</template>

<script>
import { NoticeBar } from 'vant'
import router from '../router/index.ts'

export default {
  name: 'HeroListShowDetailNotice',
  components: {
    'van-notice-bar': NoticeBar
  },
  data () {
    return {
      leftIcon: 'volume-o', // 图标
      text: '欢迎访问blog：http://pygo2.top/', // 内容
      scroll: true, // 是否滚动效果
      wrap: false, // 多行展示
      mode: 'link', // closeable: 在右侧显示关闭按钮 link: 在右侧显示链接箭头
      color: '#1989fa', // 文字颜色
      background: '#ecf9ff', // 背景颜色
      delay: 1, // 动画延迟时间 (s)
      speed: 60, // 滚动速率 (px/s)
      url: 'http://pygo2.top/'
    }
  },
  watch: {
    mode (newVal, oldVal) {
      if (newVal === 'link') {
        router.push(this.url)
      }
    }
  },
  methods: {
    close () {
      console.log('close notice')
    },
    click () {
      if (this.url.indexOf('http://') > -1) {
        window.location.href = this.url
      } else if (this.url.indexOf('https://') > -1) {
        window.location.href = this.url
      } else {
        window.location.href = 'http://' + this.url
      }
    }
  }
}
</script>

<style scoped>

</style>
