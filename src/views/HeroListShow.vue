<template>
  <van-grid :column-num="columnNum"
            :iconSize="iconSize"
            :gutter="gutter"
            :border="border"
            :center="center"
            :square="square"
            :clickable="clickable"
            :direction="direction">
    <van-grid-item class="grid-item" v-for="(item, index) in list"
                   :key="item.id"
                   :index="index"
                   :icon="item.image"
                   :text="item.text"
                   @click="toHeroDetail(item.id)"
    />
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant'
import { useRoute } from 'vue-router'

export default {
  name: 'HeroListShow',
  components: {
    'van-grid': Grid,
    'van-grid-item': GridItem
  },
  created () {
    const route = useRoute()
    this.route = route
    if (route.params.heroType) {
      this.heroType = route.params.heroType
    } else {
      this.heroType = 'all'
    }
  },
  updated () {
    if (this.route.params.heroType) {
      this.heroType = this.route.params.heroType
    }
  },
  data () {
    return {
      route: null,
      heroType: 'all',
      columnNum: 5,
      iconSize: '40px',
      gutter: 0,
      border: true,
      center: false,
      square: false,
      clickable: true,
      direction: 'vertical',
      list: [
        { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg' },
        { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
        { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
        { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' },
        { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
        { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
        { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
        { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
        { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg' },
        { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
        { id: 11, text: '夏洛特', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg' },
        { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' },
        { id: 13, text: '孙尚香', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg' },
        { id: 14, text: '马可波罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg' },
        { id: 15, text: '鲁班七号', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg' },
        { id: 16, text: '武则天', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg' },
        { id: 17, text: '王昭君', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg' },
        { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' },
        { id: 19, text: '孙悟空', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg' },
        { id: 20, text: '橘右京', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg' },
        { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' },
        { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
        { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
        { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
        { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
        { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
        { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' },
        { id: 28, text: '百里守约', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg' },
        { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg' },
        { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
        { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
        { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' },
        { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
        { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
        { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
        { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
        { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg' },
        { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
        { id: 11, text: '夏洛特', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg' },
        { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' },
        { id: 13, text: '孙尚香', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg' },
        { id: 14, text: '马可波罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg' },
        { id: 15, text: '鲁班七号', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg' },
        { id: 16, text: '武则天', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg' },
        { id: 17, text: '王昭君', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg' },
        { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' },
        { id: 19, text: '孙悟空', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg' },
        { id: 20, text: '橘右京', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg' },
        { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' },
        { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
        { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
        { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
        { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
        { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
        { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' }
      ]
    }
  },
  watch: {
    heroType (newVal, oldVal) {
      if (newVal === 'tank') {
        this.list = [
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' }
        ]
      } else if (newVal === 'warrior') {
        this.list = [
          { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' }
        ]
      } else if (newVal === 'assassin') {
        this.list = [
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg' },
          { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' },
          { id: 19, text: '孙悟空', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg' },
          { id: 20, text: '橘右京', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg' },
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' }
        ]
      } else if (newVal === 'master') {
        this.list = [
          { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
          { id: 16, text: '武则天', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg' },
          { id: 17, text: '王昭君', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg' },
          { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' }
        ]
      } else if (newVal === 'shooter') {
        this.list = [
          { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg' },
          { id: 13, text: '孙尚香', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg' },
          { id: 14, text: '马可波罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg' },
          { id: 15, text: '鲁班七号', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg' },
          { id: 28, text: '百里守约', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg' },
          { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' }
        ]
      } else if (newVal === 'auxiliary') {
        this.list = [
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
          { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
          { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
          { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' }
        ]
      } else {
        this.list = [
          { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg' },
          { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
          { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
          { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' },
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg' },
          { id: 11, text: '夏洛特', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg' },
          { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' },
          { id: 13, text: '孙尚香', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg' },
          { id: 14, text: '马可波罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg' },
          { id: 15, text: '鲁班七号', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg' },
          { id: 28, text: '百里守约', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg' },
          { id: 16, text: '武则天', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg' },
          { id: 17, text: '王昭君', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg' },
          { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' },
          { id: 19, text: '孙悟空', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg' },
          { id: 20, text: '橘右京', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg' },
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
          { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
          { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' }
        ]
      }
    }
  },
  methods: {
    toHeroDetail (heroId) {
      this.$router.push({ path: '/hero/' + this.heroType + '/' + heroId })
    }
  }
}
</script>

<style scoped>
.grid-item {
  color: red;
}
</style>
