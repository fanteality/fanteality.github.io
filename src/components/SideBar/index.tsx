import React from 'react';
import './index.scss';
export default () => {
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    return hideBanner ? (
        <div className="blog_sidebar">
            <img className="blog_sidebar_avatar" src={require('./img/avatar.png')} alt="" />
        </div>
    ) : null;
};
