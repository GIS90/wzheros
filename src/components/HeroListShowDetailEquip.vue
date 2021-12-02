<template>
  <van-grid :column-num="this.gridParams.columnNum"
            :iconSize="this.gridParams.iconSize"
            :border="this.gridParams.border"
            :center="this.gridParams.center"
            :square="this.gridParams.square"
            :clickable="this.gridParams.click">
    <van-grid-item class="grid-item"
                   v-for="value in item.data"
                   :key="value.id"
                   :icon="value.image"
                   :text="value.name"
                   :badge="value.badge"
                   :to="value.url"
    />
  </van-grid>
  <van-tag :show="this.tagParams.tipShow"
           :type="this.tagParams.tipType"
           :mark="this.tagParams.tipMark"
           :size="this.tagParams.tipSize"
           :plain="this.tagParams.tipPlain"
           :closeable="this.tagParams.tipClose"
           @close="closeEquipTip()"
           class="dc-module-tip">
    {{ item.tip }}
  </van-tag>
</template>

<script>
import { Tag, Grid, GridItem } from 'vant'

export default {
  name: 'HeroListShowDetailEquip',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  components: {
    'van-tag': Tag,
    'van-grid': Grid,
    'van-grid-item': GridItem
  },
  data () {
    return {
      gridParams: {
        columnNum: 3,
        iconSize: '2.8rem',
        border: false,
        center: true,
        square: false,
        click: false
      },
      tagParams: {
        tipShow: true,
        tipType: 'primary',
        tipSize: 'medium',
        tipPlain: false,
        tipClose: true,
        tipMark: true
      }
    }
  },
  methods: {
    closeEquipTip () {
      this.tagParams.tipShow = false
    }
  }
}
</script>

<style scoped>
.dc-module-tip {
  margin: 0.5rem 0.5rem 0 0.5rem;
  font-size: 0.9rem;
}
</style>
