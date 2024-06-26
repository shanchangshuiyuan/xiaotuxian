import { http } from '@/utils/http'
import type { BannerItem, categoryItem, guessItem, hotItem } from '@/types/home'
import type { PageParams, PageResult } from '@/types/global'
/**
 *首页-广告区域-小程序
 * @param distributionSite
 *
  广告区域展示位置
  1 为首页（默认值）
  2 为商品分类页
  示例值:
  1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
/**
 * 首页-商品分类
 * @returns
 */
export const getHomeCategoryAPI = () => {
  return http<categoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
/**
 *
 * 首页-热门推荐
 */
export const getHomeHotAPI = () => {
  return http<hotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 首页-猜你喜欢
 * @returns
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<guessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
