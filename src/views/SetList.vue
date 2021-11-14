<template>
  <h1>个人中心，开发中</h1>
  <div>
    <van-cell title="单元格" is-link value="内容" @click="showDialog()"/>
  </div>
</template>

<script>
import { Dialog, Cell } from 'vant'

export default {
  name: 'SetList',
  components: {
    // 'van-dialog': Dialog,
    'van-cell': Cell
  },
  data () {
    return {
      show: false,
      title: '123',
      userName: '',
      userPass: ''
    }
  },
  methods: {
    showDialog () {
      this.show = true
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      })
    }
  }
}
</script>

<style scoped>

</style>
