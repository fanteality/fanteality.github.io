import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
export default () => {
    let hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    const [hide, setHide] = useState<string>('');
    useEffect(() => {
        setHide(hideBanner);
    }, [hideBanner]);
    // 刷新页面隐藏Banner
    function freshIndex(): void {
        setHide('true');
    }
    return <div className="blog_home">{hide ? <div className="blog_home_content">这是首页</div> : <Banner freshIndex={freshIndex} />}</div>;
};
