/**
 * 首页轮播图数据类型
 */
export type BannerItem = {
  // id
  id: number
  // 图片链接
  imgUrl: string
  // 跳转链接
  hrefUrl: string
  // 跳转类型
  type: number
}

export type categoryItem = {
  //id
  id: number
  //分类名称
  name: string
  // 图标
  icon: string
}
