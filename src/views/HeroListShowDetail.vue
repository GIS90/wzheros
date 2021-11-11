<template>
  <div class="dc-bar">
    <van-nav-bar
      :title="this.navTitle"
      :left-text="this.navLeftText"
      left-arrow
      @click-left="retHeroList()"
      @click-right="retHeroHome()"
    >
      <template #right>
        <van-icon name="wap-home-o" size="18" />
      </template>
    </van-nav-bar>
  </div>
  <div class="dc-notice" v-if="this.noticeShow">
    <van-notice-bar
      left-icon="volume-o"
      scrollable
      mode="closeable"
      :text="this.noticeContent"
     />
  </div>
  <div class="dc-preview">
    <img :class="{'image-rotate' : this.imageRotate}"
         @click="rotateImage()"
         src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg">
    <div class="dc-preview-content">
      <div class="dc-pc-title">
        艾琳
      </div>
      <div class="dc-pc-type">
        <div>定位:
          <van-tag v-for="item in this.tags" :key="item" :type="item.type" class="dc-preview-tag">{{ item.name}}</van-tag>
        </div>
      </div>
      <div class="dc-pc-resume">
        艾琳是黄金森林的在逃精灵公主，日落圣殿的不速之客。
      </div>
      <div @click="showDetailStory()" :class='["dc-pc-store", this.storeActive == true ? "dc-pc-store-active" : ""]'>
        .....查看详情
      </div>
    </div>
  </div>
  <div class="dc-skill-title">
    <div>技能说明</div>
  </div>
  <div class="dc-skill">
    <van-tabs v-model:active="this.tabActive" swipeable animated>
      <van-tab v-for="(item, index) in this.kills" :key="index">
        <template #title> <van-icon :name="item.image" size="2.3rem"/></template>
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
      </van-tab>
    </van-tabs>
  </div>
  <van-action-sheet v-model:show="this.storeShow"
                    closeable
                    duration="1"
                    cancel-text="关闭"
                    close-on-click-action
                    title="英雄故事"
                    :description="this.storeDescription">
    <div class="sheetContent" v-html="this.storeContent">
    </div>
  </van-action-sheet>
</template>

<script>
import { useRoute } from 'vue-router'
import { Icon, NoticeBar, ActionSheet, Tag, NavBar, Tab, Tabs } from 'vant'
import router from '../router/index.ts'

