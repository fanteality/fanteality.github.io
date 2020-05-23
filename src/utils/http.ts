import Bmob from 'hydrogen-js-sdk';
// 初始化
Bmob.initialize('9d73348cd0a7373a', '011334');

const query = Bmob.Query('Articles');

// 首页获取访问量最高的5篇文章
export function indexHot(): Promise<any> {
    query.order('viewCount');
    query.limit(5);
    return query.find();
}
