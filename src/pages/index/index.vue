<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <scroll-view
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrollToLower"
    refresher-enabled
    @refresherrefresh="onRefresherRefresh"
    :refresher-triggered="isTriggered"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
//以Xtx开头的组件可以自动导入，后面在使用就不导入了
// import XtxSwiper from '@/components/XtxSwiper.vue'
import type { BannerItem, categoryItem, hotItem } from '@/types/home'
import type { xtxGuessInstance } from '@/types/component'
import CustomNavbar from './component/CustomNavbar.vue'
import CategoryPanel from './component/CategoryPanel.vue'
import HotPanel from './component/HotPanel.vue'
import PageSkeleton from './component/PageSkeleton.vue'

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
// 判断是否正在加载数据判断是否加载骨架屏
const isLoading = ref(false)

//数据加载
onLoad(async () => {
  isLoading.value = true
  // //轮播图数据获取
  // getHomeBannerData()
  // //分类前台数据获取
  // getCategoryData()
  // //热门推荐数据获取
  // getHomeHotData()
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeHotData()])
  isLoading.value = false
})

//获取猜你喜欢组件实例
const guessRef = ref<xtxGuessInstance>()

//页面到底部自动获取数据
const onScrollToLower = () => {
  guessRef.value?.getMore()
}

//判断动画是否关闭标志
const isTriggered = ref(false)
//下拉刷新
const onRefresherRefresh = async () => {
  //开始动画
  isTriggered.value = true
  // //轮播图数据获取
  // getHomeBannerData()
  // //分类前台数据获取
  // getCategoryData()
  // //热门推荐数据获取
  // getHomeHotData()
  //重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  //关闭动画
  isTriggered.value = false
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