export default {
  name: 'HeroListShowDetail',
  created () {
    const route = useRoute()
    this.route = route
    if (route.params.heroId) {
      this.heroId = route.params.heroId
    } else {
      this.heroId = 0
    }
    console.log('created' + this.heroId)
  },
  components: {
    'van-icon': Icon,
    'van-notice-bar': NoticeBar,
    'van-action-sheet': ActionSheet,
    'van-tag': Tag,
    'van-nav-bar': NavBar,
    'van-tab': Tab,
    'van-tabs': Tabs
  },
  data () {
    return {
      route: null,
      imageRotate: false,
      heroType: 'all',
      heroId: 0,
      noticeShow: true,
      noticeContent: '欢迎访问本人博客：http://pygo2.top/',
      navTitle: '',
      navLeftText: '返回',
      navRightText: '',
      tags: [
        { name: '法师', type: 'primary' },
        { name: '射手', type: 'success' }
      ],
      storeShow: false,
      storeActive: false,
      storeDescription: '艾琳是黄金森林的在逃精灵公主，日落圣殿的不速之客',
      storeContent: '<p>精灵族是优雅或是规矩的代名词。他们千百年封闭生活于黄金森林，他们以优雅舞蹈与信仰月桂圣树交流获得力量，阻挡一切外来者的入侵，同时也禁锢了本族的领域。</p><p>公主艾琳天性机灵活泼，对一切未知充满好奇心与探索欲。然而“继承人”的责任始终压在她的肩膀上，她被要求收起不稳重的一面，遵循精灵族舞蹈的优雅与绝对的秩序，做好一个“真正的公主”。</p><p>成年仪式前夕，艾琳决定打破族群禁令，逃去森林外的“危险古怪的人类世界”开启一场自由的冒险。旅程却并没有想象中那样顺遂，人类对精灵同样存在“不详邪恶”的重重误解。</p><p>越是未知，越是有趣，越是困难，越有斗志。她以舞蹈为表达自我的“语言”，与红头发的法师小女孩成为密友，给圣殿严肃守序的骑士团带来了诸多意外麻烦，甚至组成了圣殿小分队在西方大陆的各个地方冒险……</p>',
      tabActive: 0,
      kills: [
        { id: 1, name: '精灵舞步', cd: '0', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15500.png', description: '艾琳普攻命中敌人后造成150(+20%法术攻击)法术伤害，并获得能量，能量满后艾琳消耗能量急速飞行。 能量满后艾琳获得一次强化普攻，对首个命中的目标造成180(+30%法术攻击)法术伤害。 艾琳每100点法术攻击可以转化为1%暴击率。' },
        { id: 2, name: '叶舞·致意', cd: '7', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15510.png', description: '艾琳射出一束月桂叶，对命中的目标造成法术伤害，命中敌方英雄或飞行到最远处后展开成环，对触碰的敌人造成法术伤害和50%减速，持续1秒。' },
        { id: 3, name: '旋舞·轻语', cd: '10/9.2/8.4/7.6/6.8/6', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15520.png', description: '艾琳受到黄金森林的祝福，立即回满能量，同时叠加两层月桂印记，获得免疫减速效果并增加攻速，持续3秒。' },
        { id: 4, name: '月桂之舞·盛放', cd: '20/17.5/15', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15530.png', description: '艾琳能量满后会叠加一层月桂印记。当月桂印记达到6层时【月桂之舞·盛放】解锁，印记叠加上限为12/15/18层。 技能开启时，艾琳增加10%移速，不断消耗印记发出月桂飞叶，对范围内血量最少的目标造成80(+18%法术攻击)法术伤害。' }
      ]
    }
  },
  methods: {
    rotateImage () {
      this.imageRotate = true
      setTimeout(() => {
        this.imageRotate = false
      }, 2000)
    },
    retHeroList () {
      router.go(-1)
    },
    retHeroHome () {
      router.push('/')
    },
    showDetailStory () {
      this.storeShow = true
      this.storeActive = true
    }
  }
}
</script>

<style scoped>
.dc-pc-store-active {
  color: red !important;
}
.dc-pc-store {
  color: #1989FA;
  height: 2rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.dc-preview {
  margin-top: 0.5rem;
  display: flex;
  font-size: 1rem;
  padding: 0 var(--van-padding-md);
}
.dc-preview img {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  margin-right: var(--van-padding-md);
}
.dc-preview-tag {
  margin-left: 0.5rem;
}
.dc-preview .dc-preview-content {
  padding-top: 0.5rem;
}
.dc-preview .dc-preview-content .dc-pc-title {
  font-size: 1.1rem;
  font-weight: 800;
}
.dc-preview .dc-preview-content .dc-pc-type {
  margin: 0.5rem 0 0;
  font-weight: 500;
}
.dc-preview .dc-preview-content .dc-pc-resume{
  margin: 0.5rem 0 0;
  line-height: 1.5rem;
}
.sheetContent {
  padding: 0.5rem 1.5rem 0 1.5rem;
}
.image-rotate {
  transform: rotate(-360deg) scale(1.2, 1.2);
  transition: all 2s;
}
.dc-skill {
  /*border-top: 1px solid #888888;*/
  margin-top: 0.5rem;
}
.dc-skill-title {
  display: block;
  height: 2.4rem;
  text-align: center;
  background-image: linear-gradient(to right, #fff, #8bc34a, #4caf50, #4caf50, #4caf50, #8bc34a, #fff);
  background-color: #4caf50;
  color: #fff;
}
.dc-skill-title div {
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: white;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px white;
}
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
