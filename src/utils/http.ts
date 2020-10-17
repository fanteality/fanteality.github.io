import Bmob from 'hydrogen-js-sdk'
import { SECRECT_KEY, PWD } from './config'
// 初始化
Bmob.initialize(SECRECT_KEY, PWD)

const query = Bmob.Query('Articles')

// 首页获取访问量最高的5篇文章
export function indexHot(): Promise<any> {
  query.order('viewCount')
  query.limit(5)
  return query.find()
}

export function getList(part:string): Promise<any> {
  query.equalTo('part','==',part)
  return query.find()
}

// 获取指定文章
export function getArticle(objectId: string): Promise<any> {
  return query.get(objectId)
}
