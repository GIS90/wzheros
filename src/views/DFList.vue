<template>
  <h1>召唤师技能，开发中</h1>
  <van-pull-refresh v-model="this.globalPullRefParams.isLoading"
                    :head-height="this.globalPullRefParams.headHeight"
                    @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="https://img.yzcdn.cn/vant/doge.png"
        :style="{ transform: `scale(${props.distance / 80})` }"
      />
    </template>

    <!-- 释放提示 -->
    <template #loosing>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
    </template>
    <p>可以尝试下拉刷新，有意想不到的惊喜</p>
  </van-pull-refresh>
</template>

<script>
import { PullRefresh, Toast } from 'vant'

export default {
  name: 'DFList',
  data () {
    return {
      globalPullRefParams: {
        count: 0,
        isLoading: true,
        pullingText: '下拉即可刷新...',
        loosingText: '释放即可刷新...',
        loadingText: '加载中...',
        successText: '刷新成功',
        tipTime: '1000',
        animationTime: '1500',
        headHeight: '80'
      }
    }
  },
  components: {
    'van-pull-refresh': PullRefresh
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.globalPullRefParams.isLoading = false
      }, 1200)
    }
  }
}
</script>

<style scoped>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
.van-pull-refresh {
  height: calc(100vh - 10px) !important;
  overflow: auto !important;
}
</style>
