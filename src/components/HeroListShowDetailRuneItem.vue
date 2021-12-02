<template>
  <van-row :align="this.rowParams.align" :justify="this.rowParams.justify" wrap>
        <van-col :span="this.colParams.span" v-for="item in list" :key="item.id">
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
  <van-tag :show="this.tipParams.show"
     :type="this.tipParams.type"
     :mark="this.tipParams.mark"
     :size="this.tipParams.size"
     :plain="this.tipParams.plain"
     :closeable="this.tipParams.close"
     class="dc-module-tip">
    {{ tip }}
  </van-tag>
</template>

<script>
import { Row, Col, Icon, Tag } from 'vant'

export default {
  name: 'HeroListShowDetailRuneItem',
  props: {
    list: {
      type: Object,
      require: true
    },
    tip: {
      type: String,
      default: '默认装备推荐'
    }
  },
  components: {
    'van-row': Row,
    'van-col': Col,
    'van-icon': Icon,
    'van-tag': Tag
  },
  data () {
    return {
      rowParams: {
        iconSize: '2.8rem',
        justify: 'center',
        align: 'top'
      },
      colParams: {
        span: 8
      },
      tipParams: {
        show: true, // 是否显示附文tip
        type: 'success',
        size: 'medium',
        plain: false,
        close: false,
        mark: false
      }
    }
  }
}
</script>

<style scoped>
.dc-module-tip {
  margin: 0.5rem 0.5rem 0 0.5rem;
  font-size: 0.9rem;
}
.dc-module-cell-icon {
  text-align: center;
}
.dc-module-cell-title {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}
.dc-module-cell-content {
  text-align: center;
  font-size: 0.8rem;
}
</style>
