import React from 'react';
export default () => {
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    return hideBanner ? <div className="blog_sidebar">侧边栏</div> : null;
};
