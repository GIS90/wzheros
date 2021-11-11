<template>
  <van-grid :column-num="this.gridParams.columnNum"
            :iconSize="this.gridParams.iconSize"
            :gutter="this.gridParams.gutter"
            :border="this.gridParams.border"
            :center="this.gridParams.center"
            :square="this.gridParams.square"
            :clickable="this.gridParams.clickable"
            :direction="this.gridParams.direction">
    <van-grid-item class="grid-item"
                   v-for="(item, index) in dataList"
                   :key="item.id"
                   :index="index"
                   :icon="item.image"
                   :text="item.text"
                   :badge="item.badge"
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
    this.initData()
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
      // grid component parameters
      gridParams: {
        columnNum: 5,
        iconSize: '38px',
        gutter: 0,
        border: false,
        center: false,
        square: false,
        clickable: true,
        direction: 'vertical'
      },
      // data parameters
      dataList: []
    }
  },
  watch: {
    heroType (newVal, oldVal) {
      this.initData()
    }
  },
  methods: {
    initData () {
      if (this.heroType === 'tank') {
        this.dataList = [
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg', badge: '新' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' }
        ]
      } else if (this.heroType === 'warrior') {
        this.dataList = [
          { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg', badge: '新' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg', badge: '新' },
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg', badge: '新' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 12, text: '蒙恬', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg' }
        ]
      } else if (this.heroType === 'assassin') {
        this.dataList = [
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg', badge: '新' },
          { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' },
          { id: 19, text: '孙悟空', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg' },
          { id: 20, text: '橘右京', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg' },
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg' }
        ]
      } else if (this.heroType === 'master') {
        this.dataList = [
          { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
          { id: 16, text: '武则天', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg' },
          { id: 17, text: '王昭君', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg' },
          { id: 18, text: '不知火舞', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg' }
        ]
      } else if (this.heroType === 'shooter') {
        this.dataList = [
          { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg', badge: '新' },
          { id: 13, text: '孙尚香', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg' },
          { id: 14, text: '马可波罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg' },
          { id: 15, text: '鲁班七号', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg' },
          { id: 28, text: '百里守约', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg' },
          { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' }
        ]
      } else if (this.heroType === 'auxiliary') {
        this.dataList = [
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg', badge: '新' },
          { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
          { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
          { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' }
        ]
      } else {
        this.dataList = [
          { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg', badge: '新' },
          { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
          { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
          { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' },
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg', badge: '新' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg', badge: '新' },
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
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg', badge: '新' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
          { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
          { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' },
          { id: 28, text: '百里守约', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg' },
          { id: 1, text: '艾琳', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg', badge: '新' },
          { id: 2, text: '诸葛亮', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg' },
          { id: 3, text: '李信', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg' },
          { id: 4, text: '伽罗', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg' },
          { id: 5, text: '盾山', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg' },
          { id: 6, text: '曜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg' },
          { id: 7, text: '澜', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg' },
          { id: 8, text: '盘古', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg' },
          { id: 9, text: '云缨', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg', badge: '新' },
          { id: 10, text: '廉颇', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg', badge: '新' },
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
          { id: 21, text: '马超', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg', badge: '新' },
          { id: 22, text: '亚瑟', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg' },
          { id: 23, text: '程咬金', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg' },
          { id: 24, text: '白起', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg' },
          { id: 25, text: '庄周', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg' },
          { id: 26, text: '明世隐', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg' },
          { id: 27, text: '东皇太一', image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg' }
        ]
      }
    },
    toHeroDetail (heroId) {
      this.$router.push({ path: '/hero/' + this.heroType + '/' + heroId })
    }
  }
}
</script>

<style scoped>
.grid-item {
  text-align: center;
}
</style>
