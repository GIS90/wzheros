<template>
  <!-- 导航栏 -->
  <div class="dc-bar" v-if="this.navBarShow">
    <hero-detail-nav></hero-detail-nav>
  </div>
  <!-- notice通知 -->
  <div class="dc-notice" v-if="this.noticeBarShow">
    <hero-detail-notice></hero-detail-notice>
  </div>
  <!-- 基本信息 -->
  <div>
    <hero-detail-info-base :data="this.heroBase"
                           @showDetailStory="showDetailStory()">
    </hero-detail-info-base>
  </div>
  <!-- 技能说明 -->
  <div v-if="this.heroSkillParams.show">
    <div class="dc-skill-title">
      <div>技能说明</div>
    </div>
    <div class="dc-skill">
      <van-tabs v-model:active="this.heroSkillParams.active" swipeable animated>
        <van-tab v-for="(item, index) in this.heroSkillParams.list" :key="index">
          <template #title> <van-icon :name="item.image" :size="this.heroSkillParams.size"/></template>
          <hero-detail-skill :item="item"></hero-detail-skill>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <!-- 装备推荐 -->
  <div v-if="this.heroEqipParams.show">
    <div class="dc-module-title">
      <hero-detail-module-title :location="this.heroEqipParams.titleLoc"
                                :icon="this.heroEqipParams.titleIcon"
                                :color="this.heroEqipParams.titleColor"
                                :text="this.heroEqipParams.titleText"
      ></hero-detail-module-title>
    </div>
    <div class="dc-module">
      <van-tabs v-model:active="this.heroEqipParams.active" swipeable animated>
        <van-tab v-for="(item, index) in this.heroEqipParams.list" :key="index" :title="item.title">
          <hero-detail-equip :item="item"></hero-detail-equip>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <!-- 附文推荐 -->
  <div v-if="this.heroRuneParams.show">
    <div class="dc-module-title">
      <hero-detail-module-title :location="this.heroRuneParams.titleLoc"
                                :icon="this.heroRuneParams.titleIcon"
                                :color="this.heroRuneParams.titleColor"
                                :text="this.heroRuneParams.titleText"
      ></hero-detail-module-title>
    </div>
    <div class="dc-module">
      <!-- 默认符文图文 -->
      <hero-detail-rune-item :list="this.heroRuneParams.defaultList.data"
                             :tip="this.heroRuneParams.defaultList.tip">
      </hero-detail-rune-item>
      <!-- 大神推荐符文 -->
      <div class="dc-module-extra" v-if="this.heroRuneRecParams.show">
        <van-cell-group :inset="this.heroRuneRecParams.inset"
                        :border="this.heroRuneRecParams.border">
          <hero-detail-rune-rec-list v-for="(item, index) in this.heroRuneRecParams.list"
                                     :key="item.id"
                                     :index="index"
                                     :item="item"
                                     @showRuneRecDetail="showRuneRecDetail(index)">
          </hero-detail-rune-rec-list>
        </van-cell-group>
      </div>
    </div>
  </div>
  <!-- 英雄故事actionSheet -->
  <div v-show="this.heroStoreParams.show">
    <hero-detail-info-store :show="this.heroStoreParams.show"
                            :title="this.heroStoreParams.title"
                            :resume="this.heroStoreParams.resume"
                            :content="this.heroStoreParams.content"
                            @close-store="closeDetailStory()">
    </hero-detail-info-store>
  </div>
  <!-- 大神推荐符文显示 -->
  <div v-show="this.heroRuneRecParams.selectShow">
    <hero-detail-rune-rec-item :show="this.heroRuneRecParams.selectShow"
                               :data="this.heroRuneRecParams.list[this.heroRuneRecParams.selectIndex]"
                               @closeRuneRecDetail="closeRuneRecDetail()">
    </hero-detail-rune-rec-item>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { Icon, Tab, Tabs, CellGroup } from 'vant'
