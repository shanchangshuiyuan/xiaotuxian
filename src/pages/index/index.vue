<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <scroll-view class="scroll-view" scroll-y @scrolltolower="onScrollToLower">
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList"></CategoryPanel>
    <!-- 热门推荐 -->
    <HotPanel :list="hotList"></HotPanel>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
//以Xtx开头的组件可以自动导入，后面在使用就不导入了
// import XtxSwiper from '@/components/XtxSwiper.vue'
import type { BannerItem, categoryItem, hotItem } from '@/types/home'
import CustomNavbar from './component/CustomNavbar.vue'
import CategoryPanel from './component/CategoryPanel.vue'
import HotPanel from './component/HotPanel.vue'
import type { xtxGuessInstance } from '@/types/component'

//轮播图数据获取
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//分类前台数据获取
const categoryList = ref<categoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//热门推荐数据获取
const hotList = ref<hotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  //轮播图数据获取
  getHomeBannerData()
  //分类前台数据获取
  getCategoryData()
  //热门推荐数据获取
  getHomeHotData()
})

//获取猜你喜欢组件实例
const guessRef = ref<xtxGuessInstance>()

const onScrollToLower = () => {
  // console.log('出低了')
  guessRef.value?.getMore()
}
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
