// 定义路由表接口
export interface IFMenu {
    title: string;
    path: string;
    component: string;
}
// 路由表配置
export const routeConfig: IFMenu[] = [
    { title: '', path: '/Home', component: 'Home' },
    { title: '', path: '/', component: 'Banner' },
];
