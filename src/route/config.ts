// 定义路由表接口
export interface IFMenu {
  title: string;
  path: string;
  component: string;
}
// 路由表配置
export const routeConfig: IFMenu[] = [
  { title: '首页', path: '/', component: 'Home' },
  { title: '前端', path: '/FrontEnd', component: 'FrontEnd' },
  { title: 'CSS', path: '/FrontEnd/Css', component: 'Css' },
  { title: 'React', path: '/FrontEnd/React', component: 'React' },
  { title: 'Node', path: '/FrontEnd/Node', component: 'Node' },
  { title: 'Java', path: '/Java', component: 'Java' },
  { title: '优站收藏', path: '/TopSites', component: 'TopSites' },
  { title: '兴趣百科', path: '/Mix', component: 'Mix' },
  { title: '虚无', path: '/NotFound', component: 'NotFound' },
  { title: '文章', path: '/Article/:objectId', component: 'Article' },
];