import router from '../router/index.ts'
import HeroListShowDetailNav from '../components/HeroListShowDetailNav.vue'
import HeroListShowDetailNotice from '../components/HeroListShowDetailNotice'
import HeroListShowDetailInfoStore from '../components/HeroListShowDetailInfoStore'
import HeroListShowDetailSkill from '../components/HeroListShowDetailSkill'
import HeroListShowDetailModuleTitle from '../components/HeroListShowDetailModuleTitle'
import HeroListShowDetailEquip from '../components/HeroListShowDetailEquip'
import HeroListShowDetailRuneItem from '../components/HeroListShowDetailRuneItem'
import HeroListShowDetailRuneRecItem from '../components/HeroListShowDetailRuneRecItem'
import HeroListShowDetailRuneRecList from '../components/HeroListShowDetailRuneRecList'
import HeroListShowDetailInfoBase from '../components/HeroListShowDetailInfoBase'

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
  },
  mounted () {
    //
  },
  components: {
    'van-icon': Icon,
    'van-tab': Tab,
    'van-tabs': Tabs,
    'van-cell-group': CellGroup,
    'hero-detail-nav': HeroListShowDetailNav,
    'hero-detail-notice': HeroListShowDetailNotice,
    'hero-detail-info-base': HeroListShowDetailInfoBase,
    'hero-detail-info-store': HeroListShowDetailInfoStore,
    'hero-detail-skill': HeroListShowDetailSkill,
    'hero-detail-module-title': HeroListShowDetailModuleTitle,
    'hero-detail-equip': HeroListShowDetailEquip,
    'hero-detail-rune-item': HeroListShowDetailRuneItem,
    'hero-detail-rune-rec-item': HeroListShowDetailRuneRecItem,
    'hero-detail-rune-rec-list': HeroListShowDetailRuneRecList
  },
  data () {
    return {
      // router parameter
      route: null,
      // other
      imageRotate: false, // 头像是否旋转
      heroType: 'all',
      heroId: 0,
      // nav bar component parameters
      navBarShow: true,
      // notice component parameters
      noticeBarShow: true,
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
        resume: '艾琳是黄金森林的在逃精灵公主，日落圣殿的不速之客。',
        content: '<p>精灵族是优雅或是规矩的代名词。他们千百年封闭生活于黄金森林，他们以优雅舞蹈与信仰月桂圣树交流获得力量，阻挡一切外来者的入侵，同时也禁锢了本族的领域。</p><p>公主艾琳天性机灵活泼，对一切未知充满好奇心与探索欲。然而“继承人”的责任始终压在她的肩膀上，她被要求收起不稳重的一面，遵循精灵族舞蹈的优雅与绝对的秩序，做好一个“真正的公主”。</p><p>成年仪式前夕，艾琳决定打破族群禁令，逃去森林外的“危险古怪的人类世界”开启一场自由的冒险。旅程却并没有想象中那样顺遂，人类对精灵同样存在“不详邪恶”的重重误解。</p><p>越是未知，越是有趣，越是困难，越有斗志。她以舞蹈为表达自我的“语言”，与红头发的法师小女孩成为密友，给圣殿严肃守序的骑士团带来了诸多意外麻烦，甚至组成了圣殿小分队在西方大陆的各个地方冒险……</p>'
      },
      // hero skill description
      heroSkillParams: {
        show: true,
        active: 0,
        size: '2.3rem',
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
        list: [
          { id: 1, title: '方案一', tip: '利用金色圣剑和博学者之怒过渡，随后补充一件血族之书提高续航能力。中后期补充法强和穿透，最大化输出能力。', data: [{ id: 1, name: '急速战靴', sale: 426, sum: 710, badge: '新', image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1425.jpg', url: '' }, { id: 2, name: '速击之枪', sale: 534, sum: 890, badge: '热', image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1129.jpg', url: '' }, { id: 3, name: '金色圣剑', sale: 1241, sum: 2470, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1728.jpg', url: '' }, { id: 4, name: '博学者之怒', sale: 1380, sum: 2300, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1232.jpg', url: '' }, { id: 5, name: '血族之书', sale: 744, sum: 1742, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1222.jpg', url: '' }, { id: 6, name: '光辉之剑', sale: 426, sum: 730, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1223.jpg', url: '' }] },
          { id: 2, title: '方案二', tip: '利用巫术法杖提高普攻伤害。', data: [{ id: 1, name: '名刀司命', sale: 1960, sum: 2090, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1127.jpg', url: '' }, { id: 2, name: '抵抗之靴', sale: 526, sum: 710, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1422.jpg', url: '' }, { id: 3, name: '暗影战斧', sale: 1426, sum: 2050, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1137.jpg', url: '' }, { id: 4, badge: '改', name: '冰痕之握', sale: 1212, sum: 2070, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/13310.jpg', url: '' }, { id: 5, name: '破军', sale: 1770, sum: 2950, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1138.jpg', url: '' }, { id: 6, name: '魔女斗篷', sale: 1272, sum: 2800, image: 'https://game.gtimg.cn/images/yxzj/img201606/itemimg/1335.jpg', url: '' }] }
        ]
      },
      // hero default runes scheme
      heroRuneParams: {
        show: true,
        titleIcon: 'fire',
        titleColor: '#ee0a24',
        titleText: '附文推荐',
        titleLoc: 'left',
        defaultList: {
          tip: '提高吸血和暴击能力，提高续航和输出能力。',
          data: [
            { id: 1, name: '无双', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/1510.png', content: '暴击率+0.7%\n暴击效果+3.6%', url: '/' },
            { id: 2, name: '贪婪', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/2503.png', content: '法术吸血+1.6%', url: '' },
            { id: 3, name: '心眼', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/3515.png', content: '暴攻速加成+0.6%\n法术穿透+6.4', url: '' }
          ]
        }
      },
      // hero recommand runes scheme
      heroRuneRecParams: {
        show: true, // 大神推荐附文
        inset: false, // 是否展示为圆角卡片风格
        border: true,
        list: [
          { id: 1, text: '大神推荐1', icon: 'location-o', label: '高爆发、高吸血', value: '', data: [{ id: 1, name: '无双', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/1510.png', content: '暴击率+0.7%\n暴击效果+3.6%', url: '/' }, { id: 2, name: '贪婪', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/2503.png', content: '法术吸血+1.6%', url: '' }, { id: 3, name: '心眼', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/3515.png', content: '暴攻速加成+0.6%\n法术穿透+6.4', url: '' }] },
          { id: 2, text: '大神推荐2', icon: 'shop-o', label: '前期够坦度，抗压推荐', value: '', data: [{ id: 1, name: '无双', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/1510.png', content: '暴击率+0.7%\n暴击效果+3.6%', url: '/' }, { id: 2, name: '贪婪', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/2503.png', content: '法术吸血+1.6%', url: '' }, { id: 3, name: '心眼', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/3515.png', content: '暴攻速加成+0.6%\n法术穿透+6.4', url: '' }] },
          { id: 3, text: '大神推荐3', icon: 'location-o', label: '百穿符文，帮助前期打出伤害，顺利过渡到中后期', value: '', data: [{ id: 1, name: '无双', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/1510.png', content: '暴击率+0.7%\n暴击效果+3.6%', url: '/' }, { id: 2, name: '贪婪', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/2503.png', content: '法术吸血+1.6%', url: '' }, { id: 3, name: '心眼', image: 'https://game.gtimg.cn/images/yxzj/img201606/mingwen/3515.png', content: '暴攻速加成+0.6%\n法术穿透+6.4', url: '' }] }
        ],
        selectIndex: 0,
        selectShow: false
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
    },
    closeDetailStory () {
      this.heroStoreParams.show = false
    },
    showRuneRecDetail (index) {
      this.heroRuneRecParams.selectShow = true
      this.heroRuneRecParams.selectIndex = index
    },
    closeRuneRecDetail () {
      this.heroRuneRecParams.selectShow = false
    }
  }
}
</script>

<style scoped>
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
.dc-module-title {
  color: #fff;
  font-size: 1rem !important;
  font-weight: 800;
  letter-spacing: 2px;
}
.dc-module-extra {
  margin-top: 0.5rem;
}
</style>
