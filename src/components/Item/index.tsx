import React from 'react';
import './index.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
interface Iprop extends RouteComponentProps {
    data: any;
}
export default withRouter((props: Iprop) => {
    let { data } = props;
    return (
        <div className="blog_item">
            <div className="blog_item_title">{data.title}</div>
            <div className="blog_item_info"></div>
            <div className="blog_item_foreword">
                基本每个开发者都需要考虑逻辑复用的问题，否则你的项目中将充斥着大量的重复代码。那么 React 是怎么复用组件逻辑的呢？本文将一一介绍 React 复用组件逻辑的几种方法
            </div>
        </div>
    );
});
