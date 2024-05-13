<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 自定义导航栏 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <!-- 分类面板 -->
  <CategoryPanel></CategoryPanel>
  <view class="index">index</view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
//以Xtx开头的组件可以自动导入，后面在使用就不导入了
// import XtxSwiper from '@/components/XtxSwiper.vue'
import type { BannerItem } from '@/types/home'
import CustomNavbar from './component/CustomNavbar.vue'
import CategoryPanel from './component/CategoryPanel.vue'

//轮播图数据获取
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
