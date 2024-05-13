<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <view class="index">index</view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './component/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
//以Xtx开头的组件可以自动导入，后面在使用就不导入了
// import XtxSwiper from '@/components/XtxSwiper.vue'
import type { BannerItem } from '@/types/home'

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
//
</style>
