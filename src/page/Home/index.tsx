import React from 'react';
import Banner from '../Banner';
import Cookie from 'js-cookie';
export default () => {
    let hideBanner = Cookie.get('hideBanner');
    return <div className="blog_home">{hideBanner ? null : <Banner />}</div>;
};
