<template>
  <div class="dc-skill-content">
    <div class="dc-skill-content-title">
      <div>{{ item.name }}</div>
      <div><van-icon name="fire-o" color="#ee0a24" /> 冷却值: {{ item.cd }}</div>
      <div><van-icon name="cart-o" color="#1989fa" /> 蓝消耗: {{ item.blue }}</div>
    </div>
    <div class="dc-skill-content-content">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'HeroListShowDetailSkill',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  components: {
    'van-icon': Icon
  }
}
</script>

<style scoped>

.dc-skill-content {
  display: block;
  margin: 0 0.8rem 0 0.8rem;
}
.dc-skill-content .dc-skill-content-title {
  font-size: 1rem;
  font-weight: 800;
}
.dc-skill-content .dc-skill-content-title div {
  margin-top: 0.4rem;
}
.dc-skill-content .dc-skill-content-content {
  margin-top: 0.6rem;
  line-height: 1.6rem;
}
</style>
