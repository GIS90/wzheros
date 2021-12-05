<template>
  <van-dialog :show="show"
              :title="this.compParams.title"
              :show-cancel-button="this.compParams.showCancelButton"
              :show-confirm-button="this.compParams.showConfirmButton"
              :theme="this.compParams.theme"
              :overlay="this.compParams.overlay"
              :close-on-popstate="this.compParams.closeOnPopstate"
              :close-on-click-overlay="this.compParams.closeOnOverlay"
              @close="close()">
    <div class="ver">
      <div class="ver-title">
        版本信息
      </div>
      <div class="ver-content">
        <div><span>系统名称：</span>王者宝典</div>
        <div><span>版本号：</span>V1.0.0</div>
        <div><span>开发者：</span>Pygo</div>
        <div><span>联系邮箱：</span>gaoming971366@163.com</div>
      </div>
    </div>
  </van-dialog>
</template>

<script>
import { Dialog } from 'vant'

export default {
  name: 'UserListMenuVersion',
  emits: ['close-version'],
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator (value) {
        return [true, false].includes(value)
      }
    }
  },
  components: {
    'van-dialog': Dialog.Component
  },
  data () {
    return {
      compParams: {
        title: '', // Dialog标题
        width: '320px', // 单位px，默认320
        message: '', // 文本内容，支持通过 \n 换行
        messageAlign: '', // left center right
        theme: 'default', // 样式风格，可选值为 round-button default
        showConfirmButton: false, // 是否展示确认按钮，默认true
        confirmButtonText: '确认', // 确认按钮文案，默认确认
        confirmButtonColor: '#ee0a24', // 确认按钮颜色，默认#ee0a24
        showCancelButton: false, // 是否展示取消按钮，默认true
        cancelButtonText: '取消', // 确认按钮文案，默认确认
        cancelButtonColor: 'black', // 确认按钮颜色，默认black
        overlay: true, // 是否展示遮罩层，默认true
        closeOnPopstate: true, // 是否在页面回退时自动关闭，默认true
        closeOnOverlay: true, // 是否在点击遮罩层后关闭弹窗，默认false
        lockScroll: true, // 是否锁定背景滚动，默认false
        allowHtml: true // 是否允许 message 内容中渲染 HTML，默认false
      }
    }
  },
  methods: {
    close () {
      this.$emit('close-version')
    }
  }
}
</script>

<style scoped>
.ver {
  font-size: 1rem;
  text-align: center;
  margin: 1.5rem 1rem 1rem 1.5rem;
}
.ver-title {
  font-size: 1.2rem;
}
.ver-content {
  margin: 1rem 0 1rem 0;
  line-height: 2;
}
</style>
