<template>
  <!-- 导航栏 -->
  <div class="dc-bar">
    <van-nav-bar
      :title="this.navBarParams.title"
      :left-text="this.navBarParams.leftText"
      :fixed="this.navBarParams.fixed"
      :border="this.navBarParams.border"
      left-arrow="true"
      z-index="10"
      @click-left="retHeroList()"
      @click-right="retHeroHome()"
    >
      <template #right>
        <van-icon name="wap-home-o" size="18" />
      </template>
    </van-nav-bar>
  </div>
  <!-- notice通知 -->
  <div class="dc-notice" v-if="this.noticeParams.show">
    <van-notice-bar
      left-icon="volume-o"
      :scrollable="this.noticeParams.scroll"
      :mode="this.noticeParams.mode"
      :deploy="this.noticeParams.delay"
      :text="this.noticeParams.content"
     />
  </div>
  <!-- 基本信息 -->
  <div class="dc-preview">
    <img :class="{'image-rotate' : this.imageRotate}"
         @click="rotateImage()"
         :src="this.heroBase.image">
    <div class="dc-preview-content">
      <div class="dc-pc-title">
        {{ this.heroBase.name }}
      </div>
      <div class="dc-pc-type">
        <div>定位:
          <van-tag v-for="item in this.heroBase.role" :key="item.id" :type="item.type" class="dc-preview-tag">{{ item.name}}</van-tag>
        </div>
      </div>
      <div class="dc-pc-resume">
        {{ this.heroBase.resume }}
      </div>
      <!-- 故事 -->
      <div @click="showDetailStory()" :class='["dc-pc-store", this.heroStoreParams.active == true ? "dc-pc-store-active" : ""]'>
        .....查看详情
      </div>
    </div>
  </div>
  <!-- 技能说明 -->
  <div v-if="this.heroSkillParams.show">
    <div class="dc-skill-title">
      <div>技能说明</div>
    </div>
    <div class="dc-skill">
      <van-tabs v-model:active="this.heroSkillParams.active" swipeable animated>
        <van-tab v-for="(item, index) in this.heroSkillParams.list" :key="index">
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
  </div>
  <!-- 装备推荐 -->
  <div v-if="this.heroEqipParams.show">
    <div class="dc-module-title">
      <van-divider :content-position="this.heroEqipParams.titleLoc">
        <van-icon :name="this.heroEqipParams.titleIcon" :color="this.heroEqipParams.titleColor" /> {{ this.heroEqipParams.titleText }}
      </van-divider>
    </div>
    <div class="dc-module">
      <van-tabs v-model:active="this.heroEqipParams.active" swipeable animated>
        <van-tab v-for="(item, index) in this.heroEqipParams.list" :key="index" :title="item.title">
          <van-grid :column-num="this.heroEqipParams.columnNum"
                    :iconSize="this.heroEqipParams.iconSize"
                    :border="this.heroEqipParams.border"
                    :center="this.heroEqipParams.center"
                    :square="this.heroEqipParams.square"
                    :clickable="this.heroEqipParams.click">
            <van-grid-item class="grid-item"
                           v-for="value in item.data"
                           :key="value.id"
                           :icon="value.image"
                           :text="value.name"
                           :to="value.url"
            />
          </van-grid>
          <van-tag :show="this.heroEqipParams.tipShow"
                   :type="this.heroEqipParams.tipType"
                   :mark="this.heroEqipParams.tipMark"
                   :size="this.heroEqipParams.tipSize"
                   :plain="this.heroEqipParams.tipPlain"
                   :closeable="this.heroEqipParams.tipClose"
                   @close="closeEquipTip()"
                   class="dc-module-tip">
            {{ item.tip }}
          </van-tag>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <!-- 附文推荐 -->
  <div v-if="this.heroRuneParams.show">
    <div class="dc-module-title">
      <van-divider :content-position="this.heroRuneParams.titleLoc">
        <van-icon :name="this.heroRuneParams.titleIcon" :color="this.heroRuneParams.titleColor" /> {{ this.heroRuneParams.titleText }}
      </van-divider>
    </div>
    <div class="dc-module">
      <van-row :align="this.heroRuneParams.cellAlign" :justify="this.heroRuneParams.cellJustify" wrap>
        <van-col span="8" v-for="item in this.heroRuneParams.defaultList.data" :key="item.id">
          <div>
            <div class="dc-module-cell-icon">
              <van-icon :name="item.image" :size="this.heroRuneParams.cellIconSize"/>
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
      <van-tag :show="this.heroRuneParams.tipShow"
         :type="this.heroRuneParams.tipType"
         :mark="this.heroRuneParams.tipMark"
         :size="this.heroRuneParams.tipSize"
         :plain="this.heroRuneParams.tipPlain"
         :closeable="this.heroRuneParams.tipClose"
         class="dc-module-tip">
        {{ this.heroRuneParams.defaultList.tip }}
      </van-tag>
    </div>
  </div>
  <!-- store action sheet -->
  <van-action-sheet v-model:show="this.heroStoreParams.show"
                    :closeable="this.heroStoreParams.closeAble"
                    :duration="this.heroStoreParams.duration"
                    :cancel-text="this.heroStoreParams.cancelText"
                    close-on-click-action
                    :title="this.heroStoreParams.title"
                    :description="this.heroStoreParams.resume">
    <div class="sheetContent" v-html="this.heroStoreParams.content">
    </div>
  </van-action-sheet>
