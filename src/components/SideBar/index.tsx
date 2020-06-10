import React from 'react';
import MotionEle from 'components/MotionEle';
import './index.scss';
export default () => {
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    return hideBanner ? (
        <div className="blog_sidebar">
            <MotionEle className="blog_sidebar_avatar" attrname="scale" startValue={0} targetValue={1}>
                <>
                    <img src={require('./img/avatar.png')} alt="" />
                    <i className="border"></i>
                </>
            </MotionEle>
        </div>
    ) : null;
};
