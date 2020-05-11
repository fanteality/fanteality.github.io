import React from 'react';
import Banner from 'components/Banner';
export default () => {
    let hideBanner = window.sessionStorage.getItem('hideBanner');
    return <div className="blog_home">
        {!hideBanner && <Banner />}
        
        </div>;
};
