import React from 'react';
import Icon from 'components/Icon';
import MotionEle from 'components/MotionEle';
import './index.scss';
export default () => {
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    return hideBanner ? (
        <div className="blog_sidebar">
            <MotionEle handleClick={() => window.open('https://github.com/fanteality')} className="blog_sidebar_avatar" attrname="scale" startValue={0} targetValue={1}>
                <>
                    <img src={require('./img/avatar.png')} alt="" />
                    <i className="border"></i>
                </>
            </MotionEle>
            <MotionEle className="blog_sidebar_link" aosOption={{ name: 'fade-up', delay: 100 }}>
                <>
                    <Icon name="juejin" size={30} />
                    <Icon name="jianshu" size={18} />
                </>
            </MotionEle>
            <MotionEle className="blog_sidebar_rights" aosOption={{ name: 'fade-up', delay: 200 }}>
                <>
                    <p>
                        Copyright © 2019 - 2020 My Blog. <br />
                        All Rights Reserved.
                    </p>
                    <p>fanteality保留所有权利</p>
                </>
            </MotionEle>
        </div>
    ) : null;
};
