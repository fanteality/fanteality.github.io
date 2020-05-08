import React from 'react';
import Banner from '../Banner';
export default () => {
    let hideBanner = window.sessionStorage.getItem('hideBanner');
    return <div className="blog_home">{hideBanner ? null : <Banner/>}</div>;
};
