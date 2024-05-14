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
/**
 * 首页分类数据类型
 */
export type categoryItem = {
  //id
  id: number
  //分类名称
  name: string
  // 图标
  icon: string
}

/**
 * 首页-热门推荐数据类型
 */
export type hotItem = {
  //说明
  alt: string
  //id
  id: number
  //图片集合(图片路径)
  pictures: string[]
  //跳转地址
  target: number
  //标题
  title: string
  //推荐类型
  type: string
}

/**
 * 首页-猜你喜欢数据类型
 */
export type guessItem = {
  //商品描述
  desc: string
  //商品id
  id: number
  //商品名称
  name: string
  //已下单数量
  orderNum: number
  //图片路径
  picture: string
  //价格
  price: number
}
