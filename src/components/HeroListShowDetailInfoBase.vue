<template>
  <div class="dc-preview">
    <img :class="{'image-rotate' : this.imageRotate}"
         @click="rotateImage()"
         :src="data.image">
    <div class="dc-preview-content">
      <div class="dc-pc-title">
        {{ data.name }}
      </div>
      <div class="dc-pc-type">
        <div>定位:
          <van-tag v-for="item in data.role" :key="item.id" :type="item.type" class="dc-preview-tag">{{ item.name}}</van-tag>
        </div>
      </div>
      <div class="dc-pc-resume">
        {{ data.resume }}
      </div>
      <!-- 故事 -->
      <div @click="showDetailStory()" :class='["dc-pc-store", this.storeActive == true ? "dc-pc-store-active" : ""]'>
        .....查看详情
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from 'vant'

export default {
  name: 'HeroListShowDetailInfoBase',
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  components: {
    'van-tag': Tag
  },
  emits: ['show-detail-story'],
  data () {
    return {
      imageRotate: false,
      storeActive: false
    }
  },
  methods: {
    rotateImage () {
      this.imageRotate = true
      setTimeout(() => {
        this.imageRotate = false
      }, 2000)
    },
    showDetailStory () {
      this.$emit('show-detail-story')
    }
  }
}
</script>

<style scoped>
.image-rotate {
  transform: rotate(-360deg) scale(1.2, 1.2);
  transition: all 2s;
}
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
</style>
