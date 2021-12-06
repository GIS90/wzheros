<template>
  <van-nav-bar
      :title="title"
      :left-text="leftText"
      left-arrow
      :fixed="fixed"
      :border="border"
      :z-index="zIndex"
      @click-left="retHeroList()"
      @click-right="retHeroHome()"
    >
      <template #right>
        <van-icon name="wap-home-o" size="18" />
      </template>
    </van-nav-bar>
</template>

<script>
import { NavBar, Icon } from 'vant'
import router from '../../router/index.ts'

export default {
  name: 'HeroListShowDetailNav',
  components: {
    'van-icon': Icon,
    'van-nav-bar': NavBar
  },
  data () {
    return {
      title: '', // 中间文字内容
      leftText: '返回', // 左侧文字内容
      rightText: '', // 右侧文字内容
      fixed: false, // 固定
      border: true, // 是否显示边框
      zIndex: 10
    }
  },
  methods: {
    retHeroList () {
      router.go(-1)
    },
    retHeroHome () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