</template>

<script>
import { useRoute } from 'vue-router'
import { Icon, NoticeBar, ActionSheet, Tag, NavBar, Tab, Tabs, Grid, GridItem, Divider, Col, Row, PullRefresh } from 'vant'
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
    'van-tabs': Tabs,
    'van-grid': Grid,
    'van-grid-item': GridItem,
    'van-divider': Divider,
    'van-col': Col,
    'van-row': Row
    // 'van-pull-refresh': PullRefresh
  },
  data () {
    return {
      route: null,
      imageRotate: false, // 头像是否旋转
      heroType: 'all',
      heroId: 0,
      // notice component parameters
      noticeParams: {
        show: true,
        scroll: true,
        mode: 'closeable',
        url: '',
        delay: 1,
        content: '欢迎访问本人博客：http://pygo2.top/'
      },
      // nav bar component parameters
      navBarParams: {
        title: '',
        leftText: '返回',
        rightText: '',
        fixed: false,
        border: true
      },
      // data list and components parameters
      // hero base info
      heroBase: {
        name: '艾琳',
        image: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg',
        role: [
          { id: 1, name: '法师', type: 'primary' },
          { id: 2, name: '射手', type: 'success' }
        ],
        resume: '黄金森林的在逃精灵公主，日落圣殿的不速之客。'
      },
      // hero store information
      heroStoreParams: {
        show: false,
        active: false,
        title: '英雄故事',
        closeAble: true,
        cancelText: '关闭',
        duration: 0.8,
        resume: '艾琳是黄金森林的在逃精灵公主，日落圣殿的不速之客。',
        content: '<p>精灵族是优雅或是规矩的代名词。他们千百年封闭生活于黄金森林，他们以优雅舞蹈与信仰月桂圣树交流获得力量，阻挡一切外来者的入侵，同时也禁锢了本族的领域。</p><p>公主艾琳天性机灵活泼，对一切未知充满好奇心与探索欲。然而“继承人”的责任始终压在她的肩膀上，她被要求收起不稳重的一面，遵循精灵族舞蹈的优雅与绝对的秩序，做好一个“真正的公主”。</p><p>成年仪式前夕，艾琳决定打破族群禁令，逃去森林外的“危险古怪的人类世界”开启一场自由的冒险。旅程却并没有想象中那样顺遂，人类对精灵同样存在“不详邪恶”的重重误解。</p><p>越是未知，越是有趣，越是困难，越有斗志。她以舞蹈为表达自我的“语言”，与红头发的法师小女孩成为密友，给圣殿严肃守序的骑士团带来了诸多意外麻烦，甚至组成了圣殿小分队在西方大陆的各个地方冒险……</p>'
      },
      // hero skill description
      heroSkillParams: {
        show: true,
        active: 0,
        list: [
          { id: 1, name: '精灵舞步', cd: '0', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15500.png', description: '艾琳普攻命中敌人后造成150(+20%法术攻击)法术伤害，并获得能量，能量满后艾琳消耗能量急速飞行。 能量满后艾琳获得一次强化普攻，对首个命中的目标造成180(+30%法术攻击)法术伤害。 艾琳每100点法术攻击可以转化为1%暴击率。' },
          { id: 2, name: '叶舞·致意', cd: '7', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15510.png', description: '艾琳射出一束月桂叶，对命中的目标造成法术伤害，命中敌方英雄或飞行到最远处后展开成环，对触碰的敌人造成法术伤害和50%减速，持续1秒。' },
          { id: 3, name: '旋舞·轻语', cd: '10/9.2/8.4/7.6/6.8/6', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15520.png', description: '艾琳受到黄金森林的祝福，立即回满能量，同时叠加两层月桂印记，获得免疫减速效果并增加攻速，持续3秒。' },
          { id: 4, name: '月桂之舞·盛放', cd: '20/17.5/15', blue: '0', image: 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/155/15530.png', description: '艾琳能量满后会叠加一层月桂印记。当月桂印记达到6层时【月桂之舞·盛放】解锁，印记叠加上限为12/15/18层。 技能开启时，艾琳增加10%移速，不断消耗印记发出月桂飞叶，对范围内血量最少的目标造成80(+18%法术攻击)法术伤害。' }
        ]
      },
      // hero recommend equipment scheme
      heroEqipParams: {
        show: true,
        titleIcon: 'eye',
        titleColor: '#1989FA',
        titleText: '装备推荐',
        titleLoc: 'left',
        active: 0,
        columnNum: 3,
        iconSize: '2.8rem',
        border: false,
        center: true,
        square: false,
        click: false,
        list: [
          { id: 1, title: '方案一', tip: '利用金色圣剑和博学者之怒过渡，随后补充一件血族之书提高续航能力。中后期补充法强和穿透，最大化输出能力。', data: [{ id: 1, name: '急速战靴', sale: 426, sum: 710, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1425.jpg', url: '' }, { id: 2, name: '速击之枪', sale: 534, sum: 890, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1129.jpg', url: '' }, { id: 3, name: '金色圣剑', sale: 1241, sum: 2470, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1728.jpg', url: '' }, { id: 4, name: '博学者之怒', sale: 1380, sum: 2300, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1232.jpg', url: '' }, { id: 5, name: '血族之书', sale: 744, sum: 1742, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1222.jpg', url: '' }, { id: 6, name: '光辉之剑', sale: 426, sum: 730, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1223.jpg', url: '' }] },
          { id: 2, title: '方案二', tip: '利用巫术法杖提高普攻伤害。', data: [{ id: 1, name: '名刀司命', sale: 1960, sum: 2090, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1127.jpg', url: '' }, { id: 2, name: '抵抗之靴', sale: 526, sum: 710, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1422.jpg', url: '' }, { id: 3, name: '暗影战斧', sale: 1426, sum: 2050, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1137.jpg', url: '' }, { id: 4, name: '冰痕之握', sale: 1212, sum: 2070, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/13310.jpg', url: '' }, { id: 5, name: '破军', sale: 1770, sum: 2950, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1138.jpg', url: '' }, { id: 6, name: '魔女斗篷', sale: 1272, sum: 2800, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1335.jpg', url: '' }] }
        ],
        tipShow: true,
        tipType: 'primary',
        tipSize: 'medium',
        tipPlain: false,
        tipClose: true,
        tipMark: true
      },
      // hero recommend runes scheme
      heroRuneParams: {
        show: true,
        titleIcon: 'fire',
        titleColor: '#ee0a24',
        titleText: '附文推荐',
        titleLoc: 'left',
        cellIconSize: '2.8rem',
        cellJustify: 'center',
        cellAlign: 'top',
        defaultList: {
          tip: '提高吸血和暴击能力，提高续航和输出能力。',
          data: [
            { id: 1, name: '无双', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/1510.png', content: '暴击率+0.7%\n暴击效果+3.6%', url: '/' },
            { id: 2, name: '贪婪', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/2503.png', content: '法术吸血+1.6%', url: '' },
            { id: 3, name: '心眼', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/3515.png', content: '暴攻速加成+0.6%\n法术穿透+6.4', url: '' }
          ]
        },
        tipShow: true,
        tipType: 'success',
        tipSize: 'medium',
        tipPlain: false,
        tipClose: false,
        tipMark: false
      }
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
      this.heroStoreParams.show = true
      this.heroStoreParams.active = true
    },
    closeEquipTip () {
      this.heroEqipParams.tipShow = false
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
  padding: 0.3rem 1.5rem 0.3rem 1.5rem;
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
.dc-module-title {
  color: #fff;
  font-size: 1rem !important;
  font-weight: 800;
  letter-spacing: 2px;
}
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
.doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
