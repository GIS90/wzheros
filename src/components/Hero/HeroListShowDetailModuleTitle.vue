<template>
  <van-divider :content-position="this.location" :dashed="is_dashed">
    <van-icon :name="this.icon" :color="this.color" /> {{ this.text }}
  </van-divider>
</template>

<script>
import { Divider, Icon } from 'vant'

export default {
  name: 'HeroListShowDetailModuleTitle',
  props: {
    location: {
      type: String,
      default: 'center',
      validator (value) {
        return ['left', 'center', 'right'].includes(value)
      }
    },
    icon: {
      type: String,
      default: 'label'
    },
    color: {
      type: String,
      default: '#1989FA'
    },
    text: {
      type: String,
      require: true,
      default: '标题'
    }
  },
  components: {
    'van-divider': Divider,
    'van-icon': Icon
  },
  data () {
    return {
      is_dashed: false
    }
  }
}
</script>

<style scoped>

</style>
