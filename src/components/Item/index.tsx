import React from 'react';
import './index.scss';
export default () => {
    return (
        <div className="blog_item">
            <div className="blog_item_title">React中组件逻辑复用的那些事儿</div>
            <div className="blog_item_info"></div>
            <div className="blog_item_foreword">
                基本每个开发者都需要考虑逻辑复用的问题，否则你的项目中将充斥着大量的重复代码。那么 React 是怎么复用组件逻辑的呢？本文将一一介绍 React 复用组件逻辑的几种方法
            </div>
        </div>
    );
};
