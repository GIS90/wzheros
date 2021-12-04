<template>
 <van-cell :icon="item.icon"
           :title="item.text"
           :label="item.label"
           :value="item.value"
           :size="this.size"
           :center="this.center"
           :clickable="true"
           :is-link="this.isLink"
           :arrow-direction="this.isLinkDir"
           @click="showDialog(index)"
          />
</template>

<script>
import { Cell } from 'vant'

export default {
  name: 'HeroListShowDetailRuneRecList',
  components: {
    'van-cell': Cell
  },
  emits: ['show-rune-rec-detail'],
  props: {
    item: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    },
    key: {
      type: String
    }
  },
  data () {
    return {
      size: 'normal', // large
      center: true,
      isLink: true,
      isLinkDir: '' // top left down right(default, value is null)
    }
  },
  methods: {
    showDialog (index) {
      this.$emit('show-rune-rec-detail', index)
    }
  }
}
</script>

<style scoped>

</style>
