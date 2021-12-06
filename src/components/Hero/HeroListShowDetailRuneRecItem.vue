<template>
  <van-dialog :show="show"
              :title="data.text"
              @confirm="closeDialog()">
    <!-- 符文图文 -->
      <van-row :align="this.rowParams.align" :justify="this.rowParams.justify" :wrap="this.rowParams.wrap">
        <van-col :span="this.colParams.span" v-for="item in data.data" :key="item.id">
          <div>
            <div class="dc-module-cell-icon">
              <van-icon :name="item.image" :size="this.rowParams.iconSize"/>
            </div>
            <div class="dc-module-cell-title">
              {{ item.name }}
            </div>
            <div class="dc-module-cell-content">
              {{ item.content }}
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 符文tip -->
      <van-tag :show="this.tagParams.tipShow"
         :type="this.tagParams.tipType"
         :mark="this.tagParams.tipMark"
         :size="this.tagParams.tipSize"
         :plain="this.tagParams.tipPlain"
         :closeable="this.tagParams.tipClose"
         class="dc-module-tip">
        {{ data.label }}
      </van-tag>
  </van-dialog>
</template>

<script>
import { Dialog, Row, Col, Tag, Icon } from 'vant'

export default {
  name: 'HeroListShowDetailRuneRecItem',
  components: {
    'van-col': Col,
    'van-row': Row,
    'van-tag': Tag,
    'van-icon': Icon,
    'van-dialog': Dialog.Component
  },
  emits: ['close-rune-rec-detail'],
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator (value) {
        return [true, false].includes(value)
      }
    },
    data: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      rowParams: {
        iconSize: '2.8rem',
        justify: 'center', // end center space-around space-between
        align: 'top', // top center bottom
        wrap: true
      },
      colParams: {
        span: 8
      },
      tagParams: {
        tipShow: true,
        tipType: 'warning', // primary success danger warning default
        tipSize: 'medium', // large medium
        tipPlain: true, // 是否为空心样式
        tipClose: false, // 是否为可关闭标签
        tipMark: true
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close-rune-rec-detail')
    }
  }
}
</script>

<style scoped>
.dc-module-tip {
  margin: 1rem 0.5rem 1rem 0.5rem;
  font-size: 0.9rem;
}
.dc-module-cell-icon {
  text-align: center;
  margin-top: 0.5rem;
}
.dc-module-cell-title {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
}
.dc-module-cell-content {
  text-align: center;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
}
</style>
