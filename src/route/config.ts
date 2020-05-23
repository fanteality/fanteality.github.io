// 定义路由表接口
export interface IFMenu {
    title: string;
    path: string;
    component: string;
}
// 路由表配置
export const routeConfig: IFMenu[] = [
    { title: '首页', path: '/', component: 'Home' },
    { title: 'CSS', path: '/FrontEnd/Css', component: 'Css' },
    { title: 'React', path: '/FrontEnd/React', component: 'React' },
    { title: 'Node', path: '/FrontEnd/Node', component: 'Node' },
    { title: 'Java', path: '/Java', component: 'Java' },
    { title: '优站收藏', path: '/GoodSites', component: 'GoodSites' },
    { title: '杂七杂八', path: '/Others', component: 'Others' },
];
