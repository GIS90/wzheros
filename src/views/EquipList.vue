<template>
  <h1>装备列表，开发中</h1>
  <van-pull-refresh v-model='this.globalPullRefParams.isLoading'
                    :pulling-text='this.globalPullRefParams.pullingText'
                    :loosing-text='this.globalPullRefParams.loosingText'
                    :loading-text='this.globalPullRefParams.loadingText'
                    :success-text='this.globalPullRefParams.successText'
                    :success-duration='this.globalPullRefParams.tipTime'
                    :animation-duration='this.globalPullRefParams.animationTime'
                    :head-height='this.globalPullRefParams.headHeight'
                    @refresh='onRefresh'
  >
    <p>下拉刷新次数: {{ this.globalPullRefParams.refCount }}</p>
  </van-pull-refresh>
</template>

<script>
import { PullRefresh, Toast } from 'vant'

export default {
  name: 'EquipList',
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
        headHeight: '50'
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
        this.globalPullRefParams.count++
      }, 1000)
    }
  }
}
</script>

<style scoped>
.van-pull-refresh {
  height: calc(100vh - 10px) !important;
  overflow: auto !important;
}
</style>
