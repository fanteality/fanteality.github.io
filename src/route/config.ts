// 定义路由表接口
export interface IFMenu {
  title: string
  path: string
  part?: string
  component?: string
}
// 路由表配置
export const routeConfig: IFMenu[] = [
  { title: '首页', path: '/', component: 'Home' },
  { title: '前端', path: '/FrontEnd', part: 'FrontEnd' },
  { title: 'JS', path: '/FrontEnd/Js', part: 'Js' },
  { title: 'CSS', path: '/FrontEnd/Css', part: 'Css' },
  { title: 'React', path: '/FrontEnd/React', part: 'React' },
  { title: 'Node', path: '/FrontEnd/Node', part: 'Node' },
  { title: 'Java', path: '/Java', part: 'Java' },
  { title: '优站收藏', path: '/TopSites', part: 'TopSites' },
  { title: '兴趣百科', path: '/Mix', part: 'Mix' },
  { title: '虚无', path: '/NotFound', component: 'NotFound' },
  { title: '文章', path: '/Article/:objectId', component: 'Article' },
]
