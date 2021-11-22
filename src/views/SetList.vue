<template>
  <h1>个人中心，开发中</h1>
  <div>
    <van-cell title="单元格" is-link value="内容" @click="showDialog()"/>
    <van-dialog v-model:show="show" title="biaoti" show-cancel-button>
      <div>123123123</div>
    </van-dialog>
  </div>
</template>

<script>
import { Dialog, Cell } from 'vant'

export default {
  name: 'SetList',
  inheritAttrs: false,
  data () {
    return {
      show: false
    }
  },
  components: {
    'van-dialog': Dialog.Component,
    'van-cell': Cell
  },
  methods: {
    showDialog () {
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
