<template>
<van-action-sheet :show="this.show"
                  :closeable="this.closeAble"
                  :duration="this.duration"
                  :cancel-text="this.cancelText"
                  close-on-click-action
                  :title="this.title"
                  :description="this.resume"
                  :round="this.round"
                  :overlay="this.overlay"
                  @close="close()"
                  @cancel="close()">
  <div class="sheetContent" v-html="this.content"></div>
</van-action-sheet>
</template>

<script>
import { ActionSheet } from 'vant'

export default {
  name: 'HeroListShowDetailInfoStore',
  emits: ['close-store'],
  props: {
    show: {
      type: Boolean,
      require: true,
      default: true,
      validator (value) {
        return [true, false].includes(value)
      }
    },
    // 标题
    title: {
      type: String,
      require: true,
      default: '英雄故事'
    },
    // 简述
    resume: {
      type: String,
      require: true,
      default: '英雄故事简介说明'
    },
    // 内容
    content: {
      type: String
    }
  },
  components: {
    'van-action-sheet': ActionSheet
  },
  data () {
    return {
      closeAble: true, // 是否显示关闭图标
      cancelText: '关闭', // 取消按钮文字
      duration: 0.8, // 动画时长
      round: true, // 是否显示圆角
      overlay: true // 是否显示遮罩层
    }
  },
  methods: {
    close () {
      this.$emit('close-store')
    }
  }
}
</script>

<style scoped>
.sheetContent {
  padding: 0.3rem 1.5rem 0.3rem 1.5rem;
}
</style>
